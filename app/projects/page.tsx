import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AthenaAwardsPainting from "@/components/AthenaAwardsPainting";
import { baseAthenaAwardProjectImageUrl } from "@/lib/constants";
import { Suspense } from "react";
import GalleryFooter from "@/app/projects/GalleryFooter";

interface ProjectsPageProps {
  searchParams: Promise<{ page?: string }>;
}

// Loading component for better UX
function ProjectsLoading() {
  return (
    <div className="px-6 lg:px-32 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5 gap-6 bg-[url(/bg.svg)] shadow-lg w-full border-t-2 border-white/10">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-white/10 rounded-lg h-64 mb-2"></div>
          <div className="bg-white/10 rounded h-4 mb-1"></div>
          <div className="bg-white/10 rounded h-3 w-2/3"></div>
        </div>
      ))}
    </div>
  );
}

async function ProjectsContent({ page }: { page: number }) {
  try {
    const { projects, total, totalPages } = await getProjects(page, 20);

    return (
      <>
        <div className="px-6 lg:px-32 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5 gap-6  bg-[url(/bg.svg)] shadow-lg w-full border-t-2 border-white/10">
          {projects.map((project) => (
            <AthenaAwardsPainting
              key={project.id}
              image={project.imageUrl || `${baseAthenaAwardProjectImageUrl}`}
              description={project.projectName}
              showCaptionOnSmall={true}
              descriptionBottom={`by @${project.githubUsername}`}
              link1={`/projects/${project.githubUsername}/${project.id}`}
              link2={`/projects/${project.githubUsername}`}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-8 px-6 lg:px-32">
            <div className="text-white text-center text-sm">
              Showing {(page - 1) * 20 + 1} - {Math.min(page * 20, total)} of{" "}
              {total} projects
            </div>

            <div className="flex items-center gap-2">
              {page > 1 && (
                <Link
                  href={`/projects?page=${page - 1}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  <FaChevronLeft className="w-4 h-4" />
                  Previous
                </Link>
              )}

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (page <= 3) {
                    pageNum = i + 1;
                  } else if (page >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = page - 2 + i;
                  }

                  return (
                    <Link
                      key={pageNum}
                      href={`/projects?page=${pageNum}`}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        pageNum === page
                          ? "bg-white text-[#8c2e37] font-semibold"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                })}
              </div>

              {page < totalPages && (
                <Link
                  href={`/projects?page=${page + 1}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  Next
                  <FaChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error("Error loading projects:", error);
    return (
      <div className="px-6 lg:px-32 py-12 text-center">
        <p className="text-white text-lg">
          Failed to load projects. Please try again later.
        </p>
      </div>
    );
  }
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1");

  return (
    <div className="bg-[#8c2e37] w-full">
      <header className="flex flex-row justify-between items-center lg:px-16 py-2 mb-8 border-b-2 border-white/10 shadow-md w-full ">
        <div className="flex flex-col items-center justify-center px-6 lg:px-16">
          <Link
            href="/"
            className="text-2xl font-bold flex text-white gap-2 transition-all items-center hover:gap-4 cursor-pointer"
          >
            <FaArrowLeftLong /> Athena
          </Link>
        </div>
        <Link href="https://award.athena.hackclub.com" className="">
          <Image
            src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/6338dbbd7a0200f2b9f2f5b7b59834511c45cc58_athena_award_1000x1000-cropped.svg"
            alt="Athena Award"
            className="w-[300px] pr-6 lg:pr-0 lg:w-[380px]"
            width={380}
            height={380}
          />
        </Link>
      </header>

      <div className="flex flex-col gap-3 items-center justify-center  px-6 lg:px-32 py-8 relative ">
        <h1 className="text-5xl xl:text-7xl font-bold text-center text-white playfair-display">
          Athena Award Gallery
        </h1>
        <p className="text-center text-lg md:text-2xl px-6 lg:px-32 mb-12 text-white ">
          Check out this gallery to see the projects Athena acolytes are
          creating.
        </p>
      </div>

      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsContent page={currentPage} />
      </Suspense>
      <GalleryFooter />
    </div>
  );
}
