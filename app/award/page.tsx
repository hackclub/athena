import { redirect } from "next/navigation";
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/Footer";
import { AirtableUsersManager, AthenaAwardProfile } from "@/lib/airtable";
import { baseAthenaAwardProjectImageUrl } from "@/lib/constants";
import StickyColumn from "./StickyColumn";

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

type AwardProject = {
  name?: string;
  codeUrl?: string;
  playableUrl?: string;
  createdAt?: string;
  approvedDuration?: number;
  description: string;
  screenshotUrl?: string;
  screenshotKind?: ScreenshotKind;
};

type ScreenshotKind = "image" | "video" | "unknown";

// Link fields come from student submissions; only http(s) may become an href.
// Some entries are bare "github.com/..." or have stray whitespace, so tidy
// those rather than hide the link.
function toHttpUrl(url?: string): string | undefined {
  const trimmed = (url ?? "").trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(trimmed)) return `https://${trimmed}`;
  return undefined;
}

// CDN URLs carry no extension, so the media type only comes from the server.
// Cached per URL so each one is checked at most once a day.
async function screenshotKind(url: string): Promise<ScreenshotKind> {
  try {
    const res = await fetch(url, { method: "HEAD", next: { revalidate: 86400 } });
    const type = res.headers.get("content-type") ?? "";
    if (!res.ok) return "unknown";
    if (type.startsWith("image/")) return "image";
    if (type.startsWith("video/")) return "video";
  } catch (error) {
    console.error("Failed to check screenshot type:", url, error);
  }
  return "unknown";
}

// Airtable returns each project field as a parallel array on the user record,
// so index i across every array is one project. Lookups skip empty cells, so
// a project missing a value shifts everything after it; that is a data issue
// in the base, not something this page can repair.
function zipProjects(
  names: string[] = [],
  codeUrls: string[] = [],
  playableUrls: string[] = [],
  createdAt: string[] = [],
  approvedDuration: number[] = [],
  descriptions: string[] = [],
  screenshotUrls: string[] = []
): AwardProject[] {
  return codeUrls.map((_, i) => {
    const description = descriptions[i] ?? "";
    return {
      name: names[i],
      codeUrl: toHttpUrl(codeUrls[i]),
      playableUrl: toHttpUrl(playableUrls[i]),
      createdAt: createdAt[i],
      approvedDuration: approvedDuration[i],
      description:
        description.length >= 80 ? description.slice(0, 80) + "..." : description,
      screenshotUrl: screenshotUrls[i] || undefined,
    };
  });
}

function ProjectCard({ project }: { project: AwardProject }) {
  return (
    <div className="rounded-[16px] border border-athena-maroon2/30 bg-white/75 h-full flex flex-col overflow-hidden">
      {project.screenshotKind === "video" ? (
        <video
          src={project.screenshotUrl}
          className="h-32 w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          alt=""
          src={
            project.screenshotKind === "image"
              ? project.screenshotUrl
              : baseAthenaAwardProjectImageUrl
          }
          className="h-32 w-full object-cover"
        />
      )}
      <div className="p-3 flex flex-col gap-1 h-full text-athena-maroon2">
        <h3 className="font-quattrocento font-bold text-xl">{project.name}</h3>
        <div className="flex flex-col md:flex-row w-full justify-between text-sm">
          {project.codeUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.codeUrl}
              className="underline"
            >
              Code
            </a>
          )}
          {project.playableUrl && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.playableUrl}
              className="underline"
            >
              Demo
            </a>
          )}
        </div>
        <div className="grow text-sm">{project.description}</div>
        <small className="flex flex-col md:flex-row justify-between opacity-80">
          <span>{project.approvedDuration}h</span>
          <span>{project.createdAt}</span>
        </small>
      </div>
    </div>
  );
}

async function submitForm(formData: FormData) {
  "use server";
  const id = formData.get("id");
  if (typeof id === "string" && id.trim()) {
    redirect(`/award?${new URLSearchParams({ id: id.trim() })}`);
  }
  redirect("/award");
}

