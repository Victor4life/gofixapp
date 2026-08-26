"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 md:px-8 pb-8">
      <div className="relative overflow-hidden rounded-[28px] bg-[#eef5ff] px-7 py-10 md:px-12 md:py-11 lg:px-12">

        {/* ================================
            MAIN FOOTER CONTENT
        ================================= */}
        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:gap-2">

          {/* ================================
              BRAND
          ================================= */}
          <div className="flex-1">
            <a href="/" className="inline-flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11"
                >
                  <path
                    d="M24 4L41.32 14V34L24 44L6.68 34V14L24 4Z"
                    stroke="#1455D9"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M29.5 16.5L20 22L29.5 27.5"
                    stroke="#1455D9"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M20 22V32"
                    stroke="#1455D9"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="leading-none">
                <span className="block text-[24px] font-extrabold tracking-tight text-[#102454]">
                  GoFix
                </span>

                <span className="mt-1 block text-[11px] font-medium text-[#263a65]">
                  Find. Hire. Done.
                </span>
              </div>

            </a>

            <p className="mt-6 max-w-[250px] text-[12px] leading-[1.65] text-[#263a65]">
              GoFix is Nigeria's trusted artisan marketplace connecting you
              with skilled professionals for any job.
            </p>
          </div>

          {/* ================================
              EXPLORE
          ================================= */}
          <div className="flex-1">

            <h3 className="mb-5 text-[12px] font-bold text-[#102454]">
              Explore
            </h3>

            <ul className="space-y-2.5">

              <li>
                <a
                  href="/categories"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/how-it-works"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/artisans"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Artisans
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  About Us
                </a>
              </li>

            </ul>
          </div>

          {/* ================================
              SUPPORT
          ================================= */}
          <div className="flex-1">

            <h3 className="mb-5 text-[12px] font-bold text-[#102454]">
              Support
            </h3>

            <ul className="space-y-2.5">

              <li>
                <a
                  href="/help"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/safety"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Safety Tips
                </a>
              </li>

              <li>
                <a
                  href="/faqs"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  FAQs
                </a>
              </li>

            </ul>
          </div>

          {/* ================================
              FOR ARTISANS
          ================================= */}
          <div className="flex-1">

            <h3 className="mb-5 text-[12px] font-bold text-[#102454]">
              For Artisans
            </h3>

            <ul className="space-y-2.5">

              <li>
                <a
                  href="/join"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Join as an Artisan
                </a>
              </li>

              <li>
                <a
                  href="/how-it-works"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/resources"
                  className="text-[11px] text-[#263a65] transition-colors hover:text-[#1455D9]"
                >
                  Resources
                </a>
              </li>

            </ul>
          </div>

          {/* ================================
              FOLLOW US
          ================================= */}
          <div className="flex-1">

            <h3 className="mb-5 text-[12px] font-bold text-[#102454]">
              Follow Us
            </h3>

            <div className="flex items-center gap-2.5">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1455D9] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#0d43b2]"
              >
                <Facebook
                  size={15}
                  fill="currentColor"
                />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1455D9] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#0d43b2]"
              >
                <Twitter
                  size={14}
                  fill="currentColor"
                />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1455D9] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#0d43b2]"
              >
                <Instagram size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1455D9] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#0d43b2]"
              >
                <Linkedin
                  size={15}
                  fill="currentColor"
                />
              </a>

            </div>
          </div>

        </div>

        {/* ================================
            DECORATIVE CITY SKYLINE
        ================================= */}
        <div className="pointer-events-none absolute bottom-0 right-4 hidden h-[500px] w-[540px] opacity-30 lg:block">

          <svg
            viewBox="0 0 320 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >

            <path
              d="M0 118V88H20V75H38V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M38 118V63H58V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M58 118V80H72V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M72 118V53H91V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M91 118V72H111V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M111 118V45H136V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M136 118V66H151V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M151 118V30H174V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M174 118V62H193V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M193 118V48H214V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M214 118V70H230V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M230 118V55H251V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M251 118V74H270V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M270 118V42H292V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            <path
              d="M292 118V63H320V118"
              stroke="#82A9E8"
              strokeWidth="1.5"
            />

            {/* Windows */}
            <g stroke="#82A9E8" strokeWidth="1">
              <path d="M44 72H51M44 82H51M44 92H51M44 102H51" />
              <path d="M78 62H85M78 72H85M78 82H85M78 92H85M78 102H85" />
              <path d="M118 55H127M118 68H127M118 81H127M118 94H127" />
              <path d="M158 42H167M158 55H167M158 68H167M158 81H167M158 94H167" />
              <path d="M199 60H207M199 73H207M199 86H207M199 99H207" />
              <path d="M277 54H285M277 67H285M277 80H285M277 93H285" />
              <path d="M300 73H312M300 86H312M300 99H312" />
            </g>

            {/* Ground */}
            <path
              d="M0 118H320"
              stroke="#82A9E8"
              strokeWidth="2"
            />

          </svg>

        </div>

        {/* ================================
            BOTTOM BAR
        ================================= */}
        <div className="relative z-10 mt-10 flex flex-col gap-4 border-t border-[#d4e2f7] pt-5 md:flex-row md:items-center md:justify-center">

          <p className="text-[10px] text-[#263a65]">
            © {currentYear} GoFix. All rights reserved.
          </p>

          <div className="flex items-center gap-7">

            <a
              href="/privacy"
              className="text-[10px] text-[#263a65] transition-colors hover:text-[#1455D9]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-[10px] text-[#263a65] transition-colors hover:text-[#1455D9]"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}