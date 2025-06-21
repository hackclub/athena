import { getProjects } from "@/lib/projects";
import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(
  request: Request,
  { params }: { params: { githubUsername: string } }
) {
  const projects = await getProjects();
  const filteredProjects = projects.filter(
    (project) => project.githubUsername === params.githubUsername
  );
  return NextResponse.json(filteredProjects);
}
