"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import RegisterServiceWorker from "@/components/PWA/RegisterServiceWorker";

export default function NextAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <SessionProvider>
        <RegisterServiceWorker />
        {children}
      </SessionProvider>
    );
}
