import { getArtisanById } from "@/lib/data/getArtisanById";
import { submitRequest } from "./submitRequest";

type Props = {
  params: Promise<{ artisanId: string }>;
};

export default async function RequestPage({ params }: Props) {
  // ✅ REQUIRED IN NEXT 16
  const { artisanId } = await params;

  if (!artisanId) {
    return <p className="p-6">Invalid artisan</p>;
  }

  const artisan = await getArtisanById(artisanId);

  if (!artisan) {
    return <p className="p-6">Artisan not found</p>;
  }

  const name = artisan.users?.[0]?.full_name ?? "Unnamed artisan";

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Request {name}</h1>

      <form action={submitRequest} className="space-y-4">
        <input type="hidden" name="artisanId" value={artisan.id} />

        <select
          name="serviceId"
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select service</option>
          {artisan.artisan_services?.map((s: any) => (
            <option key={s.services.id} value={s.services.id}>
              {s.services.name}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          className="w-full border rounded px-3 py-2"
          rows={4}
          placeholder="Describe your issue..."
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}
