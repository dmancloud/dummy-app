"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white flex items-center justify-between px-6 z-50 shadow-md">
      <Link href="/" className="text-xl font-bold tracking-tight">
        Admin Control Center
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/" className="hover:text-gray-300 text-sm">
          Overview
        </Link>
        <Link href="/dashboard" className="hover:text-gray-300 text-sm">
          Admin Dashboard
        </Link>
        <Link href="/users" className="hover:text-gray-300 text-sm">
          Team
        </Link>
        <Link href="/settings" className="hover:text-gray-300 text-sm">
          Settings
        </Link>
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium">
          A
        </div>
      </nav>
    </header>
  );
}
