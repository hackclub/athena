import { getAllProjects } from "@/lib/projects";
import { NextResponse } from 'next/server';

export const revalidate = 60;

export async function GET() {
  const result = await getAllProjects();
  return NextResponse.json(result);
}