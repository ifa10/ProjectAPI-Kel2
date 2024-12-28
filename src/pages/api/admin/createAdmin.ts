// import type { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcrypt";
// import prisma from "@/libs/prisma"; // Pastikan import prisma sesuai dengan konfigurasi Anda
// import jwt from "jsonwebtoken";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const { email, password, role } = req.body;

//     // Pastikan user yang membuat admin memiliki token valid
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//     if ((decoded as any).role !== "admin") {
//       return res.status(403).json({ message: "Forbidden: Only admin can create new admins" });
//     }

//     // Validasi input
//     if (!email || !password || !role) {
//       return res.status(400).json({ message: "Email, password, and role are required" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Simpan admin baru ke database
//     const newUser = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword,
//         role, // role bisa "admin" atau "user"
//       },
//     });

//     return res.status(201).json({ message: "Admin created successfully", user: newUser });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }
