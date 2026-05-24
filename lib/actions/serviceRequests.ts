"use server";

import { createSupabaseServer } from "@/lib/supabase/server";

export async function acceptRequest(formData: FormData) {
  const supabase = createSupabaseServer();
  const requestId = formData.get("requestId");

  const { data, error } = await supabase
    .from("job_requests")
    .update({ status: "accepted" })
    .eq("id", requestId)
    .select();

  console.log("ACCEPT RESULT:", data);
  console.log("ACCEPT ERROR:", error);
}

export async function rejectRequest(formData: FormData) {
  const supabase = createSupabaseServer();
  const requestId = formData.get("requestId");

  const { data, error } = await supabase
    .from("job_requests")
    .update({ status: "cancelled" })
    .eq("id", requestId)
    .select();

  console.log("REJECT RESULT:", data);
  console.log("REJECT ERROR:", error);
}

export async function startJob(formData: FormData) {
  const supabase = createSupabaseServer();
  const requestId = formData.get("requestId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("job_requests")
    .update({ status: "in_progress" })
    .eq("id", requestId)
    .eq("status", "accepted")
    .select();

  if (error || !data?.length) {
    throw new Error("Unable to start job");
  }
}

export async function completeJob(formData: FormData) {
  const supabase = createSupabaseServer();
  const requestId = formData.get("requestId");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not authenticated");

  /* 1️⃣ Complete job */
  const { data, error } = await supabase
    .from("job_requests")
    .update({ status: "completed" })
    .eq("id", requestId)
    .eq("status", "in_progress")
    .select();

  if (error || !data?.length) {
    throw new Error("Unable to complete job");
  }

  /* 2️⃣ Artisan becomes available again */
  await supabase
    .from("artisan_profiles")
    .update({ is_available: true })
    .eq("user_id", user.id);
}