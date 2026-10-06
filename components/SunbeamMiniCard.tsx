"use client";
import Image from "next/image";
import Link from "next/link";

export default function SunbeamMiniCard() {
  return (
    <div className="w-full h-fit grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div
        className="col-span-full md:col-span-full w-full h-full relative rounded-lg pb-8 p-9 overflow-hidden transition"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #c4e8f4 0%, #a3d9ec 45%, #8ccfe6 70%, #a6dbed 100%)",
        }}
      >
        <div className="relative z-0 md:w-3/5">
          <div className="text-lg md:text-xl font-bold text-[#0E387A] mb-3">Our Summer 2026 event:</div>
          {/* same logo box height as Sleepover so the cards line up */}
          <div className="flex h-[15vh] items-center">
            <Image
              alt="Sunbeam"
              src="/images/sunbeam-hcflag-logo.png"
              className="max-h-full w-auto max-w-full object-contain"
              width={1180}
              height={424}
            />
          </div>
          <div className="text-[#0E387A] mt-3 line-clamp-3 min-h-[4.5rem]">
            Sunbeam took place in 38 cities around the world with over 1,624 girls.
            It&apos;s the largest ever simultaneous coding event, by girls and for girls.
          </div>
          <Link
            href="https://sunbeam.hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0E387A] italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-[#0E387A]"
          >
            Learn more about Sunbeam here
          </Link>
        </div>
        <Image
          alt=""
          src="/images/sunbeam-whaleshark.png"
          className="h-[28%] w-auto absolute top-8 right-16 opacity-80 hidden lg:block"
          height={200}
          width={200}
        />
        <Image
          alt=""
          src="/images/sunbeam-ray-mascot.png"
          className="h-[42%] w-auto absolute bottom-8 right-10 opacity-95 hidden md:block"
          height={230}
          width={230}
        />
      </div>
    </div>
  );
}
