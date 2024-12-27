import type { NextApiRequest, NextApiResponse } from 'next';
import midtransClient from 'midtrans-client';

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: 'your-server-key',
  clientKey: 'your-client-key',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { bookingId, amount } = req.body;

  try {
    const transaction = await snap.createTransaction({
      transaction_details: {
        order_id: bookingId,
        gross_amount: amount,
      },
    });

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Payment error', error });
  }
}
