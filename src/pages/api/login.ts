import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '@/libs/prisma';
import { z } from 'zod';

// Ambil SECRET_KEY dari environment variables
const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
  throw new Error('JWT_SECRET is not defined in environment variables.');
}

// Validasi input menggunakan Zod
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Log body untuk debugging
    console.log('Request Body:', req.body);

    // Validasi input menggunakan Zod
    const { email, password } = loginSchema.parse(req.body);

    // Cari user berdasarkan email
    const user = await prisma.user.findUnique({ where: { email } });

    // Validasi user dan password
    if (!user || !(await bcrypt.compare(password, user.password))) {
      // Tambahkan delay untuk mencegah brute force
      await new Promise((resolve) => setTimeout(resolve, 100));
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Buat token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      SECRET_KEY as string, // Pastikan TypeScript memahami bahwa SECRET_KEY adalah string
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);

    // Tangani error validasi input
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Invalid input', errors: error.errors });
    }

    // Tangani error lainnya
    return res.status(500).json({ message: 'Internal server error' });
  }
}
