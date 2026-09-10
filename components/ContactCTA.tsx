import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-white px-6 pb-4 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[18px] bg-[#000b76] px-6 py-7 text-white md:px-10 lg:px-12">
          {/* Decorative shapes */}
          <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full bg-[#0645d8]/40" />

          <div className="absolute right-[18%] -bottom-24 h-48 w-48 rounded-full bg-[#1557d6]/30" />

          <div className="absolute right-6 top-5 flex flex-col gap-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1557d6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#1557d6]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#1557d6]/40" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row">
            {/* Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
              <MessageCircle
                size={28}
                strokeWidth={2}
                className="text-[#000b76]"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                Need More Help?
              </h2>

              <p className="mt-1 max-w-[500px] text-sm leading-5 text-white/80">
                Our support team is available 7 days a week to assist you
                with any questions or concerns.
              </p>
            </div>

            {/* Button */}
            <Link
              href="#contact-form"
              className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#000b76] transition hover:bg-blue-50"
            >
              Contact Support

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
