import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";

type ApiUser = {
  data: {
    _id: string;
    name: string;
    email: string;
    role: string;
    avatar: string;
  };
};

export const authOptions: NextAuthOptions = {
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
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          const user = res?.data;

          if (user) return user;
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
      const t = token as JWT & {
        user?: { id: string; name?: string; email?: string };
      };
      if (user) {
        const u = user as unknown as ApiUser;
        t.user = {
          id: u.data._id,
          name: u.data.name,
          email: u.data.email,
        };
      }
      return t as JWT;
    },

    async session({ session, token }) {
      // attach token info to session
      const t = token as JWT & {
        user?: { id: string; name?: string; email?: string };
      };
      if (t.user) {
        session.user = {
          id: t.user.id,
          name: t.user.name ?? "",
          email: t.user.email ?? "",
        };
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export default handler;
export { handler };
