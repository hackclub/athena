import NavBar from "@/components/home/NavBar";
import Footer from "@/components/Footer";
import AthenaAwardMiniCard from "@/components/AthenaAwardMiniCard";
import ParthenonCard from "@/components/ParthenonCard";
import AscendCard from "@/components/AscendCard";
import SleepoverMiniCard from "@/components/SleepoverMiniCard";
import SunbeamMiniCard from "@/components/SunbeamMiniCard";

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

        <div className="px-6 lg:px-32 py-16">
          <h1
            className="text-center font-quattrocento font-bold text-athena-red3"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
          >
            Programs
          </h1>
          <p className="font-quattrocento text-lg mt-4 text-center text-athena-maroon">
            From overnight hackathons to our flagship award, here&rsquo;s
            how to get involved with Athena today.
          </p>

          <h2
            className="font-quattrocento font-bold text-athena-accent underline decoration-2 underline-offset-4 mt-24"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            Happening now:
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <SunbeamMiniCard />
          </div>

          <h2
            className="font-quattrocento font-bold text-athena-accent underline decoration-2 underline-offset-4 mt-24"
            style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
          >
            Past events:
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <SleepoverMiniCard />
            <ParthenonCard />
            <AthenaAwardMiniCard />
            <AscendCard />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
