import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import midtransClient from 'midtrans-client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { wisataId, userId } = req.body;

    try {
      // Cari data wisata dari database
      const wisata = await prisma.wisata.findUnique({
        where: { id: wisataId },
      });

      if (!wisata) {
        return res.status(404).json({ message: 'Wisata not found' });
      }

      // Buat data pemesanan di database
      const pemesanan = await prisma.pemesanan.create({
        data: {
          wisataId,
          userId,
          totalPrice: wisata.price,
        },
      });

      // Konfigurasi Midtrans Snap
      const snap = new midtransClient.Snap({
        isProduction: false, // Ubah ke true jika menggunakan lingkungan produksi
        serverKey: process.env.MIDTRANS_SERVER_KEY!,
        clientKey: process.env.MIDTRANS_CLIENT_KEY!,
      });

      // Data transaksi yang dikirim ke Midtrans
      const parameter = {
        transaction_details: {
          order_id: `ORDER-${pemesanan.id}`,
          gross_amount: wisata.price,
        },
        customer_details: {
          first_name: 'User',
          last_name: 'Name',
          email: 'user@example.com',
          phone: '08123456789',
        },
      };

      // Buat transaksi
      const transaction = await snap.createTransaction(parameter);

      res.status(200).json({ redirectUrl: transaction.redirect_url });
    } catch (error) {
      console.error('Error processing checkout:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
