"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SHOWCASE_PROJECTS } from "@/data/showcaseProjects";
import ProjectPostcard from "@/components/ProjectPostcard";
import { athena, graphPaper } from "@/lib/athenaColors";

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
    <div className="overflow-hidden pt-6 pb-3">
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

function PillButton({
  children,
  variant = "solid",
  className = "",
  href,
}: {
  children: ReactNode;
  variant?: "solid" | "gradient";
  className?: string;
  href?: string;
}) {
  const pillClassName = `rounded-full border-[6px] border-athena-cream2 px-8 py-3 font-quattrocento text-lg text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ring-[6px] ring-athena-accent transition hover:brightness-105 md:text-2xl ${
    variant === "gradient" ? "bg-gradient-to-r from-athena-red4 to-athena-red2" : "bg-athena-red2/80"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`inline-block text-center ${pillClassName}`}>
        {children}
      </Link>
    );
  }

  return <button className={pillClassName}>{children}</button>;
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
      {/* the "By joining Athena" section's yellow grid carries on behind the
          top scallops, so the gaps between the bumps aren't plain cream */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "clamp(60px, 12.2vw, 140px)",
          backgroundColor: athena.cream2,
          backgroundImage: graphPaper(athena.gold, 0.18),
          backgroundSize: "28px 28px",
          backgroundPosition: "center top",
        }}
      />
      {/* cream behind the bottom scallops so they sit straight on the cream
          of the Parthenon section below, with no white strip between */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-athena-cream2"
        style={{ height: "clamp(30px, 6.1vw, 70px)" }}
      />
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
        className="pointer-events-none absolute inset-x-0 md:border-y-2 md:border-athena-red2/20"
        style={{
          top: "clamp(30px, 6.1vw, 70px)",
          bottom: "clamp(30px, 6.1vw, 70px)",
          backgroundImage: "url('/images/pink-tiles-repeat.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "167px 246px",
        }}
      />

      {/* same left edge as the "By joining Athena, you..." heading above */}
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-6 px-4 md:px-8">
        <h2
          className="mt-6 text-left font-quattrocento font-bold text-athena-red3 md:mt-10"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          Teens like you are making awesome projects:
        </h2>
      </div>

      <div className="relative my-6 w-full">
        <InfiniteRow direction="ltr">
          {SHOWCASE_PROJECTS.map((project) => (
            <ProjectPostcard
              key={project.projectName}
              project={project}
              className="mx-3 w-[300px] shrink-0 sm:mx-5 sm:w-[380px]"
            />
          ))}
        </InfiniteRow>
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col px-4 md:px-8">
        <PillButton variant="gradient" className="self-start font-bold" href="/gallery">
          check out the gallery
        </PillButton>
      </div>
    </section>
  );
}
