import Background from "@/components/Background";
import Card from "@/components/Card";
import UpcomingEvent from "@/components/UpcomingEvent";
import { getUpcomingEvents, getRecentEvents } from "@/lib/events";
import Events from "@/components/Events";
// import useImagePreloader from "../hooks/useImagePreloader";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import CalendarEvent from "@/components/calendar/CalendarEvent";
import { CALENDAR_EVENTS } from "@/calendar";
 
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function EventPage() {
  const upcomingEvents = await getUpcomingEvents();
  const recentEvents = await getRecentEvents();
  const nextEvent = CALENDAR_EVENTS.find(event => event.date > new Date())!;
  
  
  return (
    <Background>
      <div className="px-6 lg:px-32 py-16">
        <Link href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</Link>
        <div className="text-5xl font-bold mt-4">Events</div>
          <div className="w-full border rounded-lg flex border-black/10 flex-col md:flex-row  mt-4">
          <div className="md:w-1/2 bg-red p-4 flex flex-col justify-center rounded-l">
            <div className="text-2xl font-bold text-white">Join in on our Workshops for the Athena Award!</div>
            <a href="/calendar" className="block underline text-white">View the full calendar</a>
          </div>
          <div className="md:w-1/2 p-4 flex flex-col justify-center bg-white rounded-l">
            <div className="text-black text-lg">Our Next Event:</div>
            <CalendarEvent {...nextEvent} i={0} />
          </div>
        </div>
        <div className="mt-4">
          <Card cardType="bordered" className="!border-red">
            <span className="block text-2xl font-bold">Events bring people together.</span>
            Hack Clubbers run one-day hackathons for their cities to help girls and non binary students write their first lines of code, some in collaboration with community organizations in their communities. Learn more about our events below!
          </Card>
        </div>
  
        <div className="mt-4 flex flex-col items-center">
          <div className="w-full items-start">
            <div className="text-3xl font-bold">Upcoming Events</div>
            <div className="text-base">Run your own Athena event by joining our community in the <Link href="https://hackclub.com/slack" className="underline">Hack Club Slack!</Link></div>
          </div>
          <hr className="border border-black w-full translate-y-1.5" />

          <div className="w-full flex gap-6 pb-4 overflow-x-scroll lg:overflow-x-visible">
            {upcomingEvents.slice(0, 3).map((e, i) => (
              <Fragment key={i}>
                <UpcomingEvent name={e.name} location={e.location || ''} time={e.startDate || ''} />
              </Fragment>
            ))}
          </div>
        </div>
        <Events data={recentEvents} />
      </div>
    </Background>
  )
}