'use client';
/* eslint-disable @next/next/no-img-element */
import { CalendarEvent, formatTag } from "@/calendar"
import { Fragment } from "react";
import { motion } from "motion/react";

export default function CalEvent({ name, date, description, hostedBy, tags, artifactsAvailable, rsvpLink, i }: CalendarEvent & { i: number }) {
    const insertAnchorTags = (text?: string) => {
        if (!text) return null;
        const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

        return (
            <>
                {parts.map((part, i) => {
                    const match = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
                    if (match) {
                        const [, label, url] = match;
                        return (
                            <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="underline text-red">
                                {label}
                            </a>
                        );
                    } else {
                        return <Fragment key={i}>{part}</Fragment>;
                    }
                })}
            </>
        );
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="border rounded border-black/30 p-4 bg-white/15 backdrop-blur w-full">
            <div className="flex justify-between items-start gap-4">
                <div className="flex gap-2 text-xl font-semibold items-center flex-1">
                    {artifactsAvailable && (
                        <div className="flex gap-2 relative group">
                            <img src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/c7a9be7114dc5efe7284463ce13b8c892db834c0_image.png" alt="Artifacts available" className="mt-2 aspect-auto h-8 inline-block cursor-help" />
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-base rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                                Earn artifacts for the Athena Award by attending!
                            </div>
                        </div>
                    )}
                    {name}
                </div>
                {rsvpLink && (
                    <motion.a
                        href={rsvpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex  items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors backdrop-blur border uppercase bg-green-500/10"
                    >
                        RSVP
                    </motion.a>
                )}
            </div>
            <div className="text-sm text-gray-600">{date.toDateString()}</div>
            <div className="text-md mt-2">{insertAnchorTags(description)}</div>
            {hostedBy && !!hostedBy.length && (
                <div className="mt-2">
                    <div className="flex space-x-2 mt-1 items-center">
                        <div className="text-sm">with</div>
                        {hostedBy.map((host, hostIndex) => (
                            <div key={hostIndex} className="flex items-center space-x-1">
                                <img src={host.avatarUrl} alt={host.username} className="size-5 rounded-full" />
                                <span>{host.username}{hostIndex !== hostedBy.length - 1 ? ',' : ''}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {tags.length > 0 && tags.map((tag, i) => (
                <span key={i} className="uppercase inline-block bg-red/10 text-red text-xs px-2 py-1 rounded-full mt-2 mr-2">
                    {formatTag(tag)}
                </span>
            ))}
        </motion.div>
    )
}