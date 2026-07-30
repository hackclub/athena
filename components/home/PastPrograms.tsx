import Image from "next/image";
import SleepoverMiniCard from "@/components/SleepoverMiniCard";
import ParthenonCard from "@/components/ParthenonCard";
import AthenaAwardMiniCard from "@/components/AthenaAwardMiniCard";
import AscendCard from "@/components/AscendCard";

const bigGridStyle = {
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(223,56,59,0.12) 0 1px, transparent 1px 137px), repeating-linear-gradient(to bottom, rgba(223,56,59,0.12) 0 1px, transparent 1px 137px)",
};

export default function PastPrograms() {
  return (
    <section className="relative overflow-hidden px-6 pb-6 pt-20 md:px-12 md:pb-10 md:pt-28">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={bigGridStyle} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 0%, transparent 55%, #ffdcda 78%, #ffffff 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 flex items-center justify-between gap-4 md:gap-8">
          <Image
            src="/images/past-programs-girl.png"
            alt=""
            width={960}
            height={784}
            className="ml-16 h-auto w-56 shrink-0 md:ml-32 md:w-80"
          />
          <h2 className="mr-4 bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text text-right font-quattrocento text-3xl font-bold text-transparent md:mr-8 md:text-5xl">
            We&rsquo;ve done this before:
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 -mt-6 md:-mt-8">
          <SleepoverMiniCard />
          <ParthenonCard />
          <AthenaAwardMiniCard />
          <AscendCard />
        </div>
      </div>
    </section>
  );
}
