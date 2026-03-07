"use client";
import { EventWithColors } from "@/types";
import { Fragment, useState } from "react";
import PastEvent from "./PastEvent";
import { hackClubLogo, hackClubGitHub, defaultAthenaPhoto } from "@/constants";

export default function Events({ data }: { data: EventWithColors[] }) {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const mostRecent = data.length > 0 ? data[data.length - 1] : null;

  return (
    <div className="mt-4">
      <div className="text-3xl font-bold">Recent Events</div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {mostRecent && (
          <PastEvent
            accentColor={mostRecent.tagColor || "black"}
            bgColor={mostRecent.logoPreviewBackgroundColor || "white"}
            tintColor={mostRecent.tagColor || "black"}
            className="col-span-2 row-span-2"
            name={mostRecent.name}
            location={mostRecent.location || ""}
            date={mostRecent.startDate || ""}
            logo={mostRecent.logo || hackClubLogo}
            githubLink={mostRecent.githubLink || hackClubGitHub}
            website={mostRecent.website || hackClubGitHub}
            description={mostRecent.description || ""}
            photos={mostRecent.photos || [defaultAthenaPhoto]}
            photocreds={mostRecent.photocreds || ""}
            mostRecent
          />
        )}

        {data
          .slice()
          .reverse()
          .slice(1, 3)
          .map((event, i) => {
            return (
              <Fragment key={i}>
                <PastEvent
                  accentColor={event.tagColor || "black"}
                  bgColor={event.logoPreviewBackgroundColor || "white"}
                  tintColor={event.tagColor || "black"}
                  className="row-span-2 md:row-span-1 col-span-2"
                  name={event.name}
                  location={event.location || ""}
                  date={event.startDate || ""}
                  logo={event.logo || hackClubLogo}
                  githubLink={event.githubLink || hackClubGitHub}
                  website={event.website || hackClubGitHub}
                  description={event.description || ""}
                  photos={event.photos || [defaultAthenaPhoto]}
                  photocreds={event.photocreds || ""}
                />
              </Fragment>
            );
          })}

        <div
          className={
            showAllEvents
              ? "grid gap-6 col-span-2 md:col-span-4 grid-cols-subgrid auto-rows-auto"
              : "hidden"
          }
        >
          {data
            .slice()
            .reverse()
            .slice(3)
            .map((event, i) => {
              const span = (() => {
                if ((i - 1) % 3 === 0 && i < data.length - 5) {
                  return "col-span-2 row-span-2";
                } else {
                  return "col-span-2";
                }
              })();

              return (
                <Fragment key={i}>
                  <PastEvent
                    accentColor={event.tagColor || "black"}
                    bgColor={event.logoPreviewBackgroundColor || "white"}
                    tintColor={event.tagColor || "black"}
                    className={span}
                    name={event.name}
                    location={event.location || ""}
                    date={event.startDate || ""}
                    logo={event.logo || hackClubLogo}
                    githubLink={event.githubLink || hackClubGitHub}
                    website={event.website || hackClubGitHub}
                    description={event.description || ""}
                    photos={event.photos || [defaultAthenaPhoto]}
                    photocreds={event.photocreds || ""}
                  />
                </Fragment>
              );
            })}
        </div>
      </div>
      <button
        className="w-full bg-white border-black border-2 rounded-lg p-4 mt-6 text-center text-xl shadow-md"
        onClick={() => setShowAllEvents(!showAllEvents)}
      >
        See {showAllEvents ? "less" : "more"}
      </button>
    </div>
  );
}
