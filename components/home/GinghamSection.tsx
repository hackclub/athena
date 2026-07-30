"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SHOWCASE_PROJECTS, type ShowcaseProject } from "@/data/showcaseProjects";

const POLAROID_CROPS = [
  "0% 0%",
  "40% 0%",
  "80% 0%",
  "20% 100%",
  "60% 100%",
  "100% 100%",
];

// A generous item count just gives more visual variety before the loop repeats.
const POLAROID_ITEMS = Array.from({ length: 24 }, (_, i) => i);

// Plain CSS-animation marquee: the content is rendered twice back to back and
// translated by exactly -50%, so the loop is seamless by construction. Used
// instead of react-marquee-slider, which forwards a non-standard `paused`
// prop straight to the DOM and trips Next's dev error overlay.
// Duration is derived from the actual rendered width and a target px/second
// velocity (rather than a flat guess), so the speed stays correct regardless
// of item count or breakpoint.
function InfiniteRow({
  children,
  direction,
  velocity = 30,
}: {
  children: ReactNode;
  direction: "rtl" | "ltr";
  velocity?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const oneSetWidth = el.scrollWidth / 2;
      setDuration(oneSetWidth / velocity);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [velocity]);

  return (
    <div className="overflow-hidden pb-2">
      <div
        ref={trackRef}
        className="flex w-max"
        style={
          duration
            ? {
                animation: `${direction === "rtl" ? "marquee-rtl" : "marquee-ltr"} ${duration}s linear infinite`,
              }
            : undefined
        }
      >
        <div className="flex">{children}</div>
        <div className="flex" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

function Polaroid({ index }: { index: number }) {
  return (
    <div className="mx-8 flex w-[180px] shrink-0 flex-col items-center gap-3 border border-athena-maroon bg-white p-3 pb-5 shadow-[0px_4px_0px_0px_rgba(82,36,44,0.5)] sm:mx-12 sm:w-[220px]">
      <div
        className="aspect-square w-full border border-athena-maroon"
        style={{
          backgroundImage: "url(/images/polaroid-sketch-sheet.png)",
          backgroundSize: "600% 200%",
          backgroundPosition: POLAROID_CROPS[index % POLAROID_CROPS.length],
        }}
      />
      <p className="text-center font-quattrocento text-base text-athena-maroon sm:text-lg">
        Blah, 16 from City, ST
      </p>
    </div>
  );
}

function ProjectPostcard({ project }: { project: ShowcaseProject }) {
  return (
    <a
      href={project.playableLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-3 flex w-[300px] shrink-0 gap-4 border border-athena-maroon bg-white p-4 shadow-[0px_4px_0px_0px_rgba(82,36,44,0.5)] transition hover:-rotate-1 sm:mx-5 sm:w-[380px]"
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

function PillButton({
  children,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "gradient";
  className?: string;
}) {
  return (
    <button
      className={`rounded-full border-[6px] border-athena-cream2 px-8 py-3 font-quattrocento text-lg text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ring-[6px] ring-athena-accent transition hover:brightness-105 md:text-2xl ${
        variant === "gradient" ? "bg-gradient-to-r from-athena-red4 to-athena-red2" : "bg-athena-red2/80"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default function GinghamSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* scallop.png is a capsule with rounded end caps, not a seamless tile, so
          w-full stretching showed those rounded ends at the screen edges instead
          of the wave pattern. scallop-tile.png is a single repeat unit (one
          276x384 wave period, cropped valley-to-valley) that repeats edge-to-edge
          with no visible seam. Bands sit fully inside the section (no overflow
          into neighboring sections) so there's always pink behind them; the tile
          pattern layers on top and is inset by half a band's height, letting the
          outer half of each scallop's bumps peek out around it. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "clamp(60px, 12.2vw, 140px)",
          backgroundImage: "url('/images/scallop-tile.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "8.8vw auto",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "clamp(60px, 12.2vw, 140px)",
          backgroundImage: "url('/images/scallop-tile.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "8.8vw auto",
          transform: "scaleY(-1)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0"
        style={{
          top: "clamp(30px, 6.1vw, 70px)",
          bottom: "clamp(30px, 6.1vw, 70px)",
          backgroundImage: "url('/images/pink-tiles-repeat.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "167px 246px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <h2
          className="font-quattrocento font-bold text-athena-red3"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          Join a network of teen girls just like you:
        </h2>
      </div>

      <div className="relative my-6 w-full">
        <InfiniteRow direction="rtl">
          {POLAROID_ITEMS.map((i) => (
            <Polaroid key={i} index={i} />
          ))}
        </InfiniteRow>
        <Image
          src="/images/girl-illustration.png"
          alt=""
          width={1149}
          height={877}
          className="pointer-events-none absolute -bottom-[140px] right-16 hidden h-auto w-[240px] md:block lg:-bottom-[220px] lg:right-24 lg:w-[280px] xl:right-32 xl:w-[320px]"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 md:px-12">
        <PillButton variant="gradient" className="self-start font-bold">
          read their stories here
        </PillButton>

        <h2
          className="mt-6 font-quattrocento font-bold text-athena-red3 md:mt-10"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          And learn to make awesome projects
        </h2>
      </div>

      <div className="relative my-6 w-full">
        <InfiniteRow direction="ltr">
          {SHOWCASE_PROJECTS.map((project) => (
            <ProjectPostcard key={project.projectName} project={project} />
          ))}
        </InfiniteRow>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 md:px-12">
        <PillButton variant="gradient" className="self-end font-bold">check out the gallery</PillButton>
      </div>
    </section>
  );
}