export default async function AwardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const id = typeof sp.id === "string" ? sp.id : undefined;

  let profile: AthenaAwardProfile | null = null;
  let lookupFailed = false;
  if (id) {
    try {
      profile = await new AirtableUsersManager().getQualifiedUserByCertId(id);
    } catch (error) {
      console.error("Failed to look up Athena Award certification:", error);
      lookupFailed = true;
    }
  }

  const projects = profile
    ? [
        ...zipProjects(
          profile["Project Name"],
          profile["Code URL"],
          profile["Playable URL"],
          profile.created_at,
          profile.approved_duration,
          profile.Description,
          profile.screenshot_cdn_url
        ),
        ...zipProjects(
          profile["Project Name Unified"],
          profile["Code URL Unified"],
          profile["Playable URL Unified"],
          profile.created_at_unified,
          profile.approved_duration_unified,
          [],
          profile.screenshot_cdn_url_unified
        ),
      ]
    : [];

  await Promise.all(
    projects.map(async (project) => {
      if (project.screenshotUrl) {
        project.screenshotKind = await screenshotKind(project.screenshotUrl);
      }
    })
  );

  const verifiedHours = Math.round(Number(profile?.total_time_approved_projects ?? 0) * 100) / 100;

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
            Verify an Athena Award
          </h1>
          <p className="font-quattrocento text-lg mt-4 text-center text-athena-maroon">
            Enter the code at the bottom left of a certification to confirm it is genuine.
          </p>

          <div className="flex lg:flex-row flex-col justify-center lg:items-start gap-10 *:lg:basis-1/2 mt-12">
            <StickyColumn className="flex flex-col gap-6 w-full max-w-2xl mx-auto lg:sticky">
              <img
                alt="Athena Award logo"
                className="w-2/3 lg:w-1/2 mx-auto"
                src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/6ea8e84acae378a03d5b5e788a780a853aae4d21_outlined_logo__alt_-cropped.svg"
              />
              <div className="rounded-[24px] border border-athena-maroon2 bg-white/75 p-6 text-athena-maroon2 flex flex-col gap-3">
                <p>
                  The{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://award.athena.hackclub.com"
                    className="font-bold underline"
                  >
                    Athena Award
                  </a>{" "}
                  was a six month long program run by Hack Club where girls and nonbinary
                  students (ages 13-18) spent 30 (often more!) hours coding three technical
                  projects. By earning this certification, students have proven themselves as
                  technically adept and familiar with industry-standard software development
                  platforms.
                </p>
                <p>
                  Projects needed to be shipped, meaning deployed and usable by others, and
                  open source. All submissions were tested, evaluated and approved by members
                  of the Athena team.
                </p>
                <p>
                  For further questions, contact <b>athena@hackclub.com</b>.
                </p>
              </div>

              <form className="flex flex-row gap-3 flex-wrap items-center" action={submitForm}>
                <label htmlFor="cert-id" className="font-quattrocento font-bold text-athena-maroon2">
                  Code:
                </label>
                <input
                  id="cert-id"
                  name="id"
                  required
                  defaultValue={id ?? ""}
                  className="grow p-2 rounded-md border border-athena-maroon2/40 bg-white/75 text-athena-maroon2"
                />
                <input
                  type="submit"
                  value="Verify"
                  className="p-2 px-6 rounded-md bg-athena-red3 hover:bg-athena-accent text-white cursor-pointer transition-colors"
                />
              </form>

              {id && !profile && (
                <div className="rounded-md bg-rose-500/20 border border-rose-500/40 p-3 text-rose-900 text-center">
                  <h2 className="text-2xl font-quattrocento font-bold">
                    {lookupFailed
                      ? "Verification is unavailable right now, try again later"
                      : "Certification not found"}
                  </h2>
                </div>
              )}
            </StickyColumn>

            {profile && (
              <div className="flex flex-col gap-6 text-athena-maroon2">
                <div className="rounded-md bg-green-400/30 border border-green-500/40 p-3 text-green-900 text-center">
                  <h2 className="text-2xl font-quattrocento font-bold">
                    This Athena Award certification is valid
                  </h2>
                </div>

                <h2 className="font-quattrocento font-bold text-3xl">Details</h2>
                <table className="w-full text-left table-fixed">
                  <tbody>
                    <tr>
                      <td className="font-bold">Name</td>
                      <td>
                        {profile["First Name"]?.[0]} {profile["Last Name Initial"]}.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">Verified hours</td>
                      <td>{verifiedHours}</td>
                    </tr>
                    <tr>
                      <td className="font-bold">Verified projects</td>
                      <td>{profile.total_approved_projects}</td>
                    </tr>
                  </tbody>
                </table>

                <h2 className="font-quattrocento font-bold text-3xl">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
