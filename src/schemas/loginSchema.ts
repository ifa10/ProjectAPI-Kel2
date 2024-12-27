// File: src/schemas/loginSchema.ts
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"), // Harus string dan email
  password: z.string().min(1, "Password wajib diisi"), // Harus string dan minimal 1 karakter
});
