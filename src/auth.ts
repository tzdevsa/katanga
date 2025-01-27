import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { Provider } from 'next-auth/providers';

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: { label: 'Email Address', type: 'email' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(c) {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: c.email,
          password: c.password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      return { id: data.localId, name: data.displayName, email: data.email };
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  }
  return { id: provider.id, name: provider.name };
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/dashboard/auth/signin',
  },
  callbacks: {
    authorized({ auth: session}) {
      const isLoggedIn = !!session?.user;
      console.log('authorized', isLoggedIn);
      console.log('session', session);
      if (isLoggedIn) {
        return true;
      }

      return false; // Redirect unauthenticated users to login page
    },
    redirect({ url }) {
      return url
    },
  },
});