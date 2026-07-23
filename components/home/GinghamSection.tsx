"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import Marquee from "react-marquee-slider";

const POLAROID_CROPS = [
  "0% 0%",
  "40% 0%",
  "80% 0%",
  "20% 100%",
  "60% 100%",
  "100% 100%",
];

// react-marquee-slider centers each duplicated row when its content is
// narrower than the container, which shows up as a blank gap mid-scroll on
// wide screens. Repeating the crops keeps the row full on any monitor size.
const POLAROID_ITEMS = Array.from({ length: 24 }, (_, i) => i);

const PROJECT_POSTCARDS = [
  "/images/polaroid-sketch-sheet.png",
  "/images/postcard-photo-placeholder.png",
  "/images/postcard-photo-placeholder.png",
  "/images/polaroid-sketch-sheet.png",
];

// Same fix as POLAROID_ITEMS: keep the marquee row full on any monitor size.
const POSTCARD_ITEMS = Array.from({ length: 16 }, (_, i) => i);

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

function ProjectPostcard({ index }: { index: number }) {
  const image = PROJECT_POSTCARDS[index % PROJECT_POSTCARDS.length];
  return (
    <div className="mx-3 flex w-[300px] shrink-0 gap-4 border border-athena-maroon bg-white p-4 shadow-[0px_4px_0px_0px_rgba(82,36,44,0.5)] sm:mx-5 sm:w-[380px]">
      <div className="aspect-[340/290] w-[52%] shrink-0 border border-athena-maroon">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 py-2 text-center">
        <p className="font-quattrocento text-lg text-athena-maroon sm:text-xl">Project Name</p>
        <p className="font-quattrocento text-[11px] leading-snug text-athena-maroon sm:text-xs">
          short description short description short description short description
        </p>
        <div className="h-px w-20 bg-athena-maroon" />
        <p className="font-quattrocento text-sm text-athena-maroon sm:text-base">by person name</p>
      </div>
    </div>
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
    <section className="relative overflow-hidden pt-20 pb-40 md:pt-28 md:pb-56">
      <img
        src="/images/benefits-bg-gingham.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
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
        <Marquee
          velocity={5}
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={0}
          onInit={() => {}}
          onFinish={() => {}}
        >
          {POLAROID_ITEMS.map((i) => (
            <Polaroid key={i} index={i} />
          ))}
        </Marquee>
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
        <Marquee
          velocity={5}
          direction="ltr"
          scatterRandomly={false}
          resetAfterTries={0}
          onInit={() => {}}
          onFinish={() => {}}
        >
          {POSTCARD_ITEMS.map((i) => (
            <ProjectPostcard key={i} index={i} />
          ))}
        </Marquee>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 md:px-12">
        <PillButton variant="gradient" className="self-end font-bold">check out the gallery</PillButton>
      </div>
    </section>
  );
}
