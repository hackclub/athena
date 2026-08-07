"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import EmailSignupForm from "./EmailSignupForm";
import AthenaWordmark from "./AthenaWordmark";

const ROLES = [
  "Engineer",
  "Entrepreneur",
  "Leader",
  "Researcher",
  "Journalist",
  "Activist",
  "Advocate",
  "Lawyer",
  "Baker",
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
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
          <AthenaWordmark className="max-w-[300px] md:max-w-[380px] lg:max-w-[440px] lg:-mt-4" />

          <div
            className="w-full max-w-[470px] overflow-hidden rounded-lg border-2 border-athena-red2 bg-white shadow-[0px_6px_0px_0px_rgba(127,23,43,0.15)]"
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

        <div className="flex flex-col items-center gap-5 text-center">
          <h1
            className="font-quattrocento leading-tight text-athena-red3"
            style={{ fontSize: "clamp(24px, 3.6vw, 44px)" }}
          >
            Become a <RotatingRole /> with technical skills.
          </h1>

          <EmailSignupForm buttonLabel="join the community" className="justify-center" />
          <a
            href="https://sunbeam.hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-quattrocento font-bold text-athena-red3 transition hover:text-athena-maroon"
            style={{ fontSize: "clamp(14px, 1.6vw, 24px)" }}
          >
            <img src="/images/sunbeam-favicon.svg" alt="" className="h-[1.4em] w-[1.4em] shrink-0" />
            <span>sign up for Sunbeam, happening now</span>
            <ArrowIcon className="h-[0.8em] w-[0.8em] shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
