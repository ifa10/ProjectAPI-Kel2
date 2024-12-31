import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(
  req: { method: string; body: { username: string; password: string } },
  res: { status: (code: number) => { json: (data: object) => void } }
) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Periksa apakah username sudah ada
      const existingUser = await prisma.member.findUnique({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Hash password dan buat user baru
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.member.create({
        data: {
          username,
          password: hashedPassword,
        },
      });

      // Kembalikan data user baru tanpa password
      const { password: _, ...userWithoutPassword } = newUser;
      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
