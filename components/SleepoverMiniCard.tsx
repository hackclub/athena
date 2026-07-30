"use client";
import Image from "next/image";
import Link from "next/link";

export default function SleepoverMiniCard() {
  return (
    <div className="w-full h-fit grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="col-span-full md:col-span-full w-full h-full relative rounded-lg pb-8 p-9 bg-[#D9DAF8] overflow-hidden transition">
        <div className="absolute inset-0 opacity-40 bg-[url('/images/bunny-tile.png')] bg-repeat bg-[length:100px] pointer-events-none"></div>
        <div className="relative z-0 md:w-3/5">
          <div className="text-lg md:text-xl font-bold text-[#6988E0] mb-3">Our Spring 2026 Event:</div>
          <Image
            alt="Sleepover"
            src="/assets/sleepover_logo.PNG"
            className="max-h-[15vh] w-auto"
            width={2048}
            height={1536}
          />
          <div className="text-[#6C6EA0] mt-3 line-clamp-3">
            Sleepover is a slumber-party themed online challenge and in-person hackathon. Over 2,500 girls took part to earn prizes like digital cameras and iPads, and 60 flew to Chicago for the coziest hackathon of their lives.
          </div>
          <Link
            href="https://sleepover.hackclub.com"
            className="text-[#6988E0] italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-[#6988E0]"
          >
            Learn more about Sleepover here
          </Link>
        </div>
        <Image
          alt=""
          src="/images/bunny-shocked.png"
          className="h-[45%] w-auto absolute top-8 right-10 opacity-90 hidden md:block"
          height={230}
          width={172}
        />
      </div>
    </div>
  );
}
