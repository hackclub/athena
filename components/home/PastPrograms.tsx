import SleepoverCard from "@/components/SleepoverCard";
import ParthenonCard from "@/components/ParthenonCard";
import AthenaAwardsCard from "@/components/AthenaAwardsCard";
import AscendCard from "@/components/AscendCard";

export default function PastPrograms() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text text-center font-quattrocento text-3xl font-bold text-transparent md:text-5xl">
          We&rsquo;ve done this before:
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-8">
          <ParthenonCard />
          <AscendCard />
        </div>
      </div>
    </section>
  );
}
