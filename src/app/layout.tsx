import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import LeftNav from "@/components/LeftNav";

export const metadata: Metadata = {
  title: "Dummy App",
  description: "A dummy Next.js app with top and left navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopNav />
        <LeftNav />
        <main className="ml-56 mt-16 p-8">{children}</main>
      </body>
    </html>
  );
}
