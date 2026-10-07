import Image from "next/image";
import { athena } from "@/lib/athenaColors";

type Step = {
  title: string;
  body: string;
  // Shown as a plain photo across the top of the card, cropped to 4:3;
  // `position` picks which part of the picture to keep.
  image: { src: string; alt: string; position?: string };
  // Solid colour of the writing area under the photo, plus the text colours
  // that read on it.
  paper: string;
  titleColor: string;
  bodyColor: string;
  cta: { label: string; href: string };
};

const STEPS: Step[] = [
  {
    title: "Make your first website",
    body: "New to coding? Follow this guide to make your first website and we’ll pay for a refresher!",
    image: { src: "/images/refresher-card.jpg", alt: "Refresher: a glass of boba milk tea", position: "center top" },
    paper: "251,228,234",
    titleColor: athena.red3,
    bodyColor: athena.maroon2,
    cta: { label: "Join Refresher", href: "https://refresher.hackclub.com/" },
  },
  {
    title: "Join Snowglobe",
    body: "Join the largest all-girls hackathon, Nov 20–22 at Notion HQ in SF. Earn a partner-recognized certificate and meet women engineers.",
    image: {
      src: "/images/snowglobe-poster.jpg",
      alt: "Hack Club's Snowglobe, Nov 20-22, San Francisco: a penguin waving inside a snow globe with the Golden Gate Bridge",
      position: "left top",
    },
    paper: "244,249,253",
    titleColor: "#C8361F",
    bodyColor: "#1B2A5E",
    cta: { label: "Sign up", href: "https://snowglobe.hackclub.com/" },
  },
  {
    title: "Learn from women\nin tech industry",
    body: "Ask questions live at our AMA (Ask Me Anything) calls with women in tech.",
    image: {
      src: "/images/ama-speakers-six.jpg",
      alt: "Past AMA speakers from NASA, IBM, Bluesky, Waymo, Microsoft and Lenovo",
      position: "center top",
    },
    paper: "255,246,234",
    titleColor: athena.red3,
    bodyColor: athena.maroon2,
    cta: { label: "Join Slack", href: "https://hackclub.enterprise.slack.com/archives/C06T17NQB0B" },
  },
];

// Each card sits at its own slight angle with a different strip of tape,
// so the row reads like pictures pinned up by hand rather than a UI grid.
const NOTE_LOOKS = [
  { rotate: "md:-rotate-2", tape: "-rotate-3 bg-athena-red4" },
  { rotate: "md:rotate-1", tape: "rotate-2 bg-athena-red3" },
  { rotate: "md:-rotate-1", tape: "-rotate-2 bg-athena-accent" },
];

// A faint repeating pattern of light-pink sparkles and dots over the red
// band: one sparse 240px tile (a single sparkle and three dots), tiled edge
// to edge.
const SPARKLE_PATTERN = "url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22240%22%20height%3D%22240%22%20viewBox%3D%220%200%20240%20240%22%3E%3Cg%20fill%3D%22%23FFC9D4%22%3E%3Cpath%20d%3D%22M60%2044%20C61%2052%2064%2055%2072%2056%20C64%2057%2061%2060%2060%2068%20C59%2060%2056%2057%2048%2056%20C56%2055%2059%2052%2060%2044%20Z%22/%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22176%22%20r%3D%222.5%22/%3E%3Ccircle%20cx%3D%22176%22%20cy%3D%2260%22%20r%3D%221.8%22/%3E%3Ccircle%20cx%3D%2264%22%20cy%3D%22184%22%20r%3D%221.8%22/%3E%3C/g%3E%3C/svg%3E\")";

export default function AthenaIsBand() {
  return (
    <section className="relative overflow-hidden bg-athena-red3 px-6 pt-10 pb-24 text-center md:px-12 md:pt-14 md:pb-32">
      {/* mirrors the wave at the top of this band so the cream page rises
          back up into the red before "By joining Athena, you..." */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 w-full md:h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 C 240 60, 480 64, 720 40 S 1200 8, 1440 30 V80 H0 Z"
          fill={athena.cream2}
          opacity="0.35"
        />
        <path
          d="M0 40 C 260 70, 500 72, 760 52 S 1220 28, 1440 48 V80 H0 Z"
          fill={athena.cream2}
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{ backgroundImage: SPARKLE_PATTERN, backgroundSize: "240px 240px" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <h2
          className="font-quattrocento font-bold text-white"
          style={{ fontSize: "clamp(26px, 4.2vw, 52px)" }}
        >
          Pick your first step
        </h2>

        {/* phones: a narrower centred stack so the cards read as notes, not
            full-width blocks; md+: three across */}
        <div className="mx-auto mt-10 grid max-w-[300px] gap-10 text-left md:mt-12 md:max-w-none md:grid-cols-3 md:gap-6 lg:gap-10">
          {STEPS.map((step, i) => {
            const look = NOTE_LOOKS[i % NOTE_LOOKS.length];
            return (
              <div
                key={step.title}
                className={`relative transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0 ${look.rotate}`}
              >
                {/* washi tape holding the card to the board */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-3.5 left-1/2 z-20 h-7 w-24 -translate-x-1/2 md:-top-4 md:h-8 md:w-28 opacity-90 shadow-sm ${look.tape}`}
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 6px, transparent 6px 12px)",
                    clipPath:
                      "polygon(0 8%, 4% 0, 8% 10%, 12% 0, 100% 0, 96% 92%, 100% 100%, 8% 100%, 4% 90%, 0 100%)",
                  }}
                />

                <div
                  className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-athena-maroon2 shadow-[0px_6px_0px_0px_rgba(82,36,44,0.55)]"
                  style={{ backgroundColor: `rgb(${step.paper})` }}
                >
                  <div className="relative aspect-[4/3] w-full border-b-2 border-athena-maroon2">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 300px"
                      className="object-cover"
                      style={step.image.position ? { objectPosition: step.image.position } : undefined}
                    />
                  </div>

                  <div className="flex flex-1 flex-col items-start p-4 md:p-6">
                    <h3
                      className="whitespace-pre-line font-quattrocento font-bold leading-tight"
                      style={{ fontSize: "clamp(20px, 2vw, 28px)", color: step.titleColor }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-2 flex-1 font-quattrocento text-[15px] leading-snug md:text-lg"
                      style={{ color: step.bodyColor }}
                    >
                      {step.body}
                    </p>
                    <a
                      href={step.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-full bg-athena-red2 px-5 py-1.5 font-quattrocento text-sm font-bold text-athena-cream md:mt-5 md:px-6 md:py-2 md:text-base transition hover:bg-athena-red3"
                    >
                      {step.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
