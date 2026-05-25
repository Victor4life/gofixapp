"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("artisan_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (data) {
        setProfile(data);
        setBio(data.bio || "");
        setYears(data.years_experience || 0);
        setAvailable(data.is_available);
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
      <div className="p-6">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">
            Artisan Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your public artisan information
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

            {/* Profile Image */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
  <div className="flex flex-col items-center gap-4">

    <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
      <img
        src={
          profileImage ||
          "https://placehold.co/200x200?text=Profile"
        }
        alt="Profile"
        className="h-full w-full object-cover"
      />
    </div>

    <div className="w-full">
      <label className="mb-2 block text-sm font-semibold text-black">
        Profile Image URL
      </label>

      <input
        type="text"
        value={profileImage}
        onChange={(e) =>
          setProfileImage(e.target.value)
        }
        placeholder="Paste image URL..."
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#000b76]"
      />
    </div>
  </div>
</div>

          {/* Bio */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">
              Bio
            </label>

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={5}
              placeholder="Tell clients about your experience..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#000b76]"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-black">
              Years of Experience
            </label>

            <input
              type="number"
              value={years}
              onChange={(e) =>
                setYears(Number(e.target.value))
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#000b76]"
            />
          </div>

              {/* Phone */}
          <div>
  <label className="mb-2 block text-sm font-semibold text-black">
    Phone Number
  </label>

  <input
    type="text"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#000b76]"
  />
</div>

            {/* Location */}
            <div>
  <label className="mb-2 block text-sm font-semibold text-black">
    Location
  </label>

  <input
    type="text"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#000b76]"
  />
</div>

          {/* Availability */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4">
            <div>
              <h2 className="font-semibold text-black">
                Availability
              </h2>

              <p className="text-sm text-gray-500">
                Accept new job requests
              </p>
            </div>

            <button
              onClick={() =>
                setAvailable(!available)
              }
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                available
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {available ? "Available" : "Offline"}
            </button>
          </div>

          {/* Save */}
          <button
            onClick={saveProfile}
            disabled={saving}
            className="w-full rounded-xl bg-[#000b76] py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </main>
  );
}