import Image from "next/image";
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/Footer";
import PastPrograms from "@/components/home/PastPrograms";

export const dynamic = "force-dynamic";

const gridTileStyle = {
  backgroundImage: "url('/images/diagonal-stripes.png')",
  backgroundRepeat: "repeat",
  backgroundSize: "440px 292px",
};

const gridTileStyleRotated = {
  backgroundImage: "url('/images/diagonal-stripes-rotated.png')",
  backgroundRepeat: "repeat",
  backgroundSize: "292px 440px",
};

const SNOWGLOBE_ALT =
  "Hack Club's Snowglobe: build projects, get prizes, and come to the largest all-girls high school hackathon in the world. San Francisco, all girls 13-18.";

export default function ProgramsPage() {
  return (
    <>
      <NavBar />

      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff2e1] via-[#ffdcda] via-[64%] to-white" />
          <div className="absolute inset-0 opacity-40" style={gridTileStyle} />
          <div className="absolute inset-0 opacity-40" style={gridTileStyleRotated} />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-4 pt-16 md:px-12">
          <h1
            className="text-center font-quattrocento font-bold text-athena-red3"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
          >
            Programs
          </h1>

          <h2
            className="font-quattrocento font-bold text-athena-accent underline decoration-2 underline-offset-4 mt-20"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            Happening now:
          </h2>
          {/* wide banner on md+, the taller card image on small screens where
              the banner's text gets too small */}
          <a
            href="https://snowglobe.hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-4 block aspect-[2136/1000] w-full overflow-hidden rounded-lg transition hover:-translate-y-1 md:aspect-[2400/724]"
          >
            <Image src="/images/snowglobe-card.png" alt={SNOWGLOBE_ALT} fill className="object-cover md:hidden" />
            <Image src="/images/snowglobe-banner.png" alt={SNOWGLOBE_ALT} fill className="hidden object-cover md:block" />
          </a>
        </div>

        <PastPrograms />
      </div>

      <Footer />
    </>
  );
}
