import Navbar from "@/components/Navigation/Navbar";

export const metadata = {
  title: "Family Meal",
  description: "Manage meals and expenses effortlessly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-linear-to-b from-blue-50 to-white text-gray-800 min-h-screen">
        <Navbar />
        <main className="container mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
