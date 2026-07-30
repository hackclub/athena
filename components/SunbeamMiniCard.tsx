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
            "linear-gradient(179.931deg, rgb(213, 240, 249) 25.154%, rgb(114, 191, 218) 85.888%, rgb(251, 248, 233) 98.175%)",
        }}
      >
        <div
          className="absolute inset-x-0 bottom-0 h-[42%] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sand.png')" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 h-10"
          style={{
            top: "calc(58% - 20px)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 100%)",
            filter: "blur(3px)",
          }}
        />
        <div className="relative z-0 md:w-3/5">
          <div className="text-lg md:text-xl font-bold text-[#0E387A] mb-3">20+ events. 20+ cities.</div>
          <Image
            alt="Sunbeam"
            src="/images/sunbeam-hcflag-logo.png"
            className="max-h-[10vh] w-auto"
            width={600}
            height={300}
          />
          <div className="text-[#2E599C] mt-3 line-clamp-3">
            Sunbeam is 20+ beginner friendly social coding events for girls around
            the world. Sign up to attend, or run your own event in your city.
          </div>
          <Link
            href="https://sunbeam.hackclub.com/"
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
