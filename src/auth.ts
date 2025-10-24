import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          // Call your Express backend login endpoint
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          const user = res.data?.user;

          if (user) return user; // return user object if login success
          return null;
        } catch (err) {
          console.error("Login failed:", err);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      // attach user info to token
      if (user) {
        token.user = {
          id: user.id || user.id,
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },

    async session({ session, token }) {
      // attach token info to session
      if (token.user) {
        session.user = {
          id: token.user.id,
          name: token.user.name,
          email: token.user.email,
        };
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
