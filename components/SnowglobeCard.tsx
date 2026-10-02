"use client";
import Image from "next/image";
import Link from "next/link";

export default function SnowglobeCard() {
  return (
    <div className="w-full h-fit grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="col-span-full md:col-span-full w-full h-full relative rounded-lg pb-8 p-9 bg-linear-to-l from-[#1155CD] via-[#8CA0B5] to-[#E1E7EC] overflow-hidden transition">
        <div className="relative z-0">
          <div className="text-lg md:text-xl font-bold text-[#272E35] mb-3">Our Winter 2026 event:</div>
          <Image 
            alt="Snowglobe Event" 
            src="https://snowglobe.hackclub.com/imgs/logo-red.png" 
            className="max-h-[15vh] w-auto" 
            width={1121} 
            height={390} 
          />
          <div className="text-[#272E35] md:w-3/5 line-clamp-2">
            Snowglobe
          </div>
          <Link 
            href="https://snowglobe.hackclub.com" 
            className="text-[#272E35] italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-white"
          >
            Learn more about Snowglobe
          </Link>
        </div>
        <Image 
          alt="Penguin" 
          src="https://snowglobe.hackclub.com/imgs/pen_outfit_switcheroo/pen.png" 
          className="h-[150%] w-auto absolute -top-[3vh] -right-[5vh] opacity-50 md:opacity-100" 
          height={500} 
          width={500}
        />
      </div>
    </div>
  );
}