import Link from "next/link";
import { fetchProjectById } from "@/lib/projects";
import { Project as ProjectType } from "@/types";
import { FaArrowLeftLong } from "react-icons/fa6";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;   
}) {
    const { projectId } = await params;
    const project = await fetchProjectById(projectId);

    return (
      <div className="py-16 px-6 lg:px-32">
        <Link href="/projects" className="text-2xl font-bold opacity-90 flex gap-2 transition-all items-center hover:gap-4 cursor-pointer">
          <FaArrowLeftLong /> Athena Gallery
        </Link>
        
        <div className="mx-auto max-w-2xl md:max-w-3xl mt-12 px-6 md:px-12 py-10 flex flex-col gap-4 items-center border rounded-2xl border-red shadow-sm">
          <h1 className="text-4xl md:text-5xl opacity-90 font-bold text-center">{project.projectName}</h1>
          
          <div className="flex gap-3 items-center">
            <Link href={`/projects/${project.githubUsername}`} className="text-red text-lg text-center font-bold hover:underline">
              View @{project.githubUsername}&apos;s projects →
            </Link>
          </div>

          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed text-center whitespace-pre-wrap">{project.description}</p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-2 text-lg">
            {project.hoursSpent && 
              <span className="text-red font-bold opacity-80 text-lg">{project.hoursSpent} hrs
              </span>
            }

            {project.codeUrl && 
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-red font-bold hover:underline">
                View Code →
              </a>
            }
            {project.playableUrl && 
              <a href={project.playableUrl} target="_blank" rel="noopener noreferrer" className="text-red font-bold hover:underline">
                Play Demo →
              </a>
            }
            <a href={`https://github.com/${project.githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-red font-bold hover:underline">
              View Github →
            </a>
          </div>
        </div>        
      </div>
    );
}