"use client"

import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-100 transition">
          Family Meal
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="hover:text-gray-200 transition font-medium">
              Home
            </Link>
          </li>

          {/* Auth Section */}
          {session?.user ? (
            <li className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={session?.user?.image || "/images/avatar.png"}
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <span className="text-sm font-medium">{session?.user?.name}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="px-5 py-2 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="flex items-center gap-3">
              <Link
                href="/login"
                className="px-5 py-2 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 rounded-full border-2 border-white font-semibold hover:bg-white hover:text-purple-600 transition"
              >
                Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
