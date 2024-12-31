import { NextApiRequest, NextApiResponse } from 'next';

const wisataData = [
  { id: 1, name: 'Pantai Bali', description: 'Pantai indah di Bali.', price: 1500000 },
  { id: 2, name: 'Gunung Bromo', description: 'Pemandangan gunung yang menakjubkan.', price: 1000000 },
  { id: 3, name: 'Candi Borobudur', description: 'Candi bersejarah di Yogyakarta.', price: 750000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(wisataData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
