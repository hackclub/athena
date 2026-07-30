import Image from "next/image";
import type { ReactNode } from "react";

function EventBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-quattrocento text-xs font-bold uppercase tracking-wide md:text-sm ${className}`}
    >
      {children}
    </span>
  );
}

function SnowglobeIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-16 w-16 shrink-0 md:h-20 md:w-20"
      fill="none"
      stroke="#2E599C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="50" cy="40" rx="31" ry="31" />
      <path d="M22 78h56l4 11H18z" />
      <path d="M15 78h70" />
      <circle cx="38" cy="32" r="2" fill="#2E599C" stroke="none" />
      <circle cx="58" cy="46" r="2" fill="#2E599C" stroke="none" />
      <circle cx="64" cy="27" r="2" fill="#2E599C" stroke="none" />
      <circle cx="44" cy="52" r="2" fill="#2E599C" stroke="none" />
    </svg>
  );
}

function SunbeamCard() {
  return (
    <a
      href="https://sunbeam.hackclub.com/"
      className="group relative flex-1 -rotate-1 overflow-hidden rounded-lg border border-athena-maroon shadow-[0px_8px_6px_0px_rgba(127,23,43,0.25),0px_2px_0px_0px_#7f172b] transition hover:-translate-y-1"
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
    <div className="relative aspect-[70/39] w-full flex-1 rotate-1 overflow-hidden rounded-lg border-2 border-dashed border-[#2E599C]/50 bg-gradient-to-b from-[#DCEBFA] to-[#EAF4FC] p-6 md:p-8">
      <div className="relative flex h-full flex-col items-center justify-center gap-3 text-center">
        <EventBadge className="border-[#2E599C]/30 bg-white/60 text-[#2E599C]">
          ❄️ coming soon
        </EventBadge>

        <SnowglobeIcon />

        <p className="font-quattrocento text-2xl font-bold text-[#2E599C] md:text-3xl">
          Snowglobe
        </p>
      </div>
    </div>
  );
}

export default function InvitedSection() {
  return (
    <section className="bg-athena-cream2 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text font-quattrocento text-3xl font-bold text-transparent md:text-5xl">
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
