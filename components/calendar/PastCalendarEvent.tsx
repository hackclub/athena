/* eslint-disable @next/next/no-img-element */
'use client';
import { CalendarEvent, formatTag } from "@/calendar"
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function PastCalEvent({ name, date, description, hostedBy, recording, tags, i }: CalendarEvent & { i: number }) {
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="border rounded border-black/30 p-4 bg-white/15 backdrop-blur"
        >
            <div className="text-xl font-semibold gap-1">
                <span>{name}</span>
            </div>
            <div className="text-sm text-gray-600">{date.toDateString()}</div>
            <div className="text-md mt-2">{insertAnchorTags(description)}</div>
            
            {hostedBy && (
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

                    {recording && <a href = {recording}><span className="uppercase inline-block bg-green-600/10 text-green-600 text-xs px-2 py-1 rounded-full mt-2 mr-2 *:align-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 inline pr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <span>video</span>
                    </span>
                    </a>}

                    {tags.length > 0 && tags.map((tag, i) => (
                        <span key={i} className="uppercase inline-block bg-red/10 text-red text-xs px-2 py-1 rounded-full mt-2 mr-2">
                            {formatTag(tag)}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    )
} 