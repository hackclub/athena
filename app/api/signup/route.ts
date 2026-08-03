import { NextRequest, NextResponse } from "next/server";
import { AirtableSignupsManager } from "@/lib/airtable";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await new AirtableSignupsManager().findOrCreateByEmail(email);
  } catch (error) {
    console.error("Failed to create Airtable signup record:", error);
    return NextResponse.json({ error: "Failed to save signup" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
