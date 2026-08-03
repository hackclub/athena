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

export default function GalleryPage() {
  return (
    <>
      <NavBar />

      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff2e1] via-[#ffdcda] via-[64%] to-white" />
          <div className="absolute inset-0 opacity-40" style={gridTileStyle} />
          <div className="absolute inset-0 opacity-40" style={gridTileStyleRotated} />
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-32 text-center md:py-48">
          <h1
            className="font-quattrocento font-bold text-athena-red3"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
          >
            Gallery
          </h1>
          <p
            className="mt-4 font-quattrocento text-athena-maroon2"
            style={{ fontSize: "clamp(16px, 1.6vw, 24px)" }}
          >
            Coming soon.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
