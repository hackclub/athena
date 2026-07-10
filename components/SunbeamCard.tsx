"use client";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GradientText from "./GradientText";

export default function SunbeamCard() {
  return (
    <>
      <div className="col-span-full md:col-span-full w-full h-max relative p-6 md:p-12 lg:px-16 lg:pt-32 lg:pb-12 bg-gradient-to-b from-[#D9DAF8] from-0% via-[#D9DAF8]/80 via-60% to-[#D9DAF8]/0 overflow-hidden transition max-w-[2200px] mx-auto" style={{fontFamily: "'Outfit', sans-serif"}}>
        
        {/* background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img src="/images/sand.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
        
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "end", fontSize: "1.5vw", position: "relative", bottom: "4vw"}}>
          <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-[4vw]">

            {/* left column */}
            <div className="relative z-20 flex flex-col items-center w-full md:w-[42vw]">
              <img
                src="/images/sunbeamlogo.png"
                alt="Sunbeam"
                className="w-[70vw] md:w-[30vw] h-auto mt-[3vw]"
              />

              <div
                className="relative w-[88vw] md:w-[38vw] mt-[5vw] md:mt-[2.5vw]"
                style={{ transform: "rotate(-1.57deg)" }}
              >
                <Image
                  src="/images/towel.png"
                  width={1434}
                  height={1172}
                  alt=""
                  className="w-full h-auto rounded-2xl"
                  sizes="(max-width: 768px) 88vw, 38vw"
                />
                <div
                  className="absolute backdrop-blur-sm bg-[#F393B4]/1 flex items-center justify-center text-center rounded-[32px]"
                  style={{ top: "18.7%", left: "7%", right: "6%", bottom: "12.2%" }}
                >
                  <p
                    className="text-[4vw] md:text-[1.7vw]"
                    style={{ fontWeight: 400, color: "#2E599C", lineHeight: 1.6 }}
                  >
                    20+ <u>beginner friendly</u> <br /> social coding events for <br /> girls
                    around the world <br /> <span style={{ fontWeight: 600 }}>29th August</span> | sign up to run your own :)
                  </p>
                </div>
              </div>
            </div>

            {/* right column */}
            <div className="relative flex flex-col items-center gap-8 md:gap-[2.5vw] w-full md:w-[46vw]">
              <iframe
                className="w-full rounded-lg border-2 border-[#2E599C] animate-wiggle hover:animate-none h-[52vw] md:h-[26vw]"
                src="https://www.youtube.com/embed/Ufmk9QW-XAs"
                title="This is the Athena Award"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <a
                href="https://sunbeam.hackclub.com/"
                className="relative block w-[68vw] md:w-[28vw] transition-transform hover:scale-105"
              >
                <img src="/images/surfboard.png" alt="" className="w-full h-auto block" />
                <div
                  className="absolute inset-0 flex items-center justify-center text-center text-[4vw] md:text-[1.6vw]"
                  style={{ color: "#0E387A", fontWeight: 600, textShadow: "-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white" }}
                >
                  <span>Sign up to run your own Sunbeam!</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}