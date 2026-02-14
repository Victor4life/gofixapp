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
