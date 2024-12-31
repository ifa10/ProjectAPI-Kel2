import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(
  req: { method: string; body: { username: string; password: string } },
  res: { status: (code: number) => { json: (data: object) => void } }
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Periksa apakah JWT_SECRET tersedia
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ error: 'JWT secret not configured' });
    }

    try {
      const user = await prisma.member.findUnique({ where: { username } });

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user.id }, jwtSecret, {
          expiresIn: '1h',
        });
        return res.status(200).json({ token });
      }

      return res.status(401).json({ error: 'Invalid credentials' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
