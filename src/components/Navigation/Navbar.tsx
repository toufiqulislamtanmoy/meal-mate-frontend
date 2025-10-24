"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="w-full bg-secondary text-secondary-content p-5">
      <ul className="flex items-center justify-between gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {session?.user ? (
            <div className="flex items-center gap-3 ">
              <Image
                src={session?.user?.image || "/images/avatar.png"}
                alt="profile"
                width={100}
                height={100}
                className="w-8 h-8 rounded-full ring-2 ring-secondary"
              />
              <button onClick={() => signOut()}>Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
