import { AirtableEventsManager } from "@/lib/airtable";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function GET() {
  if (!process.env.AIRTABLE_EVENTS_API_KEY || !process.env.AIRTABLE_EVENTS_BASE_ID) {
    return NextResponse.json([]);
  }
  try {
    const events = await new AirtableEventsManager().getAllEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return NextResponse.json([]);
  }
}