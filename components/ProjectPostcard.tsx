/* eslint-disable @next/next/no-img-element */
import type { ShowcaseProject } from "@/data/showcaseProjects";

export default function ProjectPostcard({
  project,
  className = "",
  compact = false,
  style,
}: {
  project: ShowcaseProject;
  // sizing/spacing from the caller: a fixed width in the scrolling row on
  // the home page, full width in the gallery grid
  className?: string;
  // small card: a little screenshot beside the project name and author
  // (stacked on the home page on phones)
  compact?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={project.playableLink}
      target="_blank"
      rel="noopener noreferrer"
      // compact cards size to their content (screenshot + text) rather than
      // stretching, so there's no empty white space on the right
      style={compact ? { gap: 10, width: "fit-content", maxWidth: "100%", ...style } : style}
      className={`flex border border-athena-maroon bg-white shadow-[0px_4px_0px_0px_rgba(82,36,44,0.5)] transition hover:-rotate-1 ${
        compact ? "items-center p-1.5 pr-3" : "gap-4 p-4"
      } ${className}`}
    >
      <div
        className={`aspect-[340/290] shrink-0 border border-athena-maroon ${compact ? "" : "w-[52%]"}`}
        style={compact ? { width: 64 } : undefined}
      >
        <img
          src={project.screenshot}
          alt={project.projectName}
          className="h-full w-full object-cover"
        />
      </div>
      {compact ? (
        <div className="flex min-w-0 flex-col gap-0.5 text-left">
          <p className="line-clamp-2 font-quattrocento text-xs font-bold leading-tight text-athena-maroon">
            {project.projectName}
          </p>
          <p className="truncate font-quattrocento text-[11px] leading-tight text-athena-maroon">
            by {project.name}
          </p>
        </div>
      ) : (
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
      )}
    </a>
  );
}
