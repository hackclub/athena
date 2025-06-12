import { AirtableProjectsManager } from "@/lib/airtable";
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const record = await new AirtableProjectsManager().getProjectById(params.projectId);
  if (!record) return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  return NextResponse.json(record.fields);
}