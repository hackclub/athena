/* eslint-disable @next/next/no-img-element */
import type { ShowcaseProject } from "@/data/showcaseProjects";

export default function ProjectPostcard({
  project,
  className = "",
}: {
  project: ShowcaseProject;
  // sizing/spacing from the caller: a fixed width in the scrolling row on
  // the home page, full width in the gallery grid
  className?: string;
}) {
  return (
    <a
      href={project.playableLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-4 border border-athena-maroon bg-white p-4 shadow-[0px_4px_0px_0px_rgba(82,36,44,0.5)] transition hover:-rotate-1 ${className}`}
    >
      <div className="aspect-[340/290] w-[52%] shrink-0 border border-athena-maroon">
        <img
          src={project.screenshot}
          alt={project.projectName}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 py-2 text-center">
        <p className="font-quattrocento text-lg text-athena-maroon sm:text-xl">
          {project.projectName}
        </p>
        <p className="font-quattrocento text-[11px] leading-snug text-athena-maroon sm:text-xs">
          {project.program} · {project.age} years old · {project.country}
        </p>
        <div className="h-px w-20 bg-athena-maroon" />
        <p className="font-quattrocento text-sm text-athena-maroon sm:text-base">
          by {project.name}
        </p>
      </div>
    </a>
  );
}
