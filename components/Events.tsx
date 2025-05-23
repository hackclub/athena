"use client";
import { EventWithColors } from "@/types";
import { Fragment, useState } from "react";
import PastEvent from "./PastEvent";
import { hackClubLogo, hackClubGitHub, defaultAthenaPhoto } from "@/constants";

export default function Events({ data }: { data: EventWithColors[] }) {
  const [showAllEvents, setShowAllEvents] = useState(false);

  return (
    <div className="mt-4">
      <div className="text-3xl font-bold">Recent Events</div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <PastEvent
          accentColor={data[data.length - 1].tagColor || "black"}
          bgColor={data[data.length - 1].logoPreviewBackgroundColor || "white"}
          tintColor={data[data.length - 1].tagColor || "black"}
          className="col-span-2 row-span-2"
          name={data[data.length - 1].name}
          location={data[data.length - 1].location || ""}
          date={data[data.length - 1].startDate || ""}
          logo={data[data.length - 1].logo || hackClubLogo}
          githubLink={data[data.length - 1].githubLink || hackClubGitHub}
          website={data[data.length - 1].website || hackClubGitHub}
          description={data[data.length - 1].description || ""}
          photos={data[data.length - 1].photos || [defaultAthenaPhoto]}
          photocreds={data[data.length - 1].photocreds || ""}
          mostRecent
        />

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
