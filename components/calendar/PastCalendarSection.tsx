'use client';
import { CalendarEvent } from "@/calendar";
import PastCalendarEvent from "./PastCalendarEvent";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PastCalendarSectionProps {
  pastEvents: CalendarEvent[];
}

export default function PastCalendarSection({ pastEvents }: PastCalendarSectionProps) {
  const [showPastEvents, setShowPastEvents] = useState(false);

  const colorByStatus = (date: Date) => {
    const eventHappened = date < new Date();
    if (eventHappened) {
      return 'bg-black';
    } else {
      return 'bg-red';
    }
  }

  if (pastEvents.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-8">
        <button 
          onClick={() => setShowPastEvents(!showPastEvents)}
          className="px-4 py-2 rounded text-black hover:text-red transition-colors w-full bg-white border md:max-w-[calc(55vw_-_2rem)] italic"
        >
          ({showPastEvents ? 'hide' : 'show'} past events this year)
        </button>
      </div>
      <div>
        <AnimatePresence>
          {showPastEvents && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div key="title" className="text-4xl font-bold text-center mb-4">Past Events</motion.div>
              <div className="grid gap-4 lg:grid-cols-4 w-full">
                {pastEvents.sort(
                  (a, b) => a.date.getTime() - b.date.getTime()
                ).map((event, index) => (
                  <div className="h-full" key={index}>
                    <PastCalendarEvent {...event} i={index} />
                  </div>
                ))}
              </div>
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 