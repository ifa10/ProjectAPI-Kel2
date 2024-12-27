import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';
import { verifyToken } from '@/libs/middleware';
import { validateTourPackage } from '@/libs/validation';

// Tipe User
type User = { id: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Verifikasi JWT
    const user = verifyToken(req) as User;
    if (!user || !user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.method === 'GET') {
      // Mendapatkan daftar pemesanan berdasarkan user
      const bookings = await prisma.Booking.findMany({
        where: { userId: user.id },
        include: {
          tourPackage: true, // Pastikan model "tourPackage" ada di schema
        },
      });
      return res.status(200).json(bookings);
    }

    if (req.method === 'POST') {
      const { tourPackageId, paymentStatus } = req.body;

      // Validasi input
      if (!tourPackageId || !paymentStatus) {
        return res.status(400).json({ message: 'Missing fields' });
      }

      // Validasi data terkait paket wisata
      const { valid, message } = validateTourPackage({ id: tourPackageId });
      if (!valid) {
        return res.status(400).json({ message });
      }

      // Buat pemesanan baru
      const booking = await prisma.Booking.create({
        data: {
          userId: user.id,
          tourPackageId,
          paymentStatus,
        },
        include: {
          tourPackage: true, // Termasuk detail tourPackage jika diperlukan
        },
      });

      return res.status(201).json(booking);
    }

    // Tangani method lain
    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
}
