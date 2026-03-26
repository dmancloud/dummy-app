"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Overview", icon: "🏠" },
  { href: "/dashboard", label: "Admin Dashboard", icon: "🛡️" },
  { href: "/analytics", label: "Analytics", icon: "📊" },
  { href: "/users", label: "User Directory", icon: "👥" },
  { href: "/projects", label: "Projects", icon: "📁" },
  { href: "/integrations", label: "Integrations", icon: "🔌" },
  { href: "/support", label: "Support", icon: "🛟" },
  { href: "/settings", label: "Admin Settings", icon: "⚙️" },
];

export default function LeftNav() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed left-0 w-56 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto"
      style={{
        top: "calc(var(--sf-banner-height, 0px) + 4rem)",
        height: "calc(100vh - var(--sf-banner-height, 0px) - 4rem)",
      }}
    >
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
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
