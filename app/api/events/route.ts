import { AirtableEventsManager } from "@/lib/airtable";
import { NextResponse } from 'next/server';

export const revalidate = 30;

export async function GET() {
  const events = await new AirtableEventsManager().getAllEvents();
  return NextResponse.json(events);
}