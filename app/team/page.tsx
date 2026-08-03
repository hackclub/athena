import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { getTeamData } from "@/lib/team";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

export default async function TeamPage() {
  const { members, acknowledgements } = await getTeamData();

  return (
    <>
      <NavBar />

      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff2e1] via-[#ffdcda] via-[64%] to-white" />
          <div className="absolute inset-0 opacity-40" style={gridTileStyle} />
          <div className="absolute inset-0 opacity-40" style={gridTileStyleRotated} />
        </div>

        <div className="px-6 lg:px-32 pt-12 md:pt-16 pb-40 md:pb-56">
          <h1
            className="text-center font-quattrocento font-bold text-athena-red3"
            style={{ fontSize: "clamp(32px, 4.6vw, 56px)" }}
          >
            Meet the team behind Athena.
          </h1>
          <p className="font-quattrocento text-lg mt-2 text-center max-w-2xl mx-auto text-athena-maroon">
            We&rsquo;re a group building the spaces we once needed; where anyone
            can code, connect, and feel seen. Got questions? Ideas? Just wanna
            chat? DM us on Slack using the handles below!
          </p>

          <div className="mt-12 flex flex-col items-center">
            <div className="mt-4 w-full flex gap-6 pb-4 overflow-x-scroll lg:overflow-x-visible">
              <Team members={members} />
            </div>
          </div>

          {acknowledgements.length > 0 && (
            <div className="mt-16 md:mt-20 border-t border-athena-maroon/20 pt-10">
              <h2
                className="text-center font-quattrocento font-bold text-athena-accent underline decoration-2 underline-offset-4"
                style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
              >
                With thanks to
              </h2>
              <div className="mt-8 w-full max-w-4xl mx-auto pb-4">
                <Team members={acknowledgements} compact />
              </div>
            </div>
          )}

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
