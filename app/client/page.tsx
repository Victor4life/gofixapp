import Link from "next/link";
import { getArtisans } from "@/lib/data/getArtisans";

export const runtime = "nodejs";

type SearchParams = {
  service?: string;
  city?: string;
};

export default async function ClientDashboard({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // ✅ Next.js 16 requires awaiting searchParams
  const { service, city } = await searchParams;

  const artisans = await getArtisans(service, city);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Available Artisans</h1>

      {artisans.length === 0 && <p>No artisans found</p>}

      <ul className="space-y-2">
        {artisans.map((artisan: any) => (
          <li key={artisan.id} className="border p-3 rounded">
            <p className="font-semibold">
              {artisan.users?.full_name ?? "Unnamed artisan"}
            </p>

            <p className="text-sm text-gray-600">{artisan.bio}</p>

            <p>Status: {artisan.is_available ? "Available" : "Unavailable"}</p>
            <p>Rating: {artisan.rating}</p>

            <p className="text-sm mt-1">
              Services:{" "}
              {artisan.artisan_services
                ?.map((s: any) => s.services?.name)
                .join(", ")}
            </p>
            <Link
              href={`/artisan/${artisan.id}`}
              className="text-purple-600 underline text-sm mt-1 block"
            >
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
