"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import EmailSignupForm from "./EmailSignupForm";

const ROLES = [
  "Engineer",
  "Entrepreneur",
  "Leader",
  "Researcher",
  "Journalist",
  "Activist",
  "Advocate",
  "Lawyer",
  "Environmentalist",
];

// Duplicate the first item at the end so the reel can loop seamlessly.
const REEL_ITEMS = [...ROLES, ROLES[0]];
const LINE_HEIGHT_EM = 1.15;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const itemRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Once the reel has slid onto the duplicate final item, snap back to the
  // real first item with no transition so the loop restarts seamlessly.
  useEffect(() => {
    if (index !== REEL_ITEMS.length - 1) return;
    const timeout = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 500);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [animate]);

  // Size the wrapper to the current word so the surrounding sentence
  // doesn't sit around a gap reserved for the longest word.
  useLayoutEffect(() => {
    const el = itemRefs.current[index];
    if (el) setWidth(el.offsetWidth);
  }, [index]);

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom"
      style={{ height: `${LINE_HEIGHT_EM}em`, width: width ?? "auto", transition: "width 0.4s ease" }}
    >
      <span
        className="flex flex-col"
        style={{
          transform: `translateY(-${index * LINE_HEIGHT_EM}em)`,
          transition: animate ? "transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
        }}
      >
        {REEL_ITEMS.map((role, i) => (
          <span
            key={`${role}-${i}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="whitespace-nowrap font-bold italic"
            style={{ height: `${LINE_HEIGHT_EM}em`, lineHeight: `${LINE_HEIGHT_EM}em` }}
          >
            {role}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24"
      style={{
        backgroundColor: "#FFF6E5",
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px), repeating-linear-gradient(to bottom, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px)",
      }}
    >
      {/* text on the left, video on the right */}
      <div className="relative mb-12 flex flex-col gap-10 md:pr-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pr-12 xl:pr-20">
        <div className="min-w-0 md:pl-8 lg:flex-1 lg:pl-12 xl:pl-20">
          <h1
            className="mb-8 max-w-5xl text-left font-quattrocento font-bold leading-tight text-athena-red3"
            style={{ fontSize: "clamp(24px, 3.4vw, 44px)", textWrap: "balance" }}
          >
            The largest <span className="whitespace-nowrap">all-girls</span> community for technical teens aged 13-18
          </h1>
          <h2
            className="text-left font-quattrocento leading-tight text-athena-red3"
            style={{ fontSize: "clamp(24px, 3.6vw, 44px)" }}
          >
            <span className="block">Become a</span>
            <span className="block" style={{ fontSize: "clamp(44px, 5vw, 80px)" }}>
              <RotatingRole />
            </span>
            <span className="block">with technical skills.</span>
          </h2>
        </div>

        <div
          className="w-full overflow-hidden rounded-lg border-2 border-athena-red2 bg-white shadow-[0px_6px_0px_0px_rgba(127,23,43,0.15)] lg:w-[45%] lg:max-w-[600px] lg:shrink-0"
          style={{ aspectRatio: "612 / 374" }}
        >
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Ymd2P14ePPA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <EmailSignupForm buttonLabel="join the newsletter" className="justify-center" />
          <a
            href="https://snowglobe.hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-quattrocento font-bold text-athena-red3 transition hover:text-athena-maroon"
            style={{ fontSize: "clamp(14px, 1.6vw, 24px)" }}
          >
            <span aria-hidden="true" className="shrink-0">❄️</span>
            <span>Join us at Snowglobe, the largest all-girls hackathon on Nov 20-22 at Notion HQ</span>
            <ArrowIcon className="h-[0.8em] w-[0.8em] shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* the red "We're excited to have you" band rises into the hero as a
          soft double wave instead of a hard edge */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 w-full md:h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 34 C 180 4, 360 4, 540 30 S 900 62, 1080 34 S 1350 6, 1440 22 V80 H0 Z"
          fill="#D7274D"
          opacity="0.25"
        />
        <path
          d="M0 52 C 200 22, 420 24, 620 48 S 1000 76, 1220 50 S 1400 34, 1440 40 V80 H0 Z"
          fill="#D7274D"
        />
      </svg>
    </section>
  );
}
