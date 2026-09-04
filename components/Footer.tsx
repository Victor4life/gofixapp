// components/Footer.tsx

"use client";

import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000b76] text-white">

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div className="relative overflow-hidden">

        {/* Subtle curved decorative shape on the right */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[110px]
            -bottom-[150px]
            h-[330px]
            w-[330px]
            rounded-full
            border-[70px]
            border-[#1028a9]
            opacity-70
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            px-6
            py-[42px]
            sm:px-8
            lg:px-[6.5%]
            lg:py-[48px]
          "
        >

          {/* =====================================================
              FOOTER COLUMNS
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-10

              sm:grid-cols-2

              lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.35fr]
              lg:gap-8
          "
          >

            {/* ===================================================
                BRAND
            ==================================================== */}

            <div>

              {/* Logo */}

              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-3
                "
              >

                {/* G icon */}

                <div
                  className="
                    flex
                    h-[38px]
                    w-[38px]
                    items-center
                    justify-center
                    rounded-[8px]
                    border-[2px]
                    border-white
                  "
                >
                  <span
                    className="
                      text-[21px]
                      font-semibold
                      leading-none
                    "
                  >
                    G
                  </span>
                </div>

                {/* Name */}

                <div>
                  <div
                    className="
                      text-[19px]
                      font-semibold
                      leading-none
                    "
                  >
                    GoFix
                  </div>

                  <div
                    className="
                      mt-[4px]
                      text-[9px]
                      leading-none
                      text-white/80
                    "
                  >
                    Find. Hire. Done.
                  </div>
                </div>

              </Link>

              {/* Description */}

              <p
                className="
                  mt-[24px]
                  max-w-[220px]
                  text-[11px]
                  leading-[1.55]
                  text-white/80
                "
              >
                GoFix connects you with
                <br />
                skilled and verified artisans
                <br />
                for any job, big or small.
              </p>

              {/* Social icons */}

              <div
                className="
                  mt-[20px]
                  flex
                  items-center
                  gap-[10px]
                "
              >

                {/* Facebook */}

                <Link
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#061270]
                    text-[12px]
                    font-bold
                    text-white
                    transition
                    hover:bg-white
                    hover:text-[#07158f]
                  "
                >
                  f
                </Link>

                {/* Twitter */}

                <Link
                  href="#"
                  aria-label="Twitter"
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#061270]
                    text-white
                    transition
                    hover:bg-white
                    hover:text-[#07158f]
                  "
                >
                  <Twitter size={12} />
                </Link>

                {/* Instagram */}

                <Link
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#061270]
                    text-white
                    transition
                    hover:bg-white
                    hover:text-[#07158f]
                  "
                >
                  <Instagram size={12} />
                </Link>

                {/* LinkedIn */}

                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#061270]
                    text-white
                    transition
                    hover:bg-white
                    hover:text-[#07158f]
                  "
                >
                  <Linkedin size={12} />
                </Link>

              </div>
            </div>


            {/* ===================================================
                QUICK LINKS
            ==================================================== */}

            <FooterColumn
              title="Quick Links"
              links={[
                ["Home", "/"],
                ["Categories", "/categories"],
                ["How It Works", "/how-it-works"],
                ["Artisans", "/artisans"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ]}
            />


            {/* ===================================================
                FOR CUSTOMERS
            ==================================================== */}

            <FooterColumn
              title="For Customers"
              links={[
                ["Post a Job", "/post-a-job"],
                ["Find an Artisan", "/artisans"],
                ["How It Works", "/how-it-works"],
                ["Help Center", "/help"],
                ["Safety & Trust", "/safety"],
              ]}
            />


            {/* ===================================================
                FOR ARTISANS
            ==================================================== */}

            <FooterColumn
              title="For Artisans"
              links={[
                ["Join as an Artisan", "/join"],
                ["How It Works", "/how-it-works"],
                ["Resources", "/resources"],
                ["Support", "/support"],
              ]}
            />


            {/* ===================================================
                NEWSLETTER
            ==================================================== */}

            <div>

              <h3
                className="
                  text-[13px]
                  font-semibold
                  text-white
                "
              >
                Newsletter
              </h3>

              <p
                className="
                  mt-[19px]
                  max-w-[190px]
                  text-[10px]
                  leading-[1.55]
                  text-white/80
                "
              >
                Stay updated with new tips
                <br />
                and offers.
              </p>

              {/* Newsletter input */}

              <form
                className="
                  mt-[18px]
                  flex
                  h-[42px]
                  w-full
                  max-w-[230px]
                  items-center
                  rounded-[6px]
                  border
                  border-white/60
                  bg-transparent
                  px-[11px]
                "
              >

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-[10px]
                    text-white
                    outline-none
                    placeholder:text-white/80
                  "
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="
                    ml-2
                    flex
                    h-[27px]
                    w-[27px]
                    items-center
                    justify-center
                    rounded-full
                    text-white
                  "
                >
                  <ArrowRight size={17} />
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>


      {/* =========================================================
          BOTTOM COPYRIGHT BAR
      ========================================================== */}

      <div
        className="
          border-t
          border-white/15
        "
      >

        <div
          className="
            mx-auto
            flex
            min-h-[54px]
            w-full
            items-center
            justify-between
            px-6
            text-[9px]
            text-white/65

            sm:px-8

            lg:px-[6.5%]
          "
        >

          <p>
            © 2024 GoFix. All rights reserved.
          </p>

          <div
            className="
              hidden
              items-center
              gap-8

              sm:flex
            "
          >

            <Link
              href="/privacy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* ===============================================================
   FOOTER COLUMN COMPONENT
================================================================ */

type FooterColumnProps = {
  title: string;
  links: [string, string][];
};

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>

      <h3
        className="
          text-[13px]
          font-semibold
          text-white
        "
      >
        {title}
      </h3>

      <ul
        className="
          mt-[17px]
          space-y-[9px]
        "
      >

        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="
                text-[10px]
                leading-none
                text-white/75
                transition-colors
                hover:text-white
              "
            >
              {label}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
}