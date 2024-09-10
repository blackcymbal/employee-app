import { z } from "zod";

export const authSchema = z.object({
  userName: z
    .string()
    .min(1, { message: "User name is required" })
    .max(50, { message: "Keep your response within 50 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 digits" }),
});

export type AuthSchema = z.infer<typeof authSchema>;
