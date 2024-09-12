import { z } from "zod";

export const basicInfoSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "Keep your response within 30 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Keep your response within 20 characters" }),
  birthday: z.date().refine((date) => date <= new Date(), {
    message: "Birthday cannot be in the future",
  }),
  salary: z.number().int().min(0, "Salary must be at least 0"),
  gender: z.enum(["Male", "Female", "Other"]),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "Phone number must contain only digits")
    .min(11, "Phone number must contain 11 digits")
    .max(11, "Phone number must contain 11 digits"),
});

export type BasicInfoSchemaType = z.infer<typeof basicInfoSchema>;

export const skillInfoSchema = z.object({
  skillName: z
    .string()
    .min(1, { message: "Skill name is required" })
    .max(50, { message: "Keep your response within 30 characters" }),
  experienceYears: z
    .number()
    .int()
    .min(0, "Years of experience must be at least 0"),
  skillLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
});

export type SkillInfoSchemaType = z.infer<typeof skillInfoSchema>;
