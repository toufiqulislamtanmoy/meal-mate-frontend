import type React from "react";

import FamilyListSidebar from "@/components/Family/FamilyListSidebar";
import BottomNavigation from "@/components/Navigation/BottomNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Meal Mate",
  description: "Manage meals and expenses effortlessly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen">
        <main className="flex h-screen bg-linear-to-br from-gray-50 to-gray-100 mb-16">
          <div className="lg:flex hidden">
            <FamilyListSidebar />
          </div>
          {children}
        </main>

        <BottomNavigation />
      </body>
    </html>
  );
}
