// middleware/auth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_secret_key';

export const authorize = (req: NextApiRequest, res: NextApiResponse, role: string) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { role: string };
    if (decoded.role !== role) {
      return res.status(403).json({ message: 'Access denied' });
    }
    return decoded;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
