import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#000b76] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative mx-auto min-h-[560px] max-w-[1400px] px-6 pb-24 pt-16 lg:px-12 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-[620px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wide text-white">
                About GoFix
              </span>

              <span className="h-px w-12 bg-white/70" />
            </div>

            {/* Heading */}
            <h1 className="max-w-[600px] text-5xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-[58px]">
              We make getting
              <br />
              trusted home help
              <br />
              simple.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[540px] text-base leading-7 text-white/85 md:text-lg">
              GoFix connects homeowners with skilled, verified artisans for
              all kinds of home repair and improvement projects. Our mission
              is to make quality home services easy, reliable and stress-free
              — for everyone.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/categories"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#000b76] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Find an Artisan
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#000b76]"
              >
                Contact Us
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex min-h-[430px] items-end justify-center lg:min-h-[500px]">
            {/* Large abstract blue shape */}
            <div className="absolute right-[-40px] top-[25px] h-[390px] w-[390px] rounded-[48%_52%_45%_55%/52%_45%_55%_48%] bg-[#4c82ff] opacity-90 lg:h-[470px] lg:w-[470px]" />

            {/* Secondary shape */}
            <div className="absolute right-[100px] top-[85px] h-[300px] w-[300px] rounded-full bg-[#1554e8] opacity-70 blur-[1px]" />

            {/* Small floating circle */}
            <div className="absolute right-[70px] top-[25px] h-10 w-10 rounded-full bg-[#1458e8]" />

            {/* Artisan image */}
            <div className="relative z-10 h-[450px] w-full max-w-[530px] overflow-hidden lg:h-[500px]">
              <img
                src="/images/about-hero-man.png"
                alt="GoFix trusted artisan"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>

            {/* Trusted professional label */}
            <div className="absolute right-[5%] top-[105px] z-20 hidden rotate-[-8deg] text-sm font-medium leading-5 text-white lg:block">
              <div className="relative">
                <span>
                  Trusted
                  <br />
                  Skilled
                  <br />
                  Professional
                </span>

                {/* Curved arrow */}
                <svg
                  className="absolute -bottom-12 -left-8"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                >
                  <path
                    d="M48 5C44 25 31 39 9 45"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 38L8 45L16 45"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative lines */}
            <div className="absolute right-[8%] top-[60px] z-20 hidden lg:block">
              <span className="absolute h-10 w-[2px] rotate-[28deg] bg-white" />
              <span className="absolute left-5 top-1 h-6 w-[2px] rotate-[58deg] bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curved white transition */}
      <div className="absolute -bottom-1 left-0 h-[75px] w-full overflow-hidden">
        <div className="absolute -bottom-[55px] left-[-5%] h-[110px] w-[110%] rounded-[50%] bg-white" />
      </div>
    </section>
  );
}