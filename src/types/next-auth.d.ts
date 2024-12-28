// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    fullname?: string;
    phone?: string;
    role?: string;
    image?: string;
  }

  interface Session {
    user: User;
  }
}