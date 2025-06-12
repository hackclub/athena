import { AirtableProjectsManager } from "@/lib/airtable";
import { NextResponse } from 'next/server';

export const revalidate = 60;

export async function GET() {
  const projects = await new AirtableProjectsManager().getAllProjects();
  return NextResponse.json(projects);
}