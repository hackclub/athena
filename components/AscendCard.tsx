"use client";
import Image from "next/image";
import Link from "next/link";

export default function AscendCard() {
  return (
    <div className="w-full h-fit grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 my-8">
      <div className="col-span-full md:col-span-full w-full h-full relative rounded-lg pb-8 p-9 bg-gradient-to-l from-[#150122] via-[#150122] to-[#2651A6] overflow-hidden transition">
        <div className="relative z-0">
          <div className="text-lg md:text-xl font-bold text-white mb-3">Our 2024 summit:</div>
          <Image 
            alt="Ascend Event" 
            src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/885cf1045da83ea1_image.png" 
            className="max-h-[15vh] w-auto" 
            width={1121} 
            height={390} 
          />
          <div className="text-white md:w-3/5 line-clamp-2">
            Ascend was Hack Club&apos;s first-ever Days of Service Summit! Held in Los Angeles, this event brought together 50 girls and non-binary Hack Club members from across the U.S. and internationally for a hackathon hosted at SpaceX, along with a weekend filled with fun and growth. This summit became the largest teenage girl hackathon in the U.S. this year, in partnership with Girls Who Code and Kode with Klossy.
          </div>
          <Link 
            href="https://ascend.hackclub.com" 
            className="text-white italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-white"
          >
            Learn more about Ascend
          </Link>
        </div>
        <Image 
          alt="" 
          src="https://ascend.hackclub.com/moon.png" 
          className="h-[150%] w-auto absolute -top-[10vh] -right-[10vh] opacity-50 md:opacity-100" 
          height={800} 
          width={800}
        />
      </div>
    </div>
  );
}