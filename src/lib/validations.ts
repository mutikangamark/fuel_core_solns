import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const assessmentFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  fuelType: z.enum(["diesel", "gasoline", "propane", "other"]),
  monthlyUsage: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AssessmentFormData = z.infer<typeof assessmentFormSchema>;
