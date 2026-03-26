import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopNav from "@/components/TopNav";
import LeftNav from "@/components/LeftNav";

export const metadata: Metadata = {
  title: "Admin Control Center",
  description: "An admin dashboard for monitoring users, access, audit activity, and platform analytics.",
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
        <main
          className="ml-56 p-8"
          style={{ marginTop: "calc(var(--sf-banner-height, 0px) + 4rem)" }}
        >
          {children}
        </main>

        <Script
          src="https://dev.shipfeat.ai/widget.js"
          data-key="cmmy4nf920008plndn07k3oax"
          data-api="https://dev.shipfeat.ai"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
