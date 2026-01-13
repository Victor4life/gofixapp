// app/api/test-artisan/route.ts
import { NextResponse } from "next/server";
import { getArtisanById } from "@/lib/data/getArtisanById";

export async function GET(request: Request) {
  const id = request.url.split("/").pop(); // pass artisan id in URL
  if (!id)
    return NextResponse.json({ error: "No ID provided" }, { status: 400 });

  const artisan = await getArtisanById(id);
  return NextResponse.json({ artisan });
}
