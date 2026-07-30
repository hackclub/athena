import Image from "next/image";

export default function AthenaIsBand() {
  return (
    <section className="relative overflow-hidden bg-athena-red2 px-6 py-10 text-center md:px-12 md:py-14">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent 0 80px, rgba(255,255,255,0.08) 80px 82px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <h2
          className="font-quattrocento font-bold text-white"
          style={{ fontSize: "clamp(26px, 4.2vw, 52px)" }}
        >
         What is Hack Club&rsquo;s Athena?
        </h2>

        <div
          className="mt-3 font-quattrocento leading-snug text-white"
          style={{ fontSize: "clamp(15px, 2.2vw, 28px)" }}
        >
          <p>Athena is Hack Club&rsquo;s girls-only community of makers, creatives, and visionaries. We code, draw, and build ambitious projects together. No matter what your interests may be, you’ll find a place in this community.
          </p>
        </div>

        <Image
          src="/images/athena-is-illustration.png"
          alt=""
          width={880}
          height={658}
          className="relative mx-auto mt-4 h-auto w-full max-w-[280px]"
        />
      </div>
    </section>
  );
}
