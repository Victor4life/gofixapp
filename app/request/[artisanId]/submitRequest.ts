"use server";

import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function submitRequest(formData: FormData) {
  try {
    const supabase = createSupabaseServer();

    const artisanId = formData.get("artisanId") as string;
    const serviceId = formData.get("serviceId") as string;
    const clientId = formData.get("clientId") as string;

    console.log({
      artisanId,
      serviceId,
      clientId,
    });

    const { data, error } = await supabase
      .from("job_requests")
      .insert({
        artisan_id: artisanId,
        service_id: serviceId,
        client_id: clientId,
        status: "pending",
      })
      .select();

    console.log("INSERT DATA:", data);
    console.log("INSERT ERROR:", error);

    if (error) {
      throw error;
    }

    redirect("/client/requests");
  } catch (err) {
    console.error("SUBMIT REQUEST ERROR:", err);

    throw err;
  }
}