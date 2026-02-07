"use server";

import { createSupabaseServer } from "@/lib/supabase/server";

export async function createJobRequest(serviceId: string, description: string) {
  const supabase = createSupabaseServer();

  /* 1️⃣ Get authenticated client */
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  /* 2️⃣ Find artisans that offer this service */
  const { data: artisanServices, error: serviceError } = await supabase
    .from("artisan_services")
    .select("artisan_id")
    .eq("service_id", serviceId);

  if (serviceError || !artisanServices?.length) {
    throw new Error("No artisan offers this service");
  }

  const artisanIds = artisanServices.map((a) => a.artisan_id);

  /* 3️⃣ Pick an available artisan profile */
  const { data: artisan, error: artisanError } = await supabase
    .from("artisan_profiles")
    .select("id, user_id")
    .in("id", artisanIds)
    .eq("is_available", true)
    .limit(1)
    .single();

  if (artisanError || !artisan) {
    throw new Error("No available artisan");
  }

  /* 4️⃣ Create job request */
  const { error } = await supabase.from("job_requests").insert({
    client_id: user.id,
    artisan_id: artisan.id, // 🔑 IMPORTANT
    service_id: serviceId,
    description,
    status: "pending",
  });

  if (error) {
    throw error;
  }
}
