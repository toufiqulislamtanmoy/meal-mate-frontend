"use client"

import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🍽</span>
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">Family Meal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium transition">
            Home
          </Link>

          {/* Auth Section */}
          {session?.user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
                <Image
                  src={session?.user?.image || "/images/avatar.png"}
                  alt="profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{session?.user?.name}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="px-5 py-2 text-gray-600 hover:text-gray-900 font-medium transition border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="px-5 py-2 text-gray-600 hover:text-purple-600 font-medium transition">
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 hover:text-emerald-600 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-gray-50">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-600 hover:text-emerald-600 font-medium transition">
              Home
            </Link>

            {session?.user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white border border-gray-200">
                  <Image
                    src={session?.user?.image || "/images/avatar.png"}
                    alt="profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">{session?.user?.name}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="px-5 py-2 text-gray-600 hover:text-gray-900 font-medium transition border border-gray-200 rounded-lg hover:bg-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 text-gray-600 hover:text-gray-900 font-medium transition text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:shadow-lg transition text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
