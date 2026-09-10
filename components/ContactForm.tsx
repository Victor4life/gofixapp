"use client";

import {
  ChevronDown,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { FormEvent } from "react";
import Image from "next/image";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your form submission/API here later.
  };

  return (
    <section
      id="contact-form"
      className="bg-white px-6 pb-20 lg:px-12 lg:pb-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-[24px] bg-[#f1f6ff] p-6 md:p-8 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* ================= LEFT: FORM ================= */}
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#0645d8]">
                  Send Us a Message
                </span>

                <span className="h-[1px] w-8 bg-[#0645d8]" />
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#000b76] md:text-4xl">
                Drop Us a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#7182ad]">
                Fill in the form below and we&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-7">
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold text-[#000b76]"
                    >
                      Full Name <span className="text-[#0645d8]">*</span>
                    </label>

                    <div className="relative">
                      <User
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7182ad]"
                      />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="h-12 w-full rounded-lg border border-[#d8e4fb] bg-white pl-11 pr-4 text-sm text-[#000b76] outline-none transition placeholder:text-[#9aa8c7] focus:border-[#0645d8] focus:ring-2 focus:ring-[#0645d8]/10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold text-[#000b76]"
                    >
                      Email Address <span className="text-[#0645d8]">*</span>
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7182ad]"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="h-12 w-full rounded-lg border border-[#d8e4fb] bg-white pl-11 pr-4 text-sm text-[#000b76] outline-none transition placeholder:text-[#9aa8c7] focus:border-[#0645d8] focus:ring-2 focus:ring-[#0645d8]/10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-semibold text-[#000b76]"
                    >
                      Phone Number <span className="text-[#0645d8]">*</span>
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7182ad]"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 801 234 5678"
                        required
                        className="h-12 w-full rounded-lg border border-[#d8e4fb] bg-white pl-11 pr-4 text-sm text-[#000b76] outline-none transition placeholder:text-[#9aa8c7] focus:border-[#0645d8] focus:ring-2 focus:ring-[#0645d8]/10"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-xs font-semibold text-[#000b76]"
                    >
                      Subject <span className="text-[#0645d8]">*</span>
                    </label>

                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        defaultValue=""
                        className="h-12 w-full appearance-none rounded-lg border border-[#d8e4fb] bg-white px-4 pr-11 text-sm text-[#7182ad] outline-none transition focus:border-[#0645d8] focus:ring-2 focus:ring-[#0645d8]/10"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="artisan">Become an Artisan</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7182ad]"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold text-[#000b76]"
                  >
                    Message <span className="text-[#0645d8]">*</span>
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={17}
                      className="absolute left-4 top-4 text-[#7182ad]"
                    />

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      required
                      className="w-full resize-none rounded-lg border border-[#d8e4fb] bg-white py-3.5 pl-11 pr-4 text-sm text-[#000b76] outline-none transition placeholder:text-[#9aa8c7] focus:border-[#0645d8] focus:ring-2 focus:ring-[#0645d8]/10"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-5 inline-flex h-12 items-center gap-3 rounded-lg bg-[#000b76] px-6 text-sm font-semibold text-white transition hover:bg-[#0645d8]"
                >
                  Send Message

                  <Send
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>

            {/* ================= RIGHT: MAP ================= */}
{/* ================= RIGHT: MAP ================= */}
<div className="relative min-h-[420px] overflow-hidden rounded-[22px]">
  <Image
    src="/images/contact-map-reference.png"
    alt="GoFix HQ location map"
    fill
    className="object-cover"
  />
</div>          </div>
        </div>
      </div>
    </section>
  );
}