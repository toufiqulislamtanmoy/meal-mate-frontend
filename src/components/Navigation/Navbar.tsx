"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-purple-600 to-indigo-500 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-100 transition">
          Family Meal
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="hover:text-gray-200 transition">
              Home
            </Link>
          </li>
          {session?.user ? (
            <li className="flex items-center gap-3">
              <Image
                src={session?.user?.image || "/images/avatar.png"}
                alt="profile"
                width={35}
                height={35}
                className="rounded-full border-2 border-white"
              />
              <button
                onClick={() => signOut()}
                className="px-4 py-1 rounded-full bg-white text-purple-600 font-medium hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-1 rounded-full bg-white text-purple-600 font-medium hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-1 rounded-full border border-white font-medium hover:bg-white hover:text-purple-600 transition"
              >
                Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
