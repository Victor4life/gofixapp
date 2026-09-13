"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "./Navbar";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#000b76] text-white">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="mx-auto flex min-h-[560px] max-w-[1400px] items-center px-6 pb-12 pt-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          
          {/* Left */}
          <div className="relative z-10 max-w-[600px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-medium uppercase tracking-wide text-white">
                Contact Us
              </span>

              <span className="h-[1px] w-10 bg-white/70" />
            </div>

            <h1 className="max-w-[600px] text-5xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-[64px]">
              We’re Here to
              <br />
              Help You
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-white/90 md:text-lg">
              Have a question, need support, or want to work with us?
              We&apos;d love to hear from you. Get in touch and we&apos;ll
              get back to you as soon as possible.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#000b76] transition hover:bg-blue-50"
              >
                Send a Message
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#faq"
                className="inline-flex items-center gap-3 rounded-xl border border-white/60 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={17} />
                Get Support
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex min-h-[390px] items-end justify-center lg:min-h-[400px]">
            
            {/* Decorative circle */}
            <div className="absolute left-[12%] top-[15%] h-14 w-14 rounded-full bg-[#1557d6]" />

            {/* Large blue abstract shape */}
            <div className="absolute bottom-0 right-[3%] h-[310px] w-[440px] rounded-[55%_45%_50%_50%] bg-[#5b8df5] opacity-90 lg:h-[360px] lg:w-[500px]" />

            {/* White curved accent */}
            <div className="absolute left-[5%] top-[25%] h-[190px] w-[190px] rounded-full border border-white/80 border-r-transparent border-b-transparent rotate-[-25deg]" />

            {/* Artisan */}
            <div className="relative z-10 h-[410px] w-[390px] lg:h-[475px] lg:w-[450px]">
              <Image
                src="/images/about-hero-mann.png"
                alt="GoFix support artisan"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>

            {/* Message bubble */}
            <div className="absolute right-0 top-[18%] z-20 flex max-w-[210px] rotate-[-5deg] items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#000b76] shadow-xl">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7efff]">
                <MessageCircle size={18} className="text-[#0645d8]" />
              </div>

              <p className="text-xs font-semibold leading-5">
                We&apos;re just a
                <br />
                message away!
              </p>
            </div>

            {/* Small decorative lines */}
            <div className="absolute right-[12%] top-[7%] z-10 flex gap-2">
              <span className="h-7 w-1 rotate-[30deg] rounded-full bg-white" />
              <span className="h-4 w-1 rotate-[30deg] rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="relative block h-[75px] w-full"
        >
          <path
            d="M0,20 C180,90 350,105 560,80 C790,53 930,35 1120,65 C1260,88 1360,75 1440,45 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}