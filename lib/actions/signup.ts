"use server";

import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = await createSupabaseServer();

  /* -----------------------------
     1️⃣ Extract fields
  ----------------------------- */

  const full_name = String(formData.get("full_name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const role = formData.get("role") as "client" | "artisan";

  if (!full_name || !email || !password || !role) {
    throw new Error("Missing required fields");
  }

  const phone = String(formData.get("phone") || "");
  const address = String(formData.get("address") || "");
  const city = String(formData.get("city") || "");
  const state = String(formData.get("state") || "");
  const country = String(formData.get("country") || "");

  // Artisan only
  const business_name = String(formData.get("business_name") || "");
  const bio = String(formData.get("bio") || "");
  const years_experience = Number(formData.get("years_experience") || 0);

  const avatarFile = formData.get("avatar") as File | null;

  /* -----------------------------
     2️⃣ Create auth user
  ----------------------------- */

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError || !authData.user) {
    throw new Error(authError?.message || "Signup failed");
  }

  const userId = authData.user.id;

  /* -----------------------------
     3️⃣ Upload avatar (optional)
  ----------------------------- */

  let avatar_url: string | null = null;

  if (avatarFile && avatarFile.size > 0) {
    const buffer = new Uint8Array(await avatarFile.arrayBuffer());
    const ext = avatarFile.name.split(".").pop();
    const path = `${userId}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(path, buffer, {
        contentType: avatarFile.type,
        upsert: true,
      });

    if (!uploadError) {
      const { data } = supabase.storage.from("avatars").getPublicUrl(path);
      avatar_url = data.publicUrl;
    }
  }

  /* -----------------------------
     4️⃣ Insert user profile
  ----------------------------- */

  const { error: userError } = await supabase.from("users").insert({
    id: userId,
    email,
    full_name,
    role,
    phone,
    address,
    city,
    state,
    country,
    avatar_url,
  });

  if (userError) {
    throw new Error("Failed to create user profile");
  }

  /* -----------------------------
     5️⃣ Artisan profile (if artisan)
  ----------------------------- */

  if (role === "artisan") {
    const { error } = await supabase.from("artisan_profiles").insert({
      user_id: userId,
      business_name,
      bio,
      years_experience,
      is_verified: false,
    });

    if (error) {
      throw new Error("Failed to create artisan profile");
    }
  }

  /* -----------------------------
     6️⃣ Redirect
  ----------------------------- */

  redirect(role === "artisan" ? "/artisan/dashboard" : "/client/dashboard");
}
