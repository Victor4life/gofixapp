"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Home,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  UserRound,
  Wrench,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const navItems = [
  { label: "Dashboard", href: "/artisan", icon: Home },
  { label: "Requests", href: "/artisan/requests", icon: ClipboardList, count: 2 },
  { label: "Active Jobs", href: "/artisan/active-jobs", icon: BriefcaseBusiness },
  { label: "Completed", href: "/artisan/completed", icon: CheckCircle2 },
  { label: "Profile", href: "/artisan/onboarding", icon: UserRound },
  { label: "Notifications", href: "/artisan/notifications", icon: Bell, count: 4 },
  { label: "Settings", href: "/artisan/settings", icon: Settings },
];

export default function ArtisanSidebarPage() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <aside className="sticky top-0 flex h-screen w-full flex-col bg-white px-4 py-6 shadow-2xl">
      {/* Logo Section */}
      <Link href="/" className="group mb-8 flex items-center gap-3 px-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000b76] text-white shadow-lg shadow-[#000b76]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
          <Wrench size={22} />
        </div>
        <div>
          <span className="block text-xl font-black leading-none text-black">
            GoFix
          </span>
          <span className="mt-1 block text-sm font-semibold text-[#000b76]">
            Artisan Suite
          </span>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="relative mb-6 px-1">
        <input
          type="search"
          placeholder="Search..."
          className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-black placeholder:text-gray-400 transition-all duration-300 focus:border-[#000b76] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#000b76]/10"
        />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-4">
          <Search size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/artisan" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[#000b76] text-white shadow-lg shadow-[#000b76]/20"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <Icon
                size={20}
                className={`shrink-0 transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-500 group-hover:text-[#000b76]"
                }`}
              />
              <span className="min-w-0 flex-1 truncate">{item.label}</span>
              {item.count ? (
                <span
                  className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  {item.count}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto space-y-4 pt-6">
        {/* Profile Tip Card */}
        <div className="relative overflow-hidden rounded-2xl bg-[#000b76] p-4 shadow-lg transition-all duration-300 hover:shadow-xl">
          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
          
          <div className="relative">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white shadow-sm">
              <LayoutDashboard size={18} />
            </div>
            <p className="text-sm font-bold text-white">Keep profile fresh</p>
            <p className="mt-1 text-xs leading-relaxed text-blue-100">
              Updated services help clients choose you faster.
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          type="button"
          onClick={handleLogout}
          className="group flex h-11 w-full items-center gap-3 rounded-xl px-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          Logout
        </button>
      </div>
    </aside>
  );
}