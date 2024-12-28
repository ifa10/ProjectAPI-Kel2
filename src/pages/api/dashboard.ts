// pages/api/dashboard.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { authorize } from '@/middlewares/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = authorize(req, res, 'admin');
  if (!user) return; // Jika otorisasi gagal, middleware akan mengirim respons.

  res.json({ message: 'Welcome to the admin dashboard!' });
}
