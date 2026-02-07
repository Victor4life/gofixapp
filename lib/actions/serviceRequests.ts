"use server";

import { createSupabaseServer } from "@/lib/supabase/server";

export async function acceptRequest(formData: FormData) {
  const supabase = createSupabaseServer();
  const requestId = formData.get("requestId");
  console.log("ACCEPTING:", requestId);

  await supabase
    .from("job_requests")
    .update({ status: "accepted" })
    .eq("id", requestId);
}

export async function rejectRequest(formData: FormData) {
  const supabase = createSupabaseServer();
  const requestId = formData.get("requestId");
  console.log("REJECTING:", requestId);

  await supabase
    .from("job_requests")
    .update({ status: "cancelled" })
    .eq("id", requestId);
}
