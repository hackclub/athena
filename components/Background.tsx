"use client";
import { useRef, useEffect, ReactNode, RefObject } from "react";

export default function Background({ children }: { children?: ReactNode }) {
  const spotlightRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const rect = document
        .getElementById("spotlight")!
        .getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      spotlightRef.current!.style.background = `radial-gradient(
                  circle at ${x}px ${y}px,
                  rgba(223, 162, 173, 0.8) 10px,
                  rgba(249, 250, 252, 0.8) 125px
              )`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
      <div
        id="spotlight"
        className="font-phantom-sans opacity-25 w-full min-h-full bg-[length:40px_40px] bg-repeat fixed top-0 left-0 z-[-1] bg-[url('/svg/glyph_rep.svg')]"
      >
        <div
          ref={spotlightRef as RefObject<HTMLDivElement>}
          className="absolute top-0 left-0 right-0 bottom-0 bg-white z-2"
        />
      </div>

      <div className="">{children}</div>
    </div>
  );
}
