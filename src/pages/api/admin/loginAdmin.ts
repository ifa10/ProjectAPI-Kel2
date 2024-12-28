// import type { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import prisma from "@/libs/prisma";
// import { z } from "zod";

// // Schema untuk validasi input
// const loginSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     console.log("Invalid method:", req.method);
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     console.log("Request body:", req.body);

//     // Validasi input menggunakan Zod
//     const { email, password } = loginSchema.parse(req.body);

//     // Cari user berdasarkan email
//     const user = await prisma.user.findUnique({ where: { email } });
//     console.log("User found:", user);

//     if (!user || user.role !== "admin") {
//       console.log("Access denied: Admin only or user not found.");
//       return res.status(403).json({ message: "Forbidden: Admin access only" });
//     }

//     // Validasi password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       console.log("Invalid password");
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Generate token
//     const token = jwt.sign(
//       { id: user.id, email: user.email, role: "admin" },
//       process.env.JWT_SECRET!,
//       { expiresIn: "1h" }
//     );

//     console.log("Token generated:", token);

//     return res.status(200).json({ token, message: "Login successful" });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       console.log("Validation error:", error.errors);
//       return res.status(400).json({ message: "Invalid input", errors: error.errors });
//     }
//     console.error("Unexpected error:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }
