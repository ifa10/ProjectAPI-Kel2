import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextApiRequest } from 'next';

const SECRET_KEY = process.env.JWT_SECRET as string; // Pastikan tipe string

if (!SECRET_KEY) {
  throw new Error('JWT_SECRET is not defined in environment variables.');
}

// Fungsi untuk memverifikasi token JWT
export function verifyToken(req: NextApiRequest): string | JwtPayload | null {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, SECRET_KEY); // SECRET_KEY dijamin string
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

// Fungsi untuk memeriksa apakah user adalah admin
export function isAdmin(user: string | JwtPayload): boolean {
  if (typeof user !== 'object' || !('role' in user)) {
    return false;
  }
  return user.role === 'admin';
}
