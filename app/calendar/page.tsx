import { CALENDAR_EVENTS } from "@/calendar";
import CalendarEvent from "@/components/calendar/CalendarEvent";
import PastEventsSection from "@/components/calendar/PastEventsSection";
import UpcomingEventsSection from "@/components/calendar/UpcomingEventsSection";
import Link from "next/link";
import { Fragment } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Calendar() {
  const upcomingEvents = CALENDAR_EVENTS.filter(e => e.date > new Date());
  const pastEvents = CALENDAR_EVENTS.filter(e => e.date <= new Date()).reverse();

  return (
    <div className="px-6 lg:px-32 mb-16 pt-16">
      <Link href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer mb-4"><FaArrowLeftLong /> Athena</Link>
      
      <PastEventsSection pastEvents={pastEvents} />

      <div className="w-full flex justify-center">
        <div className="md:max-w-[50vw] w-full">
          <UpcomingEventsSection {...{ upcomingEvents }} />
        </div>
      </div>
    </div>
  )
}