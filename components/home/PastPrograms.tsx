import Image from "next/image";

// Compact cards for each past program, so the home page can show
// every past program at a glance.
type PastProgram = {
  label: string;
  // `className` adjusts a logo whose image file has a lot of empty space.
  logo: { src: string; alt: string; width: number; height: number; unoptimized?: boolean; className?: string };
  blurb: string;
  link: { label: string; href: string };
  background: string;
  pattern?: string;
  patternOpacity?: number;
  textColor: string;
  accentColor: string;
  art?: { src: string; className: string; width: number; height: number };
  span: string;
};

const PROGRAMS: PastProgram[] = [
  {
    label: "Our Summer 2026 event",
    logo: { src: "/images/sunbeam-hcflag-logo.png", alt: "Sunbeam", width: 1180, height: 424 },
    blurb: "1,624 girls in 38 cities: the largest ever simultaneous coding event by girls, for girls.",
    link: { label: "Learn more about Sunbeam", href: "https://sunbeam.hackclub.com/" },
    background: "linear-gradient(180deg, #c4e8f4 0%, #a3d9ec 55%, #8ccfe6 100%)",
    textColor: "#0E387A",
    accentColor: "#0E387A",
    art: { src: "/images/sunbeam-ray-mascot.png", className: "bottom-3 right-4 h-28", width: 230, height: 230 },
    span: "lg:col-span-3",
  },
  {
    label: "Our Spring 2026 event",
    logo: {
      src: "/assets/sleepover_logo.PNG",
      alt: "Sleepover",
      width: 2048,
      height: 1536,
      className: "origin-left scale-[1.9]",
    },
    blurb: "A slumber-party hackathon: 2,500+ girls took part and 60 flew to Chicago.",
    link: { label: "Learn more about Sleepover", href: "https://sleepover.hackclub.com" },
    background: "#D9DAF8",
    pattern: "url('/images/bunny-tile.png') repeat 0 0 / 100px",
    textColor: "#6C6EA0",
    accentColor: "#6988E0",
    art: { src: "/images/bunny-shocked.png", className: "bottom-3 right-5 h-28", width: 172, height: 230 },
    span: "lg:col-span-3",
  },
  {
    label: "Our 2025 summit",
    logo: {
      src: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/9799d308000f849f_image.png",
      alt: "Parthenon",
      width: 1121,
      height: 390,
    },
    blurb: "130 Hack Clubbers from 15 countries at Civic Hall in New York City.",
    link: { label: "Learn more about Parthenon", href: "https://parthenon.hackclub.com" },
    background: "linear-gradient(to left, #22291F, #020302)",
    textColor: "#FFFFFF",
    accentColor: "#FFFFFF",
    art: { src: "/images/small-vine-1.png", className: "right-0 top-0 h-24 -scale-x-100 opacity-70", width: 800, height: 800 },
    span: "md:col-span-1 lg:col-span-2",
  },
  {
    label: "The Athena Award",
    logo: {
      src: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/6ea8e84acae378a03d5b5e788a780a853aae4d21_outlinedlogoaltcropped.svg",
      alt: "Athena Award",
      width: 1121,
      height: 390,
      unoptimized: true,
    },
    blurb: "1,000+ Hack Clubbers coded 30 hours across 3 projects, with MIT, Girls Who Code and GitHub.",
    link: { label: "Verify a certification", href: "/award" },
    background: "linear-gradient(to right, #903A42, #8D2423)",
    pattern: "url('/svg/background2.svg') center / cover",
    patternOpacity: 0.15,
    textColor: "#FFFFFF",
    accentColor: "#FFFFFF",
    span: "md:col-span-1 lg:col-span-2",
  },
  {
    label: "Our 2024 summit",
    logo: {
      src: "https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/885cf1045da83ea1_image.png",
      alt: "Ascend",
      width: 1121,
      height: 390,
    },
    blurb: "50 girls from across the U.S. and beyond hacked at SpaceX in Los Angeles.",
    link: { label: "Learn more about Ascend", href: "https://ascend.hackclub.com" },
    background: "linear-gradient(to left, #150122, #150122 40%, #2651A6)",
    textColor: "#FFFFFF",
    accentColor: "#FFFFFF",
    art: { src: "https://ascend.hackclub.com/moon.png", className: "-right-10 -top-10 h-40 opacity-60", width: 800, height: 800 },
    span: "md:col-span-2 lg:col-span-2",
  },
];

function PastProgramTile({ program }: { program: PastProgram }) {
  return (
    <a
      href={program.link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex min-h-[220px] flex-col overflow-hidden rounded-lg p-6 transition hover:-translate-y-1 ${program.span}`}
      style={{ background: program.background, color: program.textColor }}
    >
      {program.pattern && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: program.pattern, opacity: program.patternOpacity ?? 0.4 }}
        />
      )}
      {program.art && (
        <Image
          src={program.art.src}
          alt=""
          width={program.art.width}
          height={program.art.height}
          className={`pointer-events-none absolute w-auto ${program.art.className}`}
        />
      )}

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="text-sm font-bold md:text-base" style={{ color: program.accentColor }}>
          {program.label}
        </div>
        <Image
          src={program.logo.src}
          alt={program.logo.alt}
          width={program.logo.width}
          height={program.logo.height}
          unoptimized={program.logo.unoptimized}
          className={`mt-2 h-14 w-auto max-w-[70%] object-contain object-left md:h-16 ${program.logo.className ?? ""}`}
        />
        <p className="mt-3 max-w-[65%] flex-1 sm:max-w-[75%] text-sm leading-snug md:text-base">{program.blurb}</p>
        <span
          className="mt-3 inline-flex items-center gap-1 text-sm italic underline decoration-transparent underline-offset-4 transition-all group-hover:decoration-current md:text-base"
          style={{ color: program.accentColor }}
        >
          {program.link.label} &rarr;
        </span>
      </div>
    </a>
  );
}

export default function PastPrograms() {
  return (
    <section className="relative pb-20 pt-20 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="relative z-10 flex items-center justify-between gap-4 md:gap-8">
          <Image
            src="/images/past-programs-girl.png"
            alt=""
            width={960}
            height={784}
            className="ml-16 h-auto w-56 shrink-0 md:ml-32 md:w-80"
          />
          <h2 className="mr-4 bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text text-right font-quattrocento text-3xl font-bold text-transparent md:mr-8 md:text-5xl">
            Past programs
          </h2>
        </div>

        {/* Sunbeam + Sleepover on the first row, Parthenon + Award + Ascend
            on the second */}
        <div className="-mt-6 grid grid-cols-1 gap-4 md:-mt-8 md:grid-cols-2 lg:grid-cols-6">
          {PROGRAMS.map((program) => (
            <PastProgramTile key={program.logo.alt} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
