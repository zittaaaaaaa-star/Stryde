import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  technology: z.enum(["piezoelectricity", "thermoelectricity", "rewod", "all"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInquiry = z.infer<typeof contactInquirySchema>;
