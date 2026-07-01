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

export default function SunbeamCard() {
  return (
    <>
      <div className="col-span-full md:col-span-full w-full h-max relative p-6 md:p-12 lg:px-16 lg:pt-32 lg:pb-64 bg-gradient-to-b from-[#D9DAF8] from-0% via-[#D9DAF8]/80 via-60% to-[#D9DAF8]/0 overflow-hidden transition max-w-[2200px] mx-auto" style={{fontFamily: "'Outfit', sans-serif"}}>
        
        {/* background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img src="/images/sand.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
        
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "end", fontSize: "1.5vw", position: "relative", bottom: "4vw"}}>
          <div className="relative z-20" style={{width: "40vw", height: "auto", display: "flex", flexDirection: "column", marginLeft: "0", padding: "0"}}>

            <img
              src="images/sunbeamlogo.png"
              alt="Sunbeam"
              style={{width: "32vw", height: "auto", marginLeft: "1vw"}}
            />

            <div
              className="relative w-[95vw] md:w-[38vw] my-[3vh] md:my-[4vh]"
              style={{ transform: "rotate(-1.57deg)" }}
            >
              <Image
                src="/images/towel.png"
                width={1434}
                height={1172}
                alt=""
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 768px) 95vw, 38vw"
              />
              <div
                className="absolute rounded-[32px] backdrop-blur-md bg-[#F393B4]/1 flex items-center justify-center text-center p-[4%]"
                style={{
                  top: "18.7%",
                  left: "14%",
                  right: "13.3%",
                  bottom: "12.2%"
                }}
              >
                <p style={{fontSize: "2vw", fontWeight: 300, color: "#2E599C"}}>
                  20+ beginner friendly <br /> social coding events for <br /> girls
                  around the world <br /> 29th August | sign up to run your own :)
                </p>
              </div>
            </div>
          </div>

          <div className="relative" style={{width: "50vw", height: "auto", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
            <iframe
              style={{marginBottom: "2vw"}}
              className="w-full rounded-lg border-2 border-[#2E599C] mt-4 md:mt-0 lg:mt-8 animate-wiggle hover:animate-none h-[200px] md:h-[300px] lg:h-[415px]"
              src="https://www.youtube.com/embed/FIyDH5dm5eo"
              title="This is the Athena Award"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <a href="google.com" style={{position: "relative", width: "25vw", display: "block", alignSelf: "center"}}>
              <img src="/images/surfboard.png" alt="" style={{width: "25vw", height: "auto", display: "block"}} />
              <div style={{position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#0E387A", fontWeight: 600, fontSize: "1.9vw", marginLeft: "0.2vw"}}>
                <span>run your own Sunbeam</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* below the fold - we good here*/}
      <div className="-mt-48 relative z-10" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="py-6">
          <div className="p-12 pt-[6vw] lg:pt-[10vw] lg:p-32 flex flex-col gap-4">
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
                src="https://cdn.hackclub.com/rescue?url=https://hc-cdn.hel1.your-objectstorage.com/s/v3/7c7cd694ba0da09feb79b18fd5f0e404ff2208e0_image.png"
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