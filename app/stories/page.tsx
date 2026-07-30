import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/Footer";

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

export default function StoriesPage() {
  return (
    <>
      <NavBar />

      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff2e1] via-[#ffdcda] via-[64%] to-white" />
          <div className="absolute inset-0 opacity-40" style={gridTileStyle} />
          <div className="absolute inset-0 opacity-40" style={gridTileStyleRotated} />
        </div>

        <div className="px-6 lg:px-32 py-24 md:py-32 pb-40 md:pb-56">
          <h1
            className="text-center font-quattrocento font-bold text-athena-red3"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
          >
            Stories
          </h1>
          <p className="font-quattrocento text-lg mt-6 text-center max-w-2xl mx-auto">
            Coming soon.
          </p>

          <Link
            href="/"
            className="w-fit mx-auto mt-16 md:mt-20 font-quattrocento font-bold text-athena-red3 flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"
          >
            <FaArrowLeftLong /> Athena
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
