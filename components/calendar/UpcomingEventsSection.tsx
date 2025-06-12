'use client';
import { CalendarEvent as CalendarType, Tag, formatTag } from "@/calendar";
import CalendarEvent from "./CalendarEvent";
import { useState } from "react";

export default function UpcomingEventsSection({ upcomingEvents }: { upcomingEvents: CalendarType[] }) {
  const [tagsToView, setTagsToView] = useState<string[]>([]);

  const allTags = Array.from(new Set(upcomingEvents.flatMap(event => event.tags || [])));

  const filteredEvents = tagsToView.length > 0
    ? upcomingEvents.filter(event => event.tags?.some(tag => tagsToView.includes(tag)))
    : upcomingEvents;

  return (
    <div>
      <div className="text-4xl font-bold pl-10 mb-3">Upcoming Events</div>
      <div className="mb-4">
        {/* <div className="text-base uppercase text-black/40 mb-3">Filter:</div> */}
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() =>
                setTagsToView(prev =>
                  prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                )
              }
              className={`px-3 py-1 rounded-full text-sm transition-colors backdrop-blur border uppercase ${
                tagsToView.includes(tag) 
                  ? 'bg-red/10 text-red border-red' 
                  : 'bg-black/10 text-black border-transparent'
              }`}
            >
              {formatTag(tag)}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 pl-10 w-full">
        {filteredEvents.map((event, index) => (
          <div className="relative" key={index}>
            <div className="absolute -left-8 h-full">
              <div className="flex flex-col items-center justify-center h-[calc(100%_+_1rem)]">
                <div className={`w-px h-full ${index > 0 ? 'bg-red' : ''}`}></div>
                <div className="size-6 shrink-0 rounded-full bg-red bg-opacity-50 flex justify-center items-center">
                  <span className="size-3 bg-red bg-opacity-50 rounded-full"></span>
                </div>
                <div className={`w-px h-full ${index !== filteredEvents.length - 1 ? 'bg-red' : ''}`}></div>
              </div>
            </div>
            <CalendarEvent {...event} i={index} />
          </div>
        ))}
      </div>
    </div>
  );
}