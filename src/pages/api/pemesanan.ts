import type { NextApiRequest, NextApiResponse } from 'next';
import { paketWisata } from '../pemesananmember'; // Assuming you'll move the data to a separate file

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // Transform the paketWisata data to match the expected Wisata interface
      const formattedWisata = paketWisata.map(paket => ({
        id: paket.id,
        name: paket.name,
        description: paket.includes.join(', '),
        price: parseInt(paket.price.replace(/\./g, ''), 10)
      }));
      
      return res.status(200).json(formattedWisata);
    } catch (error) {
      console.error('Error fetching wisata data:', error);
      return res.status(500).json({ error: 'Failed to fetch wisata data' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { wisataId } = req.body;
      
      // Find the selected package
      const selectedPaket = paketWisata.find(paket => paket.id === wisataId);
      
      if (!selectedPaket) {
        return res.status(404).json({ error: 'Package not found' });
      }

      // In a real application, you would create the order in your database here
      
      // For demo purposes, using the sandbox payment link
      const paymentUrl = "https://app.sandbox.midtrans.com/payment-links/1735740256410";
      
      return res.status(200).json({ redirectUrl: paymentUrl });
    } catch (error) {
      console.error('Error processing checkout:', error);
      return res.status(500).json({ error: 'Failed to process checkout' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
