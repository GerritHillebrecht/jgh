import NextAuth, { AuthOptions } from 'next-auth';

import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import prisma from '../../../../libs/prisma.db';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('HAAAALLOOOO');
        console.log('%c credentials', 'color:red', credentials);
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const correctPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!correctPassword) {
          throw new Error('Invalid credentials');
        }

        const res = { ...user, id: user.id.toString() };

        console.log('res', res);
        return res;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  // session: {
  //   strategy: 'jwt',
  // },
  secret: process.env.NEXTAUTH_CLIENT_SECRET || 'secret',
};

export default NextAuth(authOptions);
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
