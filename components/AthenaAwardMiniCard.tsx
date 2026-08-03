"use client";
import Image from "next/image";
import Link from "next/link";

export default function AthenaAwardMiniCard() {
  return (
    <div className="w-full h-fit grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="col-span-full md:col-span-full w-full h-full relative rounded-lg pb-8 p-9 bg-gradient-to-r from-[#903A42] to-[#8D2423] overflow-hidden transition">
        <div className="absolute inset-0 opacity-30 md:opacity-40 bg-[url('/svg/background2.svg')] pointer-events-none"></div>
        <div className="relative z-0 *:ml-auto h-full flex flex-col">
          <div className="text-lg md:text-xl font-bold text-white mb-3 text-right">The Athena Award:</div>
          <Image
            alt="Athena Award"
            src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/6ea8e84acae378a03d5b5e788a780a853aae4d21_outlinedlogoaltcropped.svg"
            className="max-h-[15vh] w-auto"
            width={1121}
            height={390}
            unoptimized
          />
          <div className="text-white md:w-8/12 text-right line-clamp-4 flex-1 grow">
            In 2025, over 1000 Hack Clubbers started their journey to earn the Athena Award certifcation - in collaboration with MIT, Girls Who Code, and GitHub - by spending 30 hours coding on 3 technical projects.
          </div>
          <Link
            href="https://award.athena.hackclub.com"
            target="_blank"
            className="w-full text-right text-white italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-white"
          >
            Learn more about the Athena Award
          </Link>
        </div>
        <Image
          alt=""
          src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/315b4d8271ec9804a39feb90d0c8c0da22be2411_image.png"
          className="h-[100%] w-auto absolute -bottom-[2vh] -left-[20vh] opacity-25 md:opacity-75"
          height={800}
          width={800}
        />
      </div>
    </div>
  );
}
