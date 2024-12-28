// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Mock user data
const users = [
  { username: 'admin', password: bcrypt.hashSync('password123', 10), role: 'admin' },
  { username: 'user', password: bcrypt.hashSync('password123', 10), role: 'user' },
];

// JWT secret
const JWT_SECRET = 'your_secret_key';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
}
