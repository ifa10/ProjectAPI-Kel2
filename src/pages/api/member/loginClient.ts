import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '@/libs/prisma';
import { z } from 'zod';

// Define schema for input validation
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate input using zod
    const { email, password } = loginSchema.parse(req.body);

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.role !== 'member') {
      return res.status(403).json({ message: 'Forbidden: Member access only' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: 'member' },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
