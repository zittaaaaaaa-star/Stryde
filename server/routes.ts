import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactInquirySchema } from "@shared/schema";

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

  const httpServer = createServer(app);

  return httpServer;
}
