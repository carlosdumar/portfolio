import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "First name contains invalid characters"),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Last name contains invalid characters"),

    email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .max(100, "Email is too long"),

  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject is too long"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});


export type ContactForm = z.infer<typeof contactSchema>