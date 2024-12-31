import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';
import midtransClient from 'midtrans-client';

const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
const clientKey = process.env.MIDTRANS_CLIENT_KEY || '';

if (!serverKey || !clientKey) {
  throw new Error('MIDTRANS_SERVER_KEY and MIDTRANS_CLIENT_KEY must be defined in environment variables.');
}

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: serverKey,
  clientKey: clientKey,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  try {
    const { wisataId } = req.body;

    const wisata = await prisma.wisata.findUnique({
      where: { id: Number(wisataId) },
    });

    if (!wisata) {
      return res.status(404).json({ error: 'Wisata not found' });
    }

    const transactionPayload = {
      transaction_details: {
        order_id: `order-${Date.now()}`,
        gross_amount: wisata.price,
      },
      item_details: [
        {
          id: wisata.id.toString(),
          price: wisata.price,
          quantity: 1,
          name: wisata.name,
        },
      ],
    } as unknown as Parameters<typeof snap.createTransaction>[0]; // Type assertion

    const transaction = await snap.createTransaction(transactionPayload);

    res.status(200).json({ redirectUrl: transaction.redirect_url });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
}
