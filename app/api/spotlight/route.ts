import { AirtableSpotlightManager } from "@/lib/airtable";
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  const post = await new AirtableSpotlightManager().getLatestRecord();
  return NextResponse.json(post.fields);
}