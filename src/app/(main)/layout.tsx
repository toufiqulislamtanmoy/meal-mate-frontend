import type React from "react"
import Navbar from "@/components/Navigation/Navbar"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Family Meal Mate",
  description: "Manage meals and expenses effortlessly",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
