import type { Metadata } from "next";
import Script from "next/script";
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

        {/* ShipFeat Widget */}
        <Script
          src="https://dev.shipfeat.ai/widget.js"
          data-key="cmmsef17j0002ayndi877da63"
          data-api="https://dev.shipfeat.ai"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
