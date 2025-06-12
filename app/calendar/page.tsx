'use client';
import { CALENDAR_EVENTS } from "@/calendar";
import PastCalendarSection from "@/components/calendar/PastCalendarSection";
import UpcomingCalendarSection from "@/components/calendar/UpcomingCalendarSection";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Background from "@/components/Background";
import Loading from "../loading";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) {
    return <Loading/>
    
  }

  const upcomingEvents = CALENDAR_EVENTS.filter(e => e.date > currentDate);
  const pastEvents = CALENDAR_EVENTS.filter(e => e.date <= currentDate).reverse();

  return (
    <div className="px-6 lg:px-32 mb-16 pt-16">
      <Link href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer mb-4"><FaArrowLeftLong /> Athena</Link>
      
      <PastCalendarSection pastEvents={pastEvents} />

      <div className="w-full flex justify-center">
        <div className="md:max-w-[50vw] w-full">
          <UpcomingCalendarSection {...{ upcomingEvents }} />
        </div>
      </div>
    </div>
  )
}