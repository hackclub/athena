import { getAllProjects } from "@/lib/projects";
import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ githubUsername: string }> }
) {
  const { githubUsername } = await params;
  const projects = await getAllProjects();
  const filteredProjects = projects.filter(
    (project) => project.githubUsername === githubUsername
  );
  return NextResponse.json(filteredProjects);
}
