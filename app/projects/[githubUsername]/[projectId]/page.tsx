import { getProjects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import AthenaAwardsPainting from "@/components/AthenaAwardsPainting";
import { baseAthenaAwardProjectImageUrl } from "@/lib/constants";
export default async function ProjectDetailPage({
  params,
}: {
  params: { githubUsername: string; projectId: string };
}) {
  const projects = await getProjects();
  const project = projects.find(
    (p) =>
      p.id === params.projectId && p.githubUsername === params.githubUsername
  );

  if (!project) {
    return <div className="p-8 text-center text-xl">Project not found.</div>;
  }

  return (
    <div className="container mx-auto  py-8 bg-[#8c2e37] min-h-screen">
      <Link
        href={`/projects/${project.githubUsername}`}
        className="text-[#D35648] underline mb-4 inline-block px-[16vw]"
      >
        ← Back to {project.githubUsername}'s Projects
      </Link>
      <div className=" flex flex-col lg:flex-row items-center gap-16 bg-[url(/bg.svg)] py-12 px-[12vw]">
        <div className="w-full lg:w-1/2">
          <AthenaAwardsPainting
            image={project.imageUrl || `${baseAthenaAwardProjectImageUrl}`}
            description={project.projectName}
            size="project"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-[#8C2E37] border-2 border-white/20 rounded-lg p-8">
          <h1 className="text-4xl text-white font-bold playfair-display">
            {project.projectName}
          </h1>
          <p className="text-white text-lg my-4">{project.description}</p>
          <div className="flex flex-row gap-4">
            <div className="flex flex-wrap gap-4 ">
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D35648] hover:underline text-lg"
                >
                  View Code
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-4 ">
              {project.playableUrl && (
                <a
                  href={project.playableUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D35648] hover:underline text-lg"
                >
                  Live Demo
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-4 ">
              <a
                href={`https://github.com/${project.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D35648] hover:underline text-lg"
              >
                View User Github
              </a>
            </div>
            <div className="flex flex-wrap gap-4 ">
              <span className="text-white text-lg">
                {project.hoursSpent} hours
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-white shadow-lg rounded-lg flex flex-col h-full mx-[8vw] items-start justify-center gap-4  ">
        <div className="relative h-[330px] w-full bg-red-500 rounded-t-lg">
          <img
            src={project.imageUrl || "https://placehold.co/600x400"}
            alt={project.projectName}
            className="object-cover rounded-t-xl h-full w-full"
          />
        </div>
        <div className="px-6 py-4 h-fit flex flex-col justify-center ">
          <h1 className="text-4xl font-bold">{project.projectName}</h1>
          <Link
            href={`https://github.com/${project.githubUsername}`}
            target="_blank"
            className="text-[#D35648] text-lg "
          >
            by @{project.githubUsername}
          </Link>
          <p className="text-gray-700 text-lg my-4">{project.description}</p>
          <div className="mb-4">
            <span className="text-gray-600 text-lg">
              {project.hoursSpent} hours
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D35648] hover:underline text-lg"
              >
                View Code
              </a>
            )}
            {project.playableUrl && (
              <a
                href={project.playableUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D35648] hover:underline text-lg"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
