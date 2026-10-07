import NavBar from "@/components/home/NavBar";
import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import ProjectPostcard from "@/components/ProjectPostcard";
import { SHOWCASE_PROJECTS } from "@/data/showcaseProjects";

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

        <BackHomeLink />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-12 md:pb-32">
          <h1
            className="text-center font-quattrocento font-bold text-athena-red3"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
          >
            Gallery
          </h1>
          <h2
            className="mt-10 font-quattrocento font-bold text-athena-accent"
            style={{ fontSize: "clamp(22px, 2.6vw, 34px)" }}
          >
            Teens like you are making awesome projects:
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SHOWCASE_PROJECTS.map((project) => (
              <ProjectPostcard key={project.projectName} project={project} className="w-full" />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
