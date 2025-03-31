import { z } from "zod";

export const registerSchema = z.object({
  uid: z.string().min(3, "UID must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  uid: z.string().min(3, "UID must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
