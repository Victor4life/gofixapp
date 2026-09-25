import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Search,
  Star,
  Users,
} from "lucide-react";
import { getArtisans } from "@/lib/data/getArtisans";

export const runtime = "nodejs";

type SearchParams = {
  service?: string;
  city?: string;
};

export default async function ClientDashboard({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // Next.js 16 requires awaiting searchParams
  const { service, city } = await searchParams;

  const artisans = await getArtisans(service, city);

  return (
    <main className="min-h-screen bg-[#f7faff] px-5 py-6 sm:px-7 lg:px-9 lg:py-8">
      <div className="mx-auto max-w-[1250px]">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <section className="mb-7">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#1264f5]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1264f5]">
                  Find trusted professionals
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-[#000b76] sm:text-3xl lg:text-4xl">
                Find the right artisan
                <br className="hidden sm:block" /> for your home.
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Browse verified professionals, compare their services and
                choose the right person for your next home project.
              </p>
            </div>

            {/* Post a Job */}
            <Link
              href="/client/post-job"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#000b76] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#000b76]/15 transition hover:-translate-y-0.5 hover:bg-[#00108f]"
            >
              <BriefcaseBusiness size={17} />
              Post a Job
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* =====================================================
            SEARCH
        ===================================================== */}
        <section className="relative mb-8 overflow-hidden rounded-2xl bg-[#000b76] p-5 shadow-lg sm:p-6">
          {/* Decorative shapes */}
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-400/10 blur-2xl" />
          <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative">
            <div className="mb-4">
              <h2 className="text-base font-bold text-white">
                Find an artisan
              </h2>

              <p className="mt-1 text-xs text-blue-100/70">
                Search by service or location.
              </p>
            </div>

            <form
              action="/client"
              method="GET"
              className="grid gap-3 md:grid-cols-[1fr_1fr_auto]"
            >
              {/* Service */}
              <div className="relative">
                <Search
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="service"
                  defaultValue={service ?? ""}
                  placeholder="What service do you need?"
                  className="
                    h-12 w-full rounded-xl
                    border border-white/10
                    bg-white
                    pl-11 pr-4
                    text-sm text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    focus:ring-4
                    focus:ring-blue-300/20
                  "
                />
              </div>

              {/* City */}
              <div className="relative">
                <MapPin
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="city"
                  defaultValue={city ?? ""}
                  placeholder="City or location"
                  className="
                    h-12 w-full rounded-xl
                    border border-white/10
                    bg-white
                    pl-11 pr-4
                    text-sm text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    focus:ring-4
                    focus:ring-blue-300/20
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  h-12 rounded-xl
                  bg-[#1264f5]
                  px-7
                  text-sm font-bold text-white
                  transition
                  hover:bg-[#2474ff]
                  md:w-auto
                "
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* =====================================================
            RESULTS HEADER
        ===================================================== */}
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold text-[#000b76]">
              Available Artisans
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {artisans.length}{" "}
              {artisans.length === 1 ? "professional" : "professionals"} found
              {service ? ` for "${service}"` : ""}
              {city ? ` in ${city}` : ""}
            </p>
          </div>

          {(service || city) && (
            <Link
              href="/client"
              className="text-xs font-semibold text-[#1264f5] hover:underline"
            >
              Clear filters
            </Link>
          )}
        </div>

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}
        {artisans.length === 0 ? (
          <section className="flex min-h-[380px] items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
            <div className="max-w-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#1264f5]">
                <Users size={28} />
              </div>

              <h3 className="text-lg font-bold text-[#000b76]">
                No artisans found
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We couldn't find any artisans matching your search. Try a
                different service or location.
              </p>

              <Link
                href="/client"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#000b76] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#00108f]"
              >
                Browse all artisans
                <ArrowRight size={15} />
              </Link>
            </div>
          </section>
        ) : (
          /* =====================================================
             ARTISAN GRID
          ===================================================== */
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {artisans.map((artisan: any) => {
              const services =
                artisan.artisan_services
                  ?.map((s: any) => s.services?.name)
                  .filter(Boolean) ?? [];

              return (
                <article
                  key={artisan.id}
                  className="
                    group overflow-hidden rounded-2xl
                    border border-gray-100
                    bg-white
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:shadow-[#000b76]/5
                  "
                >
                  {/* Card Top */}
                  <div className="relative h-24 bg-gradient-to-br from-[#000b76] to-[#1264f5]">
                    <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-white/10" />
                    <div className="absolute -bottom-10 left-1/2 h-24 w-24 rounded-full bg-white/5" />

                    {/* Availability */}
                    <div className="absolute right-4 top-4">
                      <span
                        className={`
                          inline-flex items-center gap-1.5 rounded-full
                          px-2.5 py-1.5
                          text-[10px] font-bold backdrop-blur-sm
                          ${
                            artisan.is_available
                              ? "bg-green-400/20 text-white"
                              : "bg-white/10 text-white/70"
                          }
                        `}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            artisan.is_available
                              ? "bg-green-300"
                              : "bg-white/40"
                          }`}
                        />

                        {artisan.is_available ? "Available" : "Unavailable"}
                      </span>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="relative px-5">
                    <div className="-mt-12 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md">
                      <img
                        src={
                          artisan.profile_image ||
                          "https://placehold.co/200x200?text=Artisan"
                        }
                        alt={
                          artisan.users?.full_name ??
                          "Artisan profile"
                        }
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 pt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-bold text-[#000b76]">
                          {artisan.users?.full_name ??
                            "Unnamed artisan"}
                        </h3>

                        <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                          <MapPin
                            size={13}
                            className="shrink-0 text-[#1264f5]"
                          />

                          <span className="truncate">
                            {artisan.location || "Location not specified"}
                          </span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex shrink-0 items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
                        <Star
                          size={13}
                          fill="currentColor"
                          className="text-yellow-500"
                        />

                        <span className="text-xs font-bold text-gray-700">
                          {artisan.rating ?? "New"}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="mt-4 line-clamp-2 text-xs leading-5 text-gray-500">
                      {artisan.bio ||
                        "Professional artisan ready to help with your home project."}
                    </p>

                    {/* Services */}
                    {services.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {services.slice(0, 3).map(
                          (serviceName: string, index: number) => (
                            <span
                              key={`${serviceName}-${index}`}
                              className="
                                rounded-lg
                                bg-blue-50
                                px-2.5 py-1.5
                                text-[10px] font-semibold
                                text-[#1264f5]
                              "
                            >
                              {serviceName}
                            </span>
                          )
                        )}

                        {services.length > 3 && (
                          <span className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-[10px] font-semibold text-gray-500">
                            +{services.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Divider */}
                    <div className="my-5 h-px bg-gray-100" />

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CheckCircle2
                          size={14}
                          className="text-green-500"
                        />

                        Verified professional
                      </div>

                      <Link
                        href={`/artisan/${artisan.id}`}
                        className="
                          inline-flex items-center gap-1.5
                          text-xs font-bold
                          text-[#000b76]
                          transition-colors
                          hover:text-[#1264f5]
                        "
                      >
                        View Profile
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <section className="relative mt-8 overflow-hidden rounded-2xl bg-[#000b76] p-6 sm:p-8">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
                Can't find what you need?
              </p>

              <h2 className="mt-2 text-xl font-bold text-white">
                Post your project and let artisans find you.
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-5 text-blue-100/70">
                Tell us what you need done and receive responses from
                professionals who can help.
              </p>
            </div>

            <Link
              href="/client/post-job"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#000b76] transition hover:bg-blue-50"
            >
              Post a Job
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}