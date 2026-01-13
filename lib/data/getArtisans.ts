import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function getArtisans(service?: string, city?: string) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data, error } = await supabase
    .from("artisan_profiles")
    .select(
      `
      id,
      bio,
      latitude,
      longitude,
      rating,
      is_available,
      users (
        full_name
      ),
      artisan_services (
        services (
          name
        )
      )
    `
    )
    .eq("is_available", true);

  if (error) {
    console.error("Error fetching artisans:", error.message);
    return [];
  }

  let artisans = data ?? [];

  // 🔍 Filter by service name
  if (service) {
    artisans = artisans.filter((artisan: any) =>
      artisan.artisan_services?.some(
        (as: any) => as.services?.name?.toLowerCase() === service.toLowerCase()
      )
    );
  }

  // 📍 (Optional) city/location filtering placeholder
  // You'll later replace this with geo distance
  if (city) {
    artisans = artisans.filter((a: any) =>
      a.bio?.toLowerCase().includes(city.toLowerCase())
    );
  }

  return artisans;
}
