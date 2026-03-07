import { Project as ProjectType } from "@/types";
import Link from "next/link";

export default function Project({ project }: { project: ProjectType }) {

    //const rescuedImageUrl = "https://cdn.hackclub.com/rescue?url=" + project.imageUrl;

    return (
        <Link href={`/projects/${project.githubUsername}/${project.id}`} className="no-underline">   
            <div className="border rounded-xl p-6 max-w-md  border-red shadow-sm 
            hover:shadow-md transition-shadow duration-300 hover:scale-105 cursor-pointer">
                <h2 className="font-bold opacity-85 text-2xl mb-1 truncate">{project.projectName}</h2>
                
                <p className="text-red font-medium opacity-90 text-base mb-1">
                    By @{project.githubUsername}{" "} 
                    {project.hoursSpent ? `• ${project.hoursSpent} hrs` : ""}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed line-clamp-2">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}