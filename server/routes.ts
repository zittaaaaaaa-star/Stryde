import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactInquirySchema } from "@shared/schema";
import multer from "multer";
import path from "path";
import { mkdir } from "fs/promises";

const uploadDir = path.join(process.cwd(), "uploads", "team");

mkdir(uploadDir, { recursive: true }).catch(console.error);

const storageConfig = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storageConfig,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Only image files are allowed"));
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactInquirySchema.parse(req.body);
      const savedInquiry = await storage.saveContactInquiry(validatedData);
      res.json({ 
        success: true, 
        message: "Contact inquiry submitted successfully",
        id: savedInquiry.id 
      });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Invalid contact form data" 
      });
    }
  });

  // Get all contact inquiries
  app.get("/api/contact/inquiries", async (_req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: error.message || "Failed to retrieve inquiries" 
      });
    }
  });

  // Get all team members
  app.get("/api/team", async (_req, res) => {
    try {
      const teamMembers = await storage.getTeamMembers();
      res.json(teamMembers);
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: error.message || "Failed to retrieve team members" 
      });
    }
  });

  // Upload team member image
  app.post("/api/team/:id/image", upload.single("image"), async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!req.file) {
        return res.status(400).json({ 
          success: false, 
          message: "No file uploaded" 
        });
      }
      
      const imagePath = `/uploads/team/${req.file.filename}`;
      const updatedMember = await storage.updateTeamMemberImage(id, imagePath);
      
      if (!updatedMember) {
        return res.status(404).json({ 
          success: false, 
          message: "Team member not found" 
        });
      }
      
      res.json({ 
        success: true, 
        member: updatedMember 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: error.message || "Failed to upload image" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
