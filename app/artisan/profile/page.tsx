"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type Profile = {
  id: string;
  bio: string;
  is_available: boolean;
  years_experience: number;
};

export default function ArtisanProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [profile, setProfile] = useState<Profile | null>(null);

  const [bio, setBio] = useState("");
  const [years, setYears] = useState(0);
  const [available, setAvailable] = useState(true);

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