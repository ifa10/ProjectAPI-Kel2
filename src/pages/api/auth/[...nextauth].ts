import { signIn, signInWithGoogle } from '@/libs/firebase/service';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOption: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        const userData = credentials as {
          email: string;
          password: string;
        };

        const user = await signIn(userData);

        if (!user) {
          return null;
        }

        console.log(user);
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: any) {
      if (account?.provider === 'google') {
        token.email = profile?.email;
        token.fullname = profile?.name;
        token.image = profile?.picture;
        token.role = 'user'; // Default role for Google users
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = {
        email: token.email,
        fullname: token.fullname,
        image: token.image,
        role: token.role,
      };
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
};

export default NextAuth(authOption);
