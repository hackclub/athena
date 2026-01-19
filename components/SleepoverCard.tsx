"use client";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GradientText from "./GradientText";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselImages = [
  {
    image:
      "https://hc-cdn.hel1.your-objectstorage.com/s/v3/643baf61ae5b56c1fb50a3af60600108cf52f3af_image.png",
    caption: "Hackers at Horizon, a Day of Service event in NYC.",
  },
  {
    image: "/images/jpeg.png",
    caption:
      "Programmers working hard at Athena's JPEG game jam in Ottawa, Canada.",
  },
  {
    image: "/images/underground.png",
    caption: "A workshop on GitHub at Underground, in Toronto, Canada",
  },
  {
    image: "/images/jua.png",
    caption: "Jua, the first overseas Day of Service in Nairobi.",
  },
  {
    image: "/images/ascend.png",
    caption: "Ascend - the 2024 Athena Summit at SpaceX, LA.",
  },
];

export default function SleepoverCard() {
  return (
    <>
      <div className="col-span-full md:col-span-full w-full h-max relative rounded-b-lg p-6 md:p-12 lg:px-32 lg:pt-32 lg:pb-0 bg-gradient-to-b from-[#D9DAF8] from-0% via-[#D9DAF8]/80 via-60% to-[#D9DAF8]/0 overflow-hidden transition">
        {/* Bunny tile background */}
        <div 
          className="absolute inset-0 bg-[url('/images/bunny-tile.png')] bg-repeat bg-[length:100px] md:bg-[length:200px] opacity-80 pointer-events-none z-0"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 70%)",
          }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 relative z-10">
          <div className="relative z-20 flex flex-col items-center md:items-start">
            <Image
              className="w-full max-w-[300px] md:max-w-none md:w-5/6"
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/33acfe853130c7a8_sleepover-logo.PNG"
              alt="Sleepover"
              width={1000}
              height={1000}
              priority
            />
            <div className="text-[#6988E0] text-lg md:text-2xl md:w-2/3 py-4 pb-4 text-center md:text-left" style={{ fontFamily: "'MADE Tommy Soft', sans-serif" }}>
              <Tooltip id="info" className="max-w-96" />
              <h2 className="text-lg md:text-2xl font-semibold pb-2">
                Build Projects. Get Prizes.
              </h2>
            <h2 className="text-base md:text-2xl whitespace-normal md:whitespace-nowrap pb-4">
              🌃 Come to <span className="font-semibold">Chicago</span> for a <span className="font-semibold">girls-only</span><br /><span className="font-semibold">overnight hackathon in April, 2026.</span>
            </h2>
            <Link 
              href="https://sleepover.hackclub.com?utm_source=athena_website" 
              className="relative inline-block mt-4 group"
            >
              <div className="absolute inset-0 bg-white rounded-[20px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]" />
              <div className="absolute inset-[3px] backdrop-blur-[2px] bg-gradient-to-t from-[#7472a0] to-[#dfa1aa] rounded-[17px] shadow-[2px_2px_10px_4px_#fffbfb]" />
              <div className="relative m-[6px] px-8 py-4 md:px-12 md:py-5 bg-gradient-to-t from-[#dfa2ad] to-[#ad8fb5] rounded-[14px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] group-hover:brightness-110 transition-all duration-300">
                <GradientText
                  gradient="linear-gradient(180deg, #b8a9d4 0%, #9b8cc4 100%)"
                  strokeWidth="6px"
                  className="text-2xl md:text-4xl"
                >
                  GET STARTED NOW!
                </GradientText>
              </div>
            </Link>
            </div>
            <span className="text-lg md:text-2xl font-semibold text-[#6C6EA0] my-4 text-center md:text-left">
              Happening now. You&apos;re invited to join a community of
              creators, built by girls, for girls. In collaboration with:
            </span>
          </div>

          <iframe
            className="w-full rounded-lg border-2 border-white mt-4 md:mt-0 lg:mt-8 animate-wiggle hover:animate-none h-[200px] md:h-[300px] lg:h-[415px]"
            src="https://www.youtube.com/embed/FIyDH5dm5eo"
            title="This is the Athena Award"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div>
        <div className="py-6">
          <div className="p-12 lg:pt-4 lg:p-32 pt-0 flex flex-col gap-4">
            <div className="flex flex-row flex-wrap gap-6 *:h-[35px] *:md:h-[65px] *:image-cover">
              <img alt="Girls Who Code" src="/images/gwc.png" />
              <img alt="MIT School of Engineering Logo" src="/images/mit.png" />
              <img alt="GitHub Logo" src="/images/github.png" />
              <img alt="Congressional App Challenge" src="/images/cac.png" />
              <img
                alt="Girl Scouts of Greater New York"
                src="/images/gsgny.png"
              />
              <img alt="The Knowledge House" src="/images/knowledgehouse.png" />
              <img alt="Black Girls Code" src="/images/blackgirlscode.png" />
              <img alt="Code.org" src="/images/codeorg.png" />
              <img alt="Être" src="/images/etre.png" />
              <img alt="Launchpad Philly" src="/images/launchpadphilly.png" />
              <img alt="Get Cybersmart" src="/images/getcybersmart.png" />
              <img
                alt="Girls Who Hack"
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7c7cd694ba0da09feb79b18fd5f0e404ff2208e0_image.png"
              />
              <img alt="Girl Up Kenya" src="/images/girlup.png" />
              <img alt="NCWIT AIC" src="/images/ncwit.png" />
            </div>

<Carousel responsive={responsive} swipeable={true} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet"]} itemClass = "border-2 border-b-4 border-r-4 border-[#D35648] border-b-[#DDA14A] border-r-[#DDA14A] items-center rounded-lg text-sm object-cover m-2">
                { carouselImages.map((item: { image: string, caption: string }, index: number) => (
                  <div key = {index} className = "flex flex-col gap-4 items-center justify-center">
                    <img src = {item.image} className = "w-full aspect-square object-cover"/>
                    <i className = "p-2 text-center">{item.caption}</i>
                  </div>
                ))}
              </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}