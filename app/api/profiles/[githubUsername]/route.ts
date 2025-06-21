import { AirtableProfilesManager } from "@/lib/airtable";
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { githubUsername: string } }
) {
  const record = await new AirtableProfilesManager().getProfileByGithubUsername(params.githubUsername);
  if (!record) return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  return NextResponse.json(record.fields);
} 