import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET': {
      try {
        const wisata = await prisma.wisata.findMany();
        res.status(200).json(wisata);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching wisata' });
      }
      break;
    }
    case 'POST': {
      const { name, description, price, idMember } = req.body;

      // Validasi input
      if (!name || !description || !price || !idMember) {
        res.status(400).json({ error: 'All fields are required' });
        return;
      }

      try {
        const newWisata = await prisma.wisata.create({
          data: { 
            name, 
            description, 
            price: parseFloat(price), 
            idMember: parseInt(idMember) 
          },
        });
        res.status(201).json(newWisata);
      } catch (error) {
        res.status(500).json({ error: 'Error creating wisata' });
      }
      break;
    }
    case 'DELETE': {
      const { id } = req.query;

      if (!id) {
        res.status(400).json({ error: 'ID is required' });
        return;
      }

      try {
        await prisma.wisata.delete({
          where: { id: parseInt(id as string) },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Error deleting wisata' });
      }
      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
