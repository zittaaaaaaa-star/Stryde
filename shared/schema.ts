import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  technology: z.enum(["piezoelectricity", "thermoelectricity", "rewod", "all"]),
  roomSize: z.string().min(1, "Please specify your room size"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInquiry = z.infer<typeof contactInquirySchema>;

export const teamMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  initials: z.string(),
  image: z.string(),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;
