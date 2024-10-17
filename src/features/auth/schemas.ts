import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, "Required").max(256),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Field name is required").max(256),
  lastName: z.string().trim().min(1, "Field last name is required").max(256),
  email: z.string().trim().email(),
  password: z.string().min(1, "Minimum of 8 characters required").max(256),
});
