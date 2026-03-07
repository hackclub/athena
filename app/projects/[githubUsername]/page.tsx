import Link from "next/link";
import { fetchProjectsByGithubUsername } from "@/lib/projects";
import Project from "@/components/Project";
import { FaArrowLeftLong } from "react-icons/fa6";

export default async function UserProjectsPage({
  params,
}: {
  params: Promise<{ githubUsername: string }>;   
}) {
    const { githubUsername } = await params;
    const projects = await fetchProjectsByGithubUsername(githubUsername);
    const userProjects = projects.filter(
      (p) => p.githubUsername === githubUsername
    );
    return (
      <div className="py-16 px-6 lg:px-32 ">
        <Link href="/projects" className="text-2xl opacity-90 font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena Gallery</Link>
        
        <h1 className="text-4xl md:text-5xl opacity-90 font-bold text-center mb-1 mt-12">{githubUsername}&apos;s Projects</h1>
        
        <div className="px-6 lg:px-32 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-2 gap-6  w-full ">
            {userProjects.map((project) => (
            <Project key={project.id} project={project} />
            ))}
        </div>

      </div>
    );
  }