"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Home,
  LogOut,
  Search,
  Settings,
  UserRound,
  Wrench,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const navItems = [
  {
    label: "Dashboard",
    href: "/artisan",
    icon: Home,
  },
  {
    label: "Requests",
    href: "/artisan/requests",
    icon: ClipboardList,
    count: 2,
  },
  {
    label: "Active Jobs",
    href: "/artisan/active-jobs",
    icon: BriefcaseBusiness,
  },
  {
    label: "Completed",
    href: "/artisan/completed",
    icon: CheckCircle2,
  },
  {
    label: "Profile",
    href: "/artisan/profile",
    icon: UserRound,
  },
  {
    label: "Notifications",
    href: "/artisan/notifications",
    icon: Bell,
    count: 4,
  },
  {
    label: "Settings",
    href: "/artisan/settings",
    icon: Settings,
  },
];

export default function ArtisanSidebarPage() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <aside className="sticky top-0 flex h-screen w-full flex-col overflow-hidden bg-[#000b76] px-4 py-6 text-white">
      {/* =========================================================
          LOGO
      ========================================================= */}
      <Link
        href="/"
        className="group mb-8 flex items-center gap-3 px-3"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[3px] border-white text-white transition-all duration-300 group-hover:scale-105">
          <span className="text-xl font-bold">G</span>
        </div>

        <div>
          <span className="block text-xl font-bold leading-none text-white">
            GoFix
          </span>

          <span className="mt-1 block text-[10px] font-medium tracking-wide text-white/60">
            Artisan Suite
          </span>
        </div>
      </Link>

      {/* =========================================================
          SEARCH
      ========================================================= */}
      <div className="relative mb-7 px-1">
        <Search
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
        />

        <input
          type="search"
          placeholder="Search..."
          className="
            h-10 w-full rounded-xl
            border border-white/10
            bg-white/[0.07]
            pl-10 pr-3
            text-xs text-white
            outline-none
            placeholder:text-white/35
            transition-all
            focus:border-white/25
            focus:bg-white/10
            focus:ring-2
            focus:ring-white/10
          "
        />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="flex-1">
        <p className="mb-3 px-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
          Workspace
        </p>

        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/artisan" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative flex h-11 items-center gap-3
                  rounded-xl px-4
                  text-sm font-medium
                  transition-all duration-200

                  ${
                    isActive
                      ? "bg-[#1264f5] text-white shadow-lg shadow-blue-950/20"
                      : "text-white/65 hover:bg-white/[0.07] hover:text-white"
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-white" />
                )}

                <Icon
                  size={19}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={`
                    shrink-0 transition-colors
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/50 group-hover:text-white"
                    }
                  `}
                />

                <span className="min-w-0 flex-1 truncate">
                  {item.label}
                </span>

                {item.count ? (
                  <span
                    className={`
                      flex h-5 min-w-5 items-center justify-center
                      rounded-full px-1.5 text-[10px] font-bold
                      ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-white/10 text-white/65"
                      }
                    `}
                  >
                    {item.count}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* =========================================================
          BOTTOM SECTION
      ========================================================= */}
      <div className="mt-auto space-y-4 pt-5">
        {/* Profile Tip */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-4">
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/5 blur-2xl" />

          <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <UserRound size={17} className="text-white" />
            </div>

            <p className="text-xs font-bold text-white">
              Keep your profile fresh
            </p>

            <p className="mt-1 text-[10px] leading-4 text-white/50">
              Updated services help clients choose you faster.
            </p>

            <Link
              href="/artisan/profile"
              className="mt-3 inline-flex items-center text-[10px] font-semibold text-blue-200 transition-colors hover:text-white"
            >
              Update profile
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="
            group flex h-11 w-full items-center gap-3
            rounded-xl px-4
            text-sm font-medium text-white/60
            transition-all duration-200
            hover:bg-red-500/10
            hover:text-red-300
          "
        >
          <LogOut
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}