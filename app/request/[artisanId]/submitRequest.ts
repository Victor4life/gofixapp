"use server";

import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function submitRequest(formData: FormData) {
  const supabase = await createSupabaseServer();

  const artisanId = formData.get("artisanId") as string;
  const serviceId = formData.get("serviceId") as string;

  // TEMP client (until auth)
  const CLIENT_ID = "8f7d91d9-b5aa-4124-a1e1-8fe5f8747217";

  await supabase.from("service_requests").insert({
    client_id: CLIENT_ID,
    artisan_id: artisanId,
    service_id: serviceId,
    status: "pending",
  });

  redirect("/client/requests");
}
