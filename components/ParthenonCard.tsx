"use client";
import Image from "next/image";
import Link from "next/link";

export default function ParthenonCard() {
  return (
    <div className="w-full h-fit grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="col-span-full md:col-span-full w-full h-full relative rounded-lg pb-8 p-9 bg-gradient-to-l from-[#22291F] to-[#020302] overflow-hidden transition">
        <div className="absolute inset-0 opacity-10 md:opacity-40 bg-[url('/svg/background.svg')] pointer-events-none"></div>
        <div className="relative z-0 *:ml-auto">
          <div className="text-lg md:text-xl font-bold text-white mb-3 text-right">Our 2025 summit:</div>
          <Image
            alt="Parthenon Event"
            src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/9799d308000f849f_image.png"
            className="max-h-[15vh] w-auto"
            width={1121}
            height={390}
          />
          <div className="text-white md:w-3/5 line-clamp-2 text-right">
            This November in New York City, 130 Hack Clubbers from 15 different countries gathered at Civic Hall, Manhattan for our 2025 Athena hackathon, Parthenon.
          </div>
          <Link
            href="https://parthenon.hackclub.com"
            className="w-full text-right text-white italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-white"
          >
            Learn more about Parthenon
          </Link>
        </div>
        <Image alt="" src="/images/top-paper.png" className="h-full w-auto absolute rotate-180 top-0 left-0 opacity-25 md:opacity-100" height={800} width={800} />
        <Image alt="" src="/images/small-vine-1.png" className="h-48 w-auto absolute top-0 left-0 opacity-25 md:opacity-100" height={800} width={800} />
      </div>
    </div>
  );
}
