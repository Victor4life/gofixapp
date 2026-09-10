"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I become an artisan on GoFix?",
    answer:
      "You can become a GoFix artisan by creating an artisan account, completing your profile, and submitting the required verification details. Once approved, customers can discover and hire you.",
  },
  {
    question: "How does the matching process work?",
    answer:
      "Tell us what service you need and provide your location and job details. GoFix then helps connect you with relevant artisans available in your area.",
  },
  {
    question: "How do I post a job?",
    answer:
      "Click the Post a Job button, describe the work you need, add your location and other relevant details, then submit your request.",
  },
  {
    question: "Can I cancel a job after posting it?",
    answer:
      "Yes. You can cancel a job as long as it has not already been completed. Specific cancellation conditions may depend on the status of the job.",
  },
  {
    question: "Is GoFix free to use?",
    answer:
      "Creating an account and browsing available services is free. Any applicable service or payment fees will be clearly shown before you complete a transaction.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "GoFix is designed to connect customers with trusted artisans in their local area. Available services and locations may vary as the platform expands.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white px-6 pb-20 lg:px-12 lg:pb-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#0645d8]">
              Common Questions
            </span>

            <span className="h-[1px] w-8 bg-[#0645d8]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#000b76] md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#7182ad] md:text-base">
            Can&apos;t find what you&apos;re looking for? Check out our most
            common questions below.
          </p>
        </div>

        {/* FAQ grid */}
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                  isOpen
                    ? "border-[#a9c2f5] bg-[#f7f9ff]"
                    : "border-[#dbe5fa] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-[#000b76]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-[#000b76] text-white"
                        : "bg-[#eef3ff] text-[#0645d8]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={14} />
                    ) : (
                      <Plus size={14} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-xs leading-6 text-[#7182ad]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}