import Image from "next/image";

type Partner = { name: string; logo: string; href?: string };

// Add each partner here once their logo is in /public/images/partners/.
// Dashed placeholder slots fill the rest of the row until then.
const PARTNERS: Partner[] = [
  { name: "Girls Who Code", logo: "/images/partners/girls-who-code.png", href: "https://girlswhocode.com/" },
  { name: "Jane Street", logo: "/images/partners/jane-street.png", href: "https://www.janestreet.com/" },
  { name: "MIT", logo: "/images/partners/mit.png", href: "https://www.mit.edu/" },
  { name: "Congressional App Challenge", logo: "/images/partners/congressional-app-challenge.png", href: "https://www.congressionalappchallenge.us/" },
  { name: "AMD", logo: "/images/partners/amd.png", href: "https://www.amd.com/" },
  { name: "SpaceX", logo: "/images/partners/spacex.png", href: "https://www.spacex.com/" },
  { name: "GitHub", logo: "/images/partners/github.png", href: "https://github.com/" },
];
const SLOT_COUNT = 7;

// A faint pink graph-paper grid that carries on from the Parthenon section's
// grid (which blends from yellow to pink just above). The background blends
// from that section's cream into the newsletter section's pink cream, and the
// grid fades out towards the bottom.
const PINK_GRID =
  "linear-gradient(rgba(215,39,77,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(215,39,77,0.12) 1px, transparent 1px)";
const GRID_FADE = "linear-gradient(to bottom, black 65%, transparent)";

// Small logo tiles all on one line (rows of 3 on phones, last row centred), each tilted slightly, like stickers pressed on by hand.
const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1"];

function LogoTile({ partner, tilt }: { partner?: Partner; tilt: string }) {
  if (!partner) {
    return (
      <div
        className={`flex aspect-[3/2] items-center justify-center rounded-lg border-2 border-dashed border-athena-maroon2/40 bg-white/60 ${tilt}`}
      >
        <span className="font-quattrocento text-xs text-athena-maroon2/60">logo</span>
      </div>
    );
  }

  const tile = (
    <div
      className={`relative flex aspect-[3/2] items-center justify-center rounded-lg border-2 border-athena-maroon2 bg-white p-3 shadow-[0px_4px_0px_0px_rgba(82,36,44,0.55)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0 ${tilt}`}
    >
      <Image src={partner.logo} alt={partner.name} fill sizes="200px" className="object-contain p-4" />
    </div>
  );

  return partner.href ? (
    <a href={partner.href} target="_blank" rel="noopener noreferrer">
      {tile}
    </a>
  ) : (
    tile
  );
}

export default function PartnersBand() {
  const slots: (Partner | undefined)[] = [
    ...PARTNERS,
    ...Array.from({ length: Math.max(0, SLOT_COUNT - PARTNERS.length) }, () => undefined),
  ];

  return (
    <section
      className="relative px-6 pt-20 pb-28 text-center md:px-12 md:pt-28 md:pb-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #FFF6EA, #FFECEB)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: PINK_GRID,
            backgroundSize: "28px 28px",
            backgroundPosition: "center top",
            maskImage: GRID_FADE,
            WebkitMaskImage: GRID_FADE,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <h2
          className="font-quattrocento font-bold text-athena-red3"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          Thanks to our partners
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:flex-nowrap md:gap-5">
          {slots.map((partner, i) => (
            <div key={partner?.name ?? i} className="w-[calc((100%-2rem)/3)] md:w-auto md:min-w-0 md:flex-1">
              <LogoTile partner={partner} tilt={TILTS[i % TILTS.length]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
