import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';
import { verifyToken, isAdmin } from '@/libs/middleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = verifyToken(req); // Verifikasi JWT
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.method === 'GET') {
      // Daftar semua paket wisata
      const tourPackages = await prisma.tourPackage.findMany();
      return res.status(200).json(tourPackages);
    }

    if (req.method === 'POST') {
      if (!isAdmin(user)) {
        return res.status(403).json({ message: 'Forbidden: Admins only' });
      }

      const { name, description, price } = req.body;

      if (!name || !description || !price) {
        return res.status(400).json({ message: 'Missing fields' });
      }

      const tourPackage = await prisma.tourPackage.create({
        data: { name, description, price },
      });

      return res.status(201).json(tourPackage);
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
}
