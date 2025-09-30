"use client";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
      <div className="col-span-full md:col-span-full w-full h-max relative rounded-b-lg p-12 lg:px-32 lg:pt-32 lg:pb-0 bg-gradient-to-b from-[#D35648] from-0%  via-[#D35648]/80 via-60% to-[#993E47]/0 overflow-hidden transition">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative z-20 h-full flex flex-col">
            {/* <div className="text-6xl md:text-8xl font-bold text-white mb-3 z-20">The Athena Award</div> */}
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
                  all-girls high school hackathon.
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
            <div className="flex flex-row flex-wrap gap-6 *:max-h-[4vh] *:md:max-h-[8vh] *:image-cover *:w-max">
              <img alt="Girls Who Code" src="/images/gwc.png" />
              <img alt="MIT School of Engineering Logo" src="/images/mit.png" />
              <img alt="GitHub Logo" src="/images/github.png" />
              <img alt="Congressional App Challenge" src="/images/cac.png" />
              <img alt="NCWIT AIC" src="/images/ncwit.png" />
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
            </div>

            <div className="-mx-32 px-32 border-[#D45A4C]/80 border-t-4 border-b-4 border-dotted py-16 my-8">
              <h1 className="relative text-2xl md:text-4xl font-bold text-[#D35648]">
                How it works - Code three technical projects by Oct 31st
              </h1>

              <div className="my-6 flex flex-col md:flex-row gap-4 *:basis-1/3  mx-auto text-lg md:text-xl *:rounded-lg *:border-2 *:border-b-4 *:border-r-4 *:border-[#D35648] *:border-b-[#DDA14A] *:border-r-[#DDA14A] *:p-6 *:bg-white hover:*:shadow-lg hover:*:-translate-y-2 hover:*:scale-[101%] *:duration-300">
                <div>
                  <span className="bg-[#D35648] font-bold text-white px-1">
                    Build three of your own projects
                  </span>
                  , submit projects from one of our community partners, or
                  follow one of Hack Club&apos;s tutorials to get started.
                </div>
                <div>
                  <span className="bg-[#D35648] font-bold text-white px-1">
                    Code for thirty hours
                  </span>
                  , open source and deploy your finished projects.
                </div>
                <div>
                  <span className="bg-[#D35648] font-bold text-white px-1">
                    Meet other girls
                  </span>{" "}
                  in the online community. Ask questions. Get technical support
                  in online meetups and chats. Hack Clubbers will help you
                  finish and deploy your projects.
                </div>
              </div>

              <p className="text-lg md:text-2xl text-[#D35648] font-bold">
                Earn the Athena Award to share on your LinkedIn, college
                applications, or elsewhere.
              </p>
            </div>

            <div>
              <h1 className="py-10 relative text-2xl md:text-4xl font-bold text-[#D35648]">
                Here&apos;s what you can expect:
              </h1>
              <div className="-mx-12 lg:-mx-32">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                  infinite={true}
                  removeArrowOnDeviceType={["tablet"]}
                  itemClass="border-2 border-b-4 border-r-4 border-[#D35648] border-b-[#DDA14A] border-r-[#DDA14A] items-center rounded-lg text-sm object-cover m-2"
                >
                  <div className="flex p-6 flex-row gap-4 *:text-xs *:md:text-lg">
                    <div className="flex flex-col items-center basis-1/4">
                      <Image
                        className=" h-36 object-cover"
                        src="/images/sarahn.png"
                        alt="Sarah N"
                        width={144}
                        height={144}
                      />
                      <p>Sarah N</p>
                      <p>16, California</p>
                      <p>
                        <a
                          className="text-[#D35648] underline hover:decoration-wavy"
                          href="https://github.com/idksarah"
                        >
                          @idksarah
                        </a>
                      </p>
                    </div>
                    <div className="basis-1/4 grow text-xl">
                      <p>
                        Hihi!! I&apos;m Sarah and I&apos;m a 16 year old based
                        in California. I first found Hack Club through{" "}
                        <a
                          className="text-[#D35648] underline hover:decoration-wavy"
                          target="_blank"
                          href="https://hackclub.com/arcade"
                        >
                          Arcade
                        </a>
                        , a coding summer event which I participated in
                        partially because of the allure of free stickers.
                      </p>
                      <br />
                      <p>
                        Since then, I&apos;ve been helping organize various{" "}
                        <a
                          className="text-[#D35648] underline hover:decoration-wavy"
                          target="_blank"
                          href="https://ysws.hackclub.com"
                        >
                          You-Ship-We-Ship
                        </a>{" "}
                        and{" "}
                        <a
                          className="text-[#D35648] underline hover:decoration-wavy"
                          target="_blank"
                          href="/events"
                        >
                          Days-of-Service
                        </a>{" "}
                        programs as an artist and developer, + found some of my
                        favorite people through awesome hackathons in LA,
                        Shanghai, and even online.{" "}
                        <span className="bg-[#D35648] font-bold text-white px-1">
                          So excited to see you all in an even cooler hackathon
                          in NYC :3
                        </span>
                      </p>
                    </div>
                  </div>
                  {carouselImages.map(
                    (
                      item: { image: string; caption: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex flex-col gap-4 items-center justify-center"
                      >
                        <img
                          src={item.image}
                          className="w-full aspect-square object-cover"
                        />
                        <i className="p-2 text-center">{item.caption}</i>
                      </div>
                    )
                  )}
                </Carousel>
              </div>
            </div>

            <h1 className="pt-10 relative text-2xl md:text-4xl font-bold text-[#D35648]">
              You&apos;re invited to the best ever hackathon.
            </h1>
            <style>
              {`
                @import url(https://fonts.googleapis.com/css2?family=Gaegu&display=swap);
                .handwritten { 
                    font-family: "Gaegu", sans-serif;
                }`}
            </style>
            <div className="*:text-lg *:md:text-2xl handwritten p-8 border border-black -rotate-1 my-4 *:py-2">
              <p>Dear friends,</p>

              <p>
                Hack Club wants you to make things. Cool engineering things.
                Things you love to make.
              </p>

              <p>
                If you code and deploy three technical projects and spend 30
                hours of coding by Oct 31st, Hack Club will issue you the{" "}
                <b className="text-[#D35648]">Athena Award certification.</b>
              </p>

              <p>
                This is an exclusive badge for your website/LinkedIn/GitHub that
                is recognized by colleges like MIT and employers like SpaceX.
              </p>

              <p>
                It certifies you have achieved an impressive technical
                milestone.
              </p>

              <p>
                You will also instantly qualify to join Hack Club&apos;s NYC
                hackathon - the nation&apos;s largest all-girl hackathon -
                running from November 14th-November 16th. 250 girls can attend
                this 36 hour event, and we&apos;ll issue nearly 100 travel
                stipends.
              </p>

              <p>
                Win prizes, enjoy free food, play games and meet cool female
                tech CEOs!
              </p>

              <p>
                Deploying 3 technical projects is not easy. So along your
                journey, you&apos;ll earn &quot;artifacts&quot; to redeem for
                prizes. Hack Club is ready to give away $100k in prizes for the
                Athena Award - check out a few below. Get started - the Athena
                Award is competitive and hard, but also fun and packed with
                friends. There is no limit to the # of winners. We are here to
                support you.
              </p>

              <p className="font-bold">
                - Christina Asquith, Hack Club Cofounder
              </p>
            </div>

            <h1 className="py-3 text-2xl md:text-4xl font-bold">
              Earn incredible prizes for each project you ship!
            </h1>
          </div>

          <div className="px-12 pb-12 lg:px-32 lg:pb-32">
            <div className="flex flex-row flex-wrap *:lg:basis-1/3 *:basis-full">
              <div className="text-center hidden lg:inline">
                <svg
                  viewBox="0 0 202 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="10" width="85%" height="85%" fill="white" />
                  <image
                    className="bg-cover"
                    x="10"
                    y="10"
                    width="85%"
                    height="85%"
                    xlinkHref="/images/tablet.png"
                  ></image>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z"
                    fill="#F4BF4F"
                  />
                </svg>
                <div className="text-center p-2 bg-[#ebb33d] text-black tracking-wide">
                  Wacom Drawing Tablet
                </div>

                <svg
                  viewBox="0 0 202 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="10" width="85%" height="85%" fill="white" />
                  <image
                    className="bg-cover"
                    x="10"
                    y="10"
                    width="85%"
                    height="85%"
                    xlinkHref="/images/nothing.png"
                  ></image>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z"
                    fill="#F4BF4F"
                  />
                </svg>
                <div className="text-center p-2 bg-[#ebb33d] text-black tracking-wide">
                  Nothing Earbuds (Ear (a))
                </div>
              </div>

              <div className="text-center flex flex-col">
                <span>
                  <h1 className="text-5xl text-[#D35648] font-bold">Prizes</h1>
                  <p className="text-2xl">
                    Build awesome projects. Win awesome prizes.
                  </p>
                </span>
                <svg
                  className="self-end"
                  viewBox="0 0 672 774"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="10" width="70%" height="70%" fill="white" />
                  <image
                    className="bg-cover"
                    x="40"
                    y="20"
                    width="90%"
                    height="87%"
                    xlinkHref="/images/framework.png"
                  ></image>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M54 724.543L18.2477 773.687L0.0244268 744L18.2476 691.367L30.5 373L43.2075 93.0696L27.8028 31.2608L68.1375 0.0296471L102.375 19.9577L319.05 21.8007L406.183 21.8008L608 19.9576L639.907 9.48962L670.407 31.2608L670.407 51.9296L658 424.501L650 679.5L671.5 708.74L658 752L624.5 767L595 735.001L414 735.001L343.5 735.001L54 724.543ZM66.6112 418.542L70.3935 687.5L276.378 691.367L597.129 687.5L620.5 52.8447L301.058 47.2869L88.3237 42.1003L70.3935 59.7818L66.6112 418.542Z"
                    fill="url(#paint0_radial_480_189)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_480_189"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(343 339.5) rotate(94.2423) scale(533.963 635.385)"
                    >
                      <stop offset="0.653846" stopColor="#F4BF4F" />
                      <stop offset="1" stopColor="#EC3750" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="lg:inline p-2 bg-[#ebb33d] text-black tracking-wide">
                  Framework 12 Laptop
                </div>
                <p className="py-3 mt-auto text-2xl">... all these and more!</p>
              </div>
              <div className="hidden lg:inline">
                <svg
                  viewBox="0 0 202 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="10" width="85%" height="85%" fill="white" />
                  <image
                    className="bg-cover"
                    x="10"
                    y="10"
                    width="85%"
                    height="85%"
                    xlinkHref="/images/swag.png"
                  ></image>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z"
                    fill="#F4BF4F"
                  />
                </svg>
                <div className="text-center p-2 bg-[#ebb33d] text-black tracking-wide">
                  Athena Hoodie
                </div>

                <svg
                  viewBox="0 0 202 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="10" width="85%" height="85%" fill="white" />
                  <image
                    className="bg-cover"
                    x="10"
                    y="10"
                    width="85%"
                    height="85%"
                    xlinkHref="/images/ipad.png"
                  ></image>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z"
                    fill="#F4BF4F"
                  />
                </svg>
                <div className="text-center p-2 bg-[#ebb33d] text-black tracking-wide">
                  iPad (11 inch)
                </div>
              </div>
            </div>
            <SignUp
              buttonClicked={buttonClicked}
              setButtonClicked={setButtonClicked}
              router={router}
              utm_source={utm_source!}
              ref={ref!}
              className="items-center justify-center *:border-black"
            />
          </div>
        </div>
      </div>
    </>
  );
}
