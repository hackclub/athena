import Image from "next/image";

const SNOWGLOBE_ALT =
  "Hack Club's Snowglobe: build projects, get prizes, and come to the largest all-girls high school hackathon in the world. San Francisco, all girls 13-18.";

// `compact` is the version used in the Programs page list: a wide
// banner on md+ so it matches the other cards' height, falling back to the
// taller card image on small screens where the banner's text gets too small.
export function SnowglobeCard({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <a
        href="https://snowglobe.hackclub.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[2136/1000] w-full overflow-hidden rounded-lg transition md:aspect-[2400/724]"
      >
        <Image src="/images/snowglobe-card.png" alt={SNOWGLOBE_ALT} fill className="object-cover md:hidden" />
        <Image src="/images/snowglobe-banner.png" alt={SNOWGLOBE_ALT} fill className="hidden object-cover md:block" />
      </a>
    );
  }

  return (
    <a
      href="https://snowglobe.hackclub.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block aspect-[2136/1000] w-full flex-1 overflow-hidden rounded-lg border border-black/10 shadow-lg transition hover:-translate-y-1"
    >
      <Image src="/images/snowglobe-card.png" alt={SNOWGLOBE_ALT} fill className="object-cover" />
    </a>
  );
}

export default function InvitedSection() {
  return (
    <section className="bg-athena-cream2 px-6 pt-10 pb-20 md:px-12 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-6xl text-center">
        <h2
          className="whitespace-nowrap bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text font-quattrocento font-bold text-transparent"
          style={{ fontSize: "clamp(19px, 5.3vw, 58px)" }}
        >
          Happening now - you&rsquo;re invited!
        </h2>

        <div className="mx-auto mt-12 w-full max-w-3xl">
          <SnowglobeCard />
        </div>
      </div>
    </section>
  );
}
