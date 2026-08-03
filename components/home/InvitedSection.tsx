import Image from "next/image";

function SunbeamCard() {
  return (
    <a
      href="https://sunbeam.hackclub.com/"
      className="group relative flex-1 -rotate-1 overflow-hidden rounded-lg border border-black/10 shadow-lg transition hover:-translate-y-1"
    >
      <div className="relative aspect-[70/39] w-full overflow-hidden">
        {/* sky */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(179.931deg, rgb(213, 240, 249) 25.154%, rgb(114, 191, 218) 85.888%, rgb(251, 248, 233) 98.175%)",
          }}
        />

        {/* sand */}
        <div
          className="absolute inset-x-0 bottom-0 top-[42%] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sand.png')" }}
        />

        {/* foam */}
        <img
          src="/images/sunbeam-foam.png"
          alt=""
          className="pointer-events-none absolute inset-x-0 top-[28%] h-[30%] w-full object-cover"
        />

        {/* soft wash to tie the layers together */}
        <div className="pointer-events-none absolute inset-0 bg-[rgba(255,245,245,0.45)]" />

        {/* whale shark */}
        <div className="pointer-events-none absolute left-[6.4%] top-[4.9%] h-[32.8%] w-[14.8%]">
          <Image
            src="/images/sunbeam-whaleshark.png"
            alt=""
            fill
            className="object-contain"
            style={{ transform: "scaleY(-1) rotate(98.9deg)" }}
          />
        </div>

        {/* logo */}
        <div className="absolute left-1/2 top-[7.4%] h-[27.4%] w-[42.4%] -translate-x-1/2">
          <Image src="/images/sunbeam-hcflag-logo.png" alt="Sunbeam" fill className="object-contain" />
        </div>

        {/* ray mascot */}
        <div
          className="pointer-events-none absolute right-[1.3%] top-[65.4%] h-[28%] w-[19.6%]"
          style={{ transform: "rotate(6.67deg)" }}
        >
          <Image src="/images/sunbeam-ray-mascot.png" alt="" fill className="object-contain" />
        </div>

        {/* copy */}
        <div className="absolute inset-x-0 top-[63%] flex flex-col items-center gap-1 px-[10%] text-center">
          <p
            className="text-sm leading-snug text-[#0E387A] sm:text-base md:text-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            20+ beginner friendly social coding events for girls around the world!
          </p>
          <p
            className="text-xs text-[#2E599C] sm:text-sm"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            sign up now :)
          </p>
        </div>
      </div>
    </a>
  );
}

function SnowglobeCard() {
  return (
    <div className="relative aspect-[70/39] w-full flex-1 rotate-1 overflow-hidden rounded-lg border border-black/10 shadow-lg transition hover:-translate-y-1">
      <Image
        src="/images/snowglobe-small-card.png"
        alt="Hack Club's Snowglobe - coming soon"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default function InvitedSection() {
  return (
    <section className="bg-athena-cream2 px-6 pt-10 pb-20 md:px-12 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="whitespace-nowrap bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text font-quattrocento font-bold text-transparent"
          style={{ fontSize: "clamp(19px, 5.3vw, 58px)" }}
        >
          Happening now - you&rsquo;re invited!
        </h2>

        <div className="mx-auto mt-12 flex flex-col gap-10 sm:flex-row md:gap-16">
          <SunbeamCard />
          <SnowglobeCard />
        </div>
      </div>
    </section>
  );
}
