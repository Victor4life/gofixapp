import Link from "next/link";
import { getArtisanById } from "@/lib/data/getArtisanById";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArtisanProfile({ params }: Props) {
  // ✅ REQUIRED IN NEXT 16
  const { id } = await params;

  if (!id) {
    return <p className="p-6">Invalid artisan ID</p>;
  }

  const artisan = await getArtisanById(id);

  if (!artisan) {
    return <p className="p-6">Artisan not found</p>;
  }

  // ✅ users is an ARRAY
  const name = artisan.users?.[0]?.full_name ?? "Unnamed artisan";

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>

      <p className="text-gray-600 mb-2">{artisan.bio ?? "No bio provided"}</p>

      <p className="mb-2">
        Status: {artisan.is_available ? "Available" : "Unavailable"}
      </p>

      <p className="mb-4">Rating: {artisan.rating}</p>

      <div className="mb-6">
        <h2 className="font-semibold mb-1">Services</h2>
        <ul className="list-disc pl-5">
          {artisan.artisan_services?.map((s: any) => (
            <li key={s.services.id}>{s.services.name}</li>
          ))}
        </ul>
      </div>

      {/* ✅ REQUEST SERVICE BUTTON */}
      <Link
        href={`/request/${artisan.id}`}
        className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Request Service
      </Link>
    </div>
  );
}
