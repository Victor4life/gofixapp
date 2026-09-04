"use client";

import Link from "next/link";
import { UserRound, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Artisans", href: "/artisans" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      <div
        className="
          mx-auto
          flex
          max-w-[1400px]
          items-center
          justify-between
          px-6
          py-7
          lg:px-12
        "
      >
        {/* ==========================================================
            LOGO
        ========================================================== */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          {/* G LOGO BOX */}
          <div
            className="
              flex
              h-[45px]
              w-[45px]
              items-center
              justify-center
              rounded-[12px]
              border-[4px]
              border-white
            "
          >
            <span className="text-[24px] font-black leading-none text-white">
              G
            </span>
          </div>

          {/* BRAND NAME */}
          <div>
            <div className="text-[25px] font-bold leading-none text-white">
              GoFix
            </div>

            <div className="mt-1 text-[11px] text-white/90">
              Find. Hire. Done.
            </div>
          </div>
        </Link>

        {/* ==========================================================
            DESKTOP NAVIGATION
        ========================================================== */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                relative
                text-[14px]
                font-medium
                transition-opacity
                hover:opacity-80
                ${index === 0 ? "text-white" : "text-white/90"}
              `}
            >
              {item.label}

              {/* ACTIVE HOME UNDERLINE */}
              {index === 0 && (
                <span
                  className="
                    absolute
                    -bottom-[17px]
                    left-0
                    h-[2px]
                    w-full
                    bg-white
                  "
                />
              )}
            </Link>
          ))}
        </nav>

        {/* ==========================================================
            DESKTOP ACTIONS
        ========================================================== */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* LOGIN */}
          <Link
            href="/login"
            className="
              flex
              items-center
              gap-2
              text-[14px]
              font-medium
              text-white
              transition-opacity
              hover:opacity-80
            "
          >
            <UserRound
              size={18}
              strokeWidth={1.7}
            />

            <span>Log in</span>
          </Link>

          {/* POST A JOB */}
          <Link
            href="/post-job"
            className="
              flex
              items-center
              gap-3
              rounded-[10px]
              bg-white
              px-6
              py-3.5
              text-[14px]
              font-semibold
              text-[#000b76]
              transition-all
              hover:bg-white/90
              hover:shadow-lg
            "
          >
            <span>Post a Job</span>

            <ArrowRight
              size={18}
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* ==========================================================
            MOBILE MENU BUTTON
        ========================================================== */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-lg
            border
            border-white/30
            text-white
            lg:hidden
          "
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* ==========================================================
          MOBILE NAVIGATION
      ========================================================== */}
      {mobileOpen && (
        <div
          className="
            absolute
            left-4
            right-4
            top-full
            rounded-2xl
            border
            border-white/10
            bg-[#000b76]
            p-5
            shadow-2xl
            lg:hidden
          "
        >
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  border-b
                  border-white/10
                  px-2
                  py-4
                  text-[15px]
                  font-medium
                  last:border-0
                  ${
                    index === 0
                      ? "text-white"
                      : "text-white/80"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE LOGIN */}
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="
                mt-4
                flex
                items-center
                gap-2
                px-2
                py-3
                text-[15px]
                font-medium
                text-white
              "
            >
              <UserRound
                size={18}
                strokeWidth={1.7}
              />

              Log in
            </Link>

            {/* MOBILE POST JOB */}
            <Link
              href="/post-job"
              onClick={() => setMobileOpen(false)}
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-3
                rounded-[10px]
                bg-white
                px-5
                py-3.5
                text-[14px]
                font-semibold
                text-[#000b76]
              "
            >
              Post a Job

              <ArrowRight
                size={18}
                strokeWidth={2}
              />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}