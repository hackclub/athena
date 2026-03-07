import Link from "next/link";
import { fetchProjects} from "@/lib/projects";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Credit from "@/app/projects/Credit";
import Project from "@/components/Project";

interface ProjectsPageProps {
    searchParams: Promise<{ page?: number }>;
  }

export default async function ProjectsPage({
    searchParams,
  }: ProjectsPageProps) {
    const { page } = await searchParams;
    const pageNum = Number(page) || 1;

    const data = await fetchProjects(pageNum);

    return (
        <div className="py-16 px-6 lg:px-32">
            <Link href="/" className="text-2xl font-bold opacity-90 flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</Link>
            
            <h1 className="text-5xl font-bold opacity-90 text-center mb-1 mt-12 md:mt-0">Athena Gallery</h1>
            <p className="block text-xl text-center "> 
                Explore 1226 projects across{" "}
                <Link href="https://sleepover.hackclub.com" target="_blank" className="underline underline-offset-2 text-red">Sleepover</Link> &{" "}
                <Link href="https://parthenon.hackclub.com" target="_blank" className="underline underline-offset-2 text-red">Parthenon</Link>. 
            </p>

            <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5 gap-6  w-full ">
                {data.projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
            
            <div className="flex flex-row gap-2 justify-center text-xl text-neutral-700 font-bold items-center">
                {pageNum > 1 && <Link
                  href={`/projects?page=${pageNum - 1}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <FaChevronLeft className="w-4 h-4" />
                  Previous
                </Link>
                }
                <Link
                  href={`/projects?page=${pageNum + 1}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20  rounded-lg transition-colors"
                >
                  Next
                  <FaChevronRight className="w-4 h-4" />
                </Link>
                
            </div>

            <Credit />

        </div>
    );
    
}