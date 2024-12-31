import { NextApiRequest, NextApiResponse } from 'next';
import midtransClient from 'midtrans-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { order_id, gross_amount } = req.body;

    try {
      // Konfigurasi Midtrans Snap
      const snap = new midtransClient.Snap({
        isProduction: false, // Ubah ke true jika menggunakan lingkungan produksi
        serverKey: process.env.MIDTRANS_SERVER_KEY!,
        clientKey: process.env.MIDTRANS_CLIENT_KEY!,
      });

      // Parameter transaksi
      const parameter = {
        transaction_details: {
          order_id,
          gross_amount,
        },
        customer_details: {
          first_name: 'User',
          last_name: 'Name',
          email: 'user@example.com',
          phone: '08123456789',
        },
      };

      // Buat transaksi
      const transaction = await snap.createTransaction(parameter as any); // Gunakan `as any` untuk menghindari error tipe

      res.status(200).json({ redirectUrl: transaction.redirect_url });
    } catch (error) {
      console.error('Midtrans callback error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
