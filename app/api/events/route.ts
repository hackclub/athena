import { AirtableEventsManager } from "@/lib/airtable";
import { NextResponse } from 'next/server';

export const revalidate = 60;

export async function GET() {
  const events = await new AirtableEventsManager().getAllEvents();
  return NextResponse.json(events);
}