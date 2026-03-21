"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/users", label: "Users", icon: "👥" },
  { href: "/projects", label: "Projects", icon: "📁" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

export default function LeftNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 w-56 h-[calc(100vh-4rem)] bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
