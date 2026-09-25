"use client";

import { useEffect, useState } from "react";
import {
  Camera,
  CheckCircle2,
  Link as LinkIcon,
  Loader2,
  MapPin,
  Phone,
  Save,
  UserRound,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

type Profile = {
  id: string;
  bio: string;
  is_available: boolean;
  years_experience: number;
  phone: string;
  location: string;
  profile_image: string;
};

export default function ArtisanProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [profile, setProfile] = useState<Profile | null>(null);

  const [bio, setBio] = useState("");
  const [years, setYears] = useState(0);
  const [available, setAvailable] = useState(true);
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const [userName, setUserName] = useState("Artisan");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const metadata = user.user_metadata;

      setUserName(
        metadata?.full_name ||
          metadata?.name ||
          user.email?.split("@")[0] ||
          "Artisan"
      );

      const { data, error } = await supabase
        .from("artisan_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (!error && data) {
        setProfile(data);
        setBio(data.bio || "");
        setYears(data.years_experience || 0);
        setAvailable(data.is_available ?? true);
        setPhone(data.phone || "");
        setLocation(data.location || "");
        setProfileImage(data.profile_image || "");
      }

      setLoading(false);
    }

    loadProfile();
  }, []);

  async function saveProfile() {
    if (!profile) return;

    setSaving(true);

    const { error } = await supabase
      .from("artisan_profiles")
      .update({
        bio,
        years_experience: years,
        is_available: available,
        phone,
        location,
        profile_image: profileImage,
      })
      .eq("id", profile.id);

    setSaving(false);

    if (error) {
      alert("Failed to update profile");
      return;
    }

    alert("Profile updated successfully");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faff]">
        <div className="flex min-h-[500px] items-center justify-center">
          <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-6 py-4 shadow-sm">
            <Loader2
              size={20}
              className="animate-spin text-[#000b76]"
            />

            <span className="text-sm font-medium text-gray-600">
              Loading profile...
            </span>
          </div>
        </div>
      </main>
    );
  }

  const firstName = userName.split(" ")[0];

  return (
    <main className="min-h-screen bg-[#f7faff] px-5 py-6 sm:px-7 lg:px-9 lg:py-8">
      <div className="mx-auto max-w-[1100px]">
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#1264f5]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1264f5]">
                Artisan Profile
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-[#000b76] sm:text-3xl">
              Your professional profile
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Keep your information updated so homeowners can understand your
              experience, services and availability.
            </p>
          </div>

          <div
            className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${
              available
                ? "bg-green-50 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                available
                  ? "animate-pulse bg-green-500"
                  : "bg-gray-400"
              }`}
            />

            {available ? "Available for work" : "Currently offline"}
          </div>
        </div>

        {/* =====================================================
            PROFILE SUMMARY
        ===================================================== */}
        <section className="relative mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-[#eef5ff] via-white to-[#e9f2ff] p-5 shadow-sm sm:p-7">
          {/* Decorative background */}
          <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full bg-blue-200/40 blur-2xl" />

          <div className="absolute -bottom-20 right-32 h-40 w-40 rounded-full bg-[#000b76]/5 blur-2xl" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-[#000b76]/10 shadow-md sm:h-32 sm:w-32">
                <img
                  src={
                    profileImage ||
                    "https://placehold.co/300x300?text=Profile"
                  }
                  alt="Artisan profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#1264f5] text-white shadow-md">
                <Camera size={15} />
              </div>
            </div>

            {/* Profile details */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-[#000b76]">
                  {userName}
                </h2>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                    available
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />

                  {available ? "Available" : "Offline"}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-gray-500">
                Skilled Artisan
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {location && (
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin
                      size={15}
                      className="text-[#1264f5]"
                    />
                    {location}
                  </div>
                )}

                {phone && (
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Phone
                      size={15}
                      className="text-[#1264f5]"
                    />
                    {phone}
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2
                    size={15}
                    className="text-green-500"
                  />
                  {years}{" "}
                  {years === 1 ? "year" : "years"} experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORM CARD
        ===================================================== */}
        <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
          {/* Card header */}
          <div className="mb-7 border-b border-gray-100 pb-5">
            <h2 className="text-lg font-bold text-[#000b76]">
              Profile Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update the information homeowners see when viewing your profile.
            </p>
          </div>

          <div className="space-y-5">
            {/* =================================================
                PROFILE IMAGE
            ================================================= */}
            <div className="rounded-xl border border-blue-100 bg-[#fbfdff] p-5">
              <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                <div>
                  <h3 className="text-sm font-bold text-[#000b76]">
                    Profile Image
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Add a professional image to build trust with potential
                    clients.
                  </p>
                </div>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative mx-auto shrink-0 sm:mx-0">
                    <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md ring-1 ring-blue-100">
                      <img
                        src={
                          profileImage ||
                          "https://placehold.co/200x200?text=Profile"
                        }
                        alt="Profile preview"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#1264f5] text-white ring-2 ring-white">
                      <Camera size={12} />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <label className="mb-2 block text-xs font-bold text-gray-700">
                      Profile Image URL
                    </label>

                    <div className="relative">
                      <LinkIcon
                        size={16}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        value={profileImage}
                        onChange={(e) =>
                          setProfileImage(e.target.value)
                        }
                        placeholder="Paste image URL..."
                        className="
                          h-11 w-full rounded-xl
                          border border-gray-200
                          bg-white
                          pl-11 pr-4
                          text-sm text-gray-900
                          outline-none
                          transition
                          placeholder:text-gray-400
                          focus:border-[#1264f5]
                          focus:ring-4
                          focus:ring-[#1264f5]/10
                        "
                      />
                    </div>

                    <p className="mt-2 text-[10px] text-gray-400">
                      Paste a direct image URL such as JPG, PNG or WebP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                BIO
            ================================================= */}
            <div className="rounded-xl border border-gray-100 p-5">
              <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                <div>
                  <label className="block text-sm font-bold text-[#000b76]">
                    Bio
                  </label>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Tell clients about your experience, skills and what makes
                    your service different.
                  </p>
                </div>

                <div>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={5}
                    maxLength={500}
                    placeholder="Tell clients about your experience..."
                    className="
                      w-full resize-none rounded-xl
                      border border-gray-200
                      bg-white
                      px-4 py-3
                      text-sm leading-6 text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#1264f5]
                      focus:ring-4
                      focus:ring-[#1264f5]/10
                    "
                  />

                  <div className="mt-1 flex justify-end">
                    <span className="text-[10px] text-gray-400">
                      {bio.length}/500
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE + PHONE
            ================================================= */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* Experience */}
              <div className="rounded-xl border border-gray-100 p-5">
                <label className="block text-sm font-bold text-[#000b76]">
                  Years of Experience
                </label>

                <p className="mt-1 text-xs text-gray-500">
                  How many years have you been working?
                </p>

                <input
                  type="number"
                  min={0}
                  value={years}
                  onChange={(e) =>
                    setYears(Number(e.target.value))
                  }
                  className="
                    mt-4 h-11 w-full rounded-xl
                    border border-gray-200
                    bg-white
                    px-4
                    text-sm text-gray-900
                    outline-none
                    transition
                    focus:border-[#1264f5]
                    focus:ring-4
                    focus:ring-[#1264f5]/10
                  "
                />
              </div>

              {/* Phone */}
              <div className="rounded-xl border border-gray-100 p-5">
                <label className="block text-sm font-bold text-[#000b76]">
                  Phone Number
                </label>

                <p className="mt-1 text-xs text-gray-500">
                  Your contact number
                </p>

                <div className="relative mt-4">
                  <Phone
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="
                      h-11 w-full rounded-xl
                      border border-gray-200
                      bg-white
                      pl-11 pr-4
                      text-sm text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-[#1264f5]
                      focus:ring-4
                      focus:ring-[#1264f5]/10
                    "
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                LOCATION
            ================================================= */}
            <div className="rounded-xl border border-gray-100 p-5">
              <label className="block text-sm font-bold text-[#000b76]">
                Location
              </label>

              <p className="mt-1 text-xs text-gray-500">
                Your city or service area
              </p>

              <div className="relative mt-4">
                <MapPin
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your city or service area"
                  className="
                    h-11 w-full rounded-xl
                    border border-gray-200
                    bg-white
                    pl-11 pr-4
                    text-sm text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#1264f5]
                    focus:ring-4
                    focus:ring-[#1264f5]/10
                  "
                />
              </div>
            </div>

            {/* =================================================
                AVAILABILITY
            ================================================= */}
            <div className="rounded-xl border border-blue-100 bg-[#f3f8ff] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      available
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${
                        available
                          ? "animate-pulse bg-green-500"
                          : "bg-gray-400"
                      }`}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#000b76]">
                      Availability
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Accept new job requests from clients
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setAvailable(!available)}
                  aria-pressed={available}
                  className={`
                    relative flex h-9 w-fit items-center gap-3
                    rounded-full px-4
                    text-xs font-bold
                    transition-all duration-200
                    ${
                      available
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }
                  `}
                >
                  <span>
                    {available ? "Available" : "Offline"}
                  </span>

                  <span
                    className={`
                      relative h-5 w-9 rounded-full transition-colors
                      ${
                        available
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute top-0.5 h-4 w-4 rounded-full
                        bg-white shadow-sm transition-transform
                        ${
                          available
                            ? "translate-x-4"
                            : "translate-x-0.5"
                        }
                      `}
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* =================================================
                SAVE
            ================================================= */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => window.location.reload()}
                disabled={saving}
                className="
                  rounded-xl border border-gray-200
                  px-6 py-3
                  text-sm font-semibold text-gray-600
                  transition
                  hover:bg-gray-50
                  disabled:opacity-50
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveProfile}
                disabled={saving}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-[#000b76]
                  px-7 py-3
                  text-sm font-semibold text-white
                  shadow-lg shadow-[#000b76]/15
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#00108f]
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {saving ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={17} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}