'use client'
import React, { useState } from "react";
import Link from 'next/link';

interface StoryProps {
    title: string;
    description: string;
    image: string;
    link: string;
    background?: string;
    titleColor?: string;
    descriptionColor?: string;
    author?: string;
}

const Story: React.FC<StoryProps> = ({ 
    title, 
    description, 
    image, 
    link,
    background = 'white',
    titleColor = '#1f2d3d',
    descriptionColor = '#1f2d3d',
    author
}: StoryProps) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
    <div className="relative inline-block transition-transform duration-125 ease-in-out hover:scale-[1.0625] *:text-lg *:md:text-2xl handwritten p-3 m-4 cursor-pointer border border-black  my-4">
        <div className="mr-3 relative text-white w-full  max-w-[300px] p-3 md:p-4 lg:p-5 pt-3.5 md:pt-5 lg:pt-6 h-full rounded-lg">
            <div className="text-base md:text-[16px] lg:text-[20px]" style={{ color: descriptionColor }}>
                <p className="line-clamp-4">
                    {description}
                </p>
                <p className="font-bold mt-2 mb-4" style={{ color: descriptionColor }}>
                    - {author}
                </p>
                <img src={image} alt={title} className="rounded-sm w-full h-full object-cover" />
            </div>
            <div className="absolute -top-8 -left-2 w-fit h-fit bg-[#D35648] px-2 text-white text-lg">
                <p className="text-lg handwritten">
                    {title}
                </p>
            </div>
            <svg 
                className="hidden absolute top-2 right-2 opacity-30 transition-transform duration-250 ease-in-out group-hover:translate-x-7 group-hover:-translate-y-7 group-hover:opacity-0"
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
            >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
        </div>
    </div>
)};

export default Story;