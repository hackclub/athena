import Image from "next/image";

type Step = {
  title: string;
  body: string;
  // `fit: "width"` shows the whole picture across the top of the card (for
  // square art whose edges matter) instead of cropping it to fill the card.
  image: {
    src: string;
    alt: string;
    position?: string;
    fit?: "cover" | "width";
    width?: number;
    height?: number;
  };
  // The colour the picture fades into behind the text, plus the text colours
  // that read on it.
  fade: string;
  // Where (as % of the card's height) the picture starts fading out.
  fadeFrom?: number;
  titleColor: string;
  bodyColor: string;
  tag?: string;
  cta: { label: string; href: string };
};

const STEPS: Step[] = [
  {
    title: "Start building",
    body: "New to coding? Make your first website and we’ll pay for a refresher!",
    image: { src: "/images/refresher-card.jpg", alt: "Refresher: a glass of boba milk tea", position: "center top" },
    fade: "251,228,234",
    titleColor: "#BF1938",
    bodyColor: "#52242C",
    cta: { label: "Join Refresher", href: "https://refresher.hackclub.com/" },
  },
  {
    title: "Join Snowglobe",
    body: "Join us at the largest all-girls hackathon on November 20-22 at Notion HQ in SF.",
    image: {
      src: "/images/snowglobe-art.jpg",
      width: 1400,
      height: 987,
      alt: "Hack Club's Snowglobe: build projects, get prizes, and come to the largest all-girls high school hackathon in the world. Nov 20-22, San Francisco.",
      fit: "width",
    },
    fade: "244,249,253",
    fadeFrom: 44,
    titleColor: "#C8361F",
    bodyColor: "#1B2A5E",
    tag: "Nov 20–22",
    cta: { label: "Sign up", href: "https://snowglobe.hackclub.com/" },
  },
  {
    title: "Learn from women\nin tech",
    body: "Ask questions live at our AMA (Ask Me Anything) calls with women in tech.",
    image: {
      src: "/images/ama-speakers.jpg",
      width: 1080,
      height: 1080,
      alt: "Past AMA speakers from NASA, IBM, Bluesky, Waymo, Microsoft, Headspace, Lenovo, Junevity and Sourcegraph",
      fit: "width",
    },
    fade: "255,246,234",
    titleColor: "#BF1938",
    bodyColor: "#52242C",
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

export default function AthenaIsBand() {
  return (
    <section className="relative overflow-hidden bg-athena-red2 px-6 pt-10 pb-24 text-center md:px-12 md:pt-14 md:pb-32">
      {/* mirrors the wave at the top of this band so the cream page rises
          back up into the red before the polaroid clothesline */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 w-full md:h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 C 240 60, 480 64, 720 40 S 1200 8, 1440 30 V80 H0 Z"
          fill="#FFF6EA"
          opacity="0.35"
        />
        <path
          d="M0 40 C 260 70, 500 72, 760 52 S 1220 28, 1440 48 V80 H0 Z"
          fill="#FFF6EA"
        />
      </svg>
      <div className="relative mx-auto max-w-7xl">
        <h2
          className="font-quattrocento font-bold text-white"
          style={{ fontSize: "clamp(26px, 4.2vw, 52px)" }}
        >
          We&rsquo;re excited to have you
        </h2>

        <div className="mt-12 grid gap-12 text-left md:grid-cols-3 md:gap-6 lg:gap-10">
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
                  className={`absolute -top-4 left-1/2 z-20 h-8 w-28 -translate-x-1/2 opacity-90 shadow-sm ${look.tape}`}
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 6px, transparent 6px 12px)",
                    clipPath:
                      "polygon(0 8%, 4% 0, 8% 10%, 12% 0, 100% 0, 96% 92%, 100% 100%, 8% 100%, 4% 90%, 0 100%)",
                  }}
                />

                {/* the picture is the card; it fades into a soft colour at
                    the bottom to leave room for the writing */}
                <div
                  className="relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-xl border-2 border-athena-maroon2 shadow-[0px_6px_0px_0px_rgba(82,36,44,0.55)] lg:min-h-[540px]"
                  style={{ backgroundColor: `rgb(${step.fade})` }}
                >
                  {step.image.fit === "width" ? (
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={step.image.width}
                      height={step.image.height}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="absolute inset-x-0 top-0 h-auto w-full"
                      style={{
                        maskImage: `linear-gradient(to bottom, #000 ${step.fadeFrom ? 45 : 60}%, transparent 100%)`,
                        WebkitMaskImage: `linear-gradient(to bottom, #000 ${step.fadeFrom ? 45 : 60}%, transparent 100%)`,
                      }}
                    />
                  ) : (
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      style={step.image.position ? { objectPosition: step.image.position } : undefined}
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, rgba(${step.fade},0) 0%, rgba(${step.fade},0) ${step.fadeFrom ?? 36}%, rgba(${step.fade},0.85) ${(step.fadeFrom ?? 36) + 18}%, rgb(${step.fade}) ${(step.fadeFrom ?? 36) + 30}%)`,
                    }}
                  />
                  {step.tag && (
                    <span className="absolute right-0 top-5 z-10 rounded-l-md bg-athena-red2 px-3 py-1 font-quattrocento text-sm font-bold text-athena-cream shadow-sm">
                      {step.tag}
                    </span>
                  )}

                  <div className="relative z-10 p-6">
                    <h3
                      className="whitespace-pre-line font-quattrocento font-bold leading-tight"
                      style={{ fontSize: "clamp(22px, 2vw, 28px)", color: step.titleColor }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-2 font-quattrocento leading-snug md:text-lg"
                      style={{ color: step.bodyColor }}
                    >
                      {step.body}
                    </p>
                    <a
                      href={step.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block rounded-full border border-athena-maroon2 bg-athena-red2 px-6 py-2 font-quattrocento font-bold text-athena-cream shadow-[0px_4px_0px_0px_#52242C] transition hover:-translate-y-0.5 hover:brightness-105"
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
