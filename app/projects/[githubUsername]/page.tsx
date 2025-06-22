import Link from "next/link";
import Image from "next/image";
import AthenaAwardsPainting from "@/components/AthenaAwardsPainting";
import { getProjects } from "@/lib/projects";
import { baseAthenaAwardProjectImageUrl } from "@/lib/constants";

export default async function UserProjectsPage({
  params,
}: {
  params: Promise<{ githubUsername: string }>;
}) {
  const { githubUsername } = await params;
  const data = await getProjects();
  const projects = data.filter((p) => p.githubUsername === githubUsername);

  if (projects.length === 0) {
    return (
      <div className="p-8 text-center text-xl">
        No projects found for this user.
      </div>
    );
  }

  return (
    <div className="mx-auto py-8 bg-[#8c2e37] min-h-screen">
      <Link
        href="/projects"
        className="text-[#D35648 text-2xl font-bold flex text-white px-6 lg:px-32 mb-4 inline-block"
      >
        ← Athena Gallery
      </Link>
      <h1 className="text-4xl lg:text-5xl text-white font-bold mb-8  px-[12vw] playfair-display">
        {githubUsername}&apos;s Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[url(/bg.svg)] px-[12vw] py-12 min-h-screen">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.githubUsername}/${project.id}`}
            className="group"
          >
            <AthenaAwardsPainting
              key={project.id}
              image={project.imageUrl || `${baseAthenaAwardProjectImageUrl}`}
              description={project.projectName}
              showCaptionOnSmall={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
