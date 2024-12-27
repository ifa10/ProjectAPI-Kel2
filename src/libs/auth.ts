import { sign } from 'jsonwebtoken';

export function createToken(user: { id: string }) {
  return sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
}
