import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";
import { FaArrowLeftLong } from "react-icons/fa6";
import AthenaAwardsPainting from "@/components/AthenaAwardsPainting";
import { baseAthenaAwardProjectImageUrl } from "@/lib/constants";
export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="bg-[#8c2e37] w-full">
      <header className="flex flex-row justify-between items-center lg:px-16 py-6 mb-8 ">
        <div className="flex flex-col items-center justify-center px-6 lg:px-16">
          <Link
            href="/"
            className="text-2xl font-bold flex text-white gap-2 transition-all items-center hover:gap-4 cursor-pointer"
          >
            <FaArrowLeftLong /> Athena
          </Link>
        </div>
        <Link href="https://award.athena.hackclub.com" className="">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6338dbbd7a0200f2b9f2f5b7b59834511c45cc58_athena_award_1000x1000-cropped.svg"
            className="w-[300px] pr-6 lg:pr-0 lg:w-[400px]"
          />
        </Link>
      </header>

      <div className="flex flex-col items-center justify-center mb-3 px-6 lg:px-32 relative">
        <h1 className="text-5xl xl:text-7xl font-bold text-center text-white playfair-display">
          Athena Award Gallery
        </h1>
      </div>

      <p className="text-center text-lg md:text-2xl px-6 lg:px-32 mb-12 text-white ">
        Check out this gallery to see all the projects Athena acolytes are
        creating.
      </p>
      <div className="px-6 lg:px-32 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5 gap-6  bg-[url(/bg.svg)] shadow-lg w-full border-t-2 border-white/10">
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
