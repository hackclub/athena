"use client";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

async function handleEmailSubmit(
  event: FormEvent<HTMLFormElement>,
  router: any,
  utm_source: string,
  ref: string
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = String(formData.get("email")).replace("+", "%2b");
  router.push(
    `https://athena.hackclub.com/awards?email=${email}${
      utm_source ? "&utm_source=" + utm_source : ""
    }${ref ? "&ref=" + ref : ""}`
  );
}

const SignUp = ({
  className,
  buttonClicked,
  setButtonClicked,
  router,
  utm_source,
  ref,
}: {
  className?: string;
  buttonClicked: boolean;
  setButtonClicked: (value: any) => void;
  router: any;
  utm_source: string;
  ref: string;
}) => {
  return (
    <div
      className={`flex flex-row flex-wrap gap-4 mt-10 ${
        className && className
      }`}
    >
      {buttonClicked ? (
        <form
          onSubmit={(e) => handleEmailSubmit(e, router, utm_source, ref)}
          className="w-max border-2 border-b-4 border-r-4 border-[#D35648] border-b-[#DDA14A] border-r-[#DDA14A] text-black bg-white rounded-lg p-4 uppercase flex gap-4 text-xl md:text-2xl decoration-transparent "
        >
          <input
            className="outline-none"
            placeholder="orpheus@mail.com"
            required
            type="email"
            name="email"
            id="email"
          />
          <input
            type="submit"
            value="Submit"
            className="text-[#8C2E37] uppercase font-bold"
          />
        </form>
      ) : (
        <button
          className="w-max hover:border-b-4 hover:border-r-4 hover:border-b-[#DDA14A] hover:border-r-[#DDA14A] bg-[#8C2E37] rounded-lg p-4 uppercase text-white block text-xl md:text-2xl hover:-rotate-[4deg] hover:scale-110 font-bold decoration-transparent transition-all hover:decoration-white"
          onClick={() => setButtonClicked(true)}
        >
          start
        </button>
      )}

      <Link
        href="https://forms.hackclub.com/athena-award-stickers"
        className="w-max hover:border-b-4 hover:border-r-4 hover:border-b-[#8C2E37] hover:border-r-[#8C2E37] bg-[#DDA14A] rounded-lg p-4 uppercase text-white block text-xl md:text-2xl hover:-rotate-[4deg] hover:scale-110 font-bold decoration-transparent transition-all hover:decoration-white"
      >
        Get free stickers
      </Link>
      <Link
        href="https://athena.hackclub.com/projects"
        className="w-max border border-white/30 bg-orange rounded-lg p-4 uppercase text-white block text-xl md:text-2xl hover:-rotate-[4deg] hover:scale-110 font-bold decoration-transparent transition-all hover:decoration-white"
      >
        View project gallery
      </Link>
    </div>
  );
};

export default function AthenaAwardsCard() {
  const searchParams = useSearchParams();
  const utm_source = searchParams.get("utm_source");
  const ref = searchParams.get("ref");

  const [buttonClicked, setButtonClicked] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="col-span-full md:col-span-full w-full h-max relative rounded-b-lg p-12 lg:px-32 lg:pt-32 lg:pb-0 bg-gradient-to-b from-[#D9DAF8] from-0% via-[#D9DAF8]/80 via-60% to-[#D9DAF8]/0 overflow-hidden transition">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative z-20 h-full flex flex-col">
            <Image
              className="w-5/6"
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6ea8e84acae378a03d5b5e788a780a853aae4d21_outlinedlogoaltcropped.svg"
              alt="Athena Award"
              width={1000}
              height={1000}
              priority
            />
            <div className="text-white text-2xl md:w-2/3 py-4">
              <Tooltip id="info" className="max-w-96" />
              <h2 className="text-2xl font-semibold">
                💻 Build projects. Get prizes.
              </h2>
              <h2 className="text-2xl">
                🗽 Fly to <span className="font-semibold">New York City</span>{" "}
                for the largest{" "}
                <span className="font-semibold">
                  high school hackathon for girls and nonbinary students.
                </span>
              </h2>
            </div>

            <SignUp
              buttonClicked={buttonClicked}
              setButtonClicked={setButtonClicked}
              router={router}
              utm_source={utm_source!}
              ref={ref!}
              className="mb-10"
            />
            <span className="text-2xl font-semibold text-[#D35648] my-4">
              Happening now. You&apos;re invited to join a community of
              creators, built by girls, for girls. In collaboration with:
            </span>
          </div>

          <iframe
            className="w-full rounded-lg border-2 border-white animate-wiggle hover:animate-none"
            height="415"
            src="https://www.youtube.com/embed/WlJ5gsY9xSc?si=IRy0aNG7kTqNLKDA"
            title="This is the Athena Award "
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

