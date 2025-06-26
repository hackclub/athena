import Link from "next/link";
import Image from "next/image";
import AthenaAwardsPainting from "@/components/AthenaAwardsPainting";
import { getAllProjects } from "@/lib/projects";
import { baseAthenaAwardProjectImageUrl } from "@/lib/constants";
import { Globe, Map, Github } from "lucide-react";

export default async function UserProjectsPage({
  params,
}: {
  params: Promise<{ githubUsername: string }>;
}) {
  const { githubUsername } = await params;
  const projects = await getAllProjects();
  const userProjects = projects.filter(
    (p) => p.githubUsername === githubUsername
  );
  const stateOrProvince = userProjects[0].stateOrProvince;
  const country = userProjects[0].country;

  if (userProjects.length === 0) {
    return (
      <div className="p-8 text-center text-xl">
        No projects found for this user.
      </div>
    );
  }

  return (
    <div className="mx-auto bg-[#8c2e37] min-h-screen">
      <Link
        href="/projects"
        className="text-[#D35648 text-2xl font-bold flex text-white px-6 lg:px-32 inline-block  py-8 border-b-2 border-white/10 shadow-md "
      >
        ← Athena Gallery
      </Link>
      <div className="flex flex-col gap-4 py-12 px-[12vw]">
        <h1 className="text-4xl lg:text-6xl text-center text-white font-bold playfair-display">
          {githubUsername}&apos;s Projects
        </h1>
        <div className="flex flex-row gap-4 justify-center items-center md:text-xl px-6 lg:px-32 text-white ">
          <span className="flex flex-row gap-1 items-center justify-center">
            <Globe /> {stateOrProvince}, {country}
          </span>
          <Link
            className="flex flex-row gap-1 items-center justify-center hover:underline text-[#D35648]"
            href={`https://github.com/${githubUsername}`}
          >
            <Github /> Github Profile
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[url(/bg.svg)] px-[12vw] py-12 min-h-screen shadow-lg w-full border-t-2 border-white/10">
        {userProjects.map((project) => (
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
