import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'DELETE': // Delete wisata by ID
      try {
        await prisma.wisata.delete({
          where: { id: Number(id) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete wisata' });
      }
      break;

    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
