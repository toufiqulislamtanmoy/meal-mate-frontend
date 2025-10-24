"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div className="w-full h-[80ox] bg-secondary text-secondary-content">
      <ul className="flex items-center justify-between gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {session?.user ? (
            <Link href="/register">Register</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
