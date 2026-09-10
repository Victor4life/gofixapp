import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us directly for immediate assistance.",
    value: "+234 810 123 4567",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email and we'll respond as soon as possible.",
    value: "support@gofixapp.xyz",
  },
  {
    icon: MapPin,
    title: "Our Location",
    description: "Visit us at our office.",
    value: (
      <>
        123 Innovation Drive,
        <br />
        Lagos, Nigeria
      </>
    ),
  },
  {
    icon: Clock3,
    title: "Working Hours",
    description: "We're open 7 days a week.",
    value: (
      <>
        Mon - Sun
        <br />
        8:00 AM - 8:00 PM
      </>
    ),
  },
];

export default function ContactInformation() {
  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-10 max-w-[620px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#1557d6]">
              Get In Touch
            </span>

            <span className="h-[1px] w-8 bg-[#1557d6]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#000b76] md:text-4xl">
            Contact Information
          </h2>

          <p className="mt-2 max-w-[560px] text-sm leading-6 text-[#6275a8] md:text-base">
            Reach us through any of the channels below. We&apos;re available
            and ready to assist you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group min-h-[190px] rounded-xl border border-[#dbe5fa] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a9c2f5] hover:shadow-[0_12px_35px_rgba(0,11,118,0.07)]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f0ff]">
                  <Icon
                    size={21}
                    strokeWidth={2}
                    className="text-[#0645d8]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#000b76]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 max-w-[220px] text-xs leading-5 text-[#7182ad]">
                  {item.description}
                </p>

                {/* Value */}
                <div className="mt-4 text-sm font-semibold leading-5 text-[#0645d8]">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}