import Card from "@/components/Card";
import AthenaAwardsCard from "@/components/AthenaAwardsCard";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;
import Carousel from "@/components/StoriesCarousel";
import { stories } from "@/lib/stories";
import AscendCard from "@/components/AscendCard";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function Home() {
  return (
    <div className="relative">
      <Link
        href="https://hackclub.com"
        className="block absolute z-40 top-0 left-[5vw]"
      >
        <Image
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          height={158}
          width={250}
          alt=""
          className="h-[10vh] lg:h-[15vh] -translate-y-3 w-auto hover:rotate-[5deg] transition"
        />
      </Link>

      <AthenaAwardsCard />

      <div className="w-full text-left px-6 lg:px-32 bg-gradient-to-t from-[#D35648] from-0% via-[#D35648]/25 via-20% to-[#993E47]/0 overflow-hidden transition">
        <hr className="py-10" />
        <div className="text-2xl md:text-4xl font-bold">
          Curious who we are?
        </div>
        <div className="flex flex-row items-center text-6xl md:text-8xl font-bold ">
          Athena
          <img
            className="hidden w-32 h-32"
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/ea0ed6a31f20626c59bd2afbcf28aa5a01ae5f6f_image.png"
          />
        </div>

        <div className="text-2xl md:text-3xl font-bold mt-2 ">
          is a group of programs at{" "}
          <div className="bg-[#D35648] handwitten text-white px-2 py-1 rounded- inline-block ">
            Hack Club
          </div>{" "}
          to empower girls and nonbinary teenagers to code.
        </div>
        <div className="text-lg md:text-2xl mt-2">
          From hosting in-person hackathons to virtual workshops, Hack Club is a
          place to become more immerse yourself in coding.
        </div>
        <div className="text-lg md:text-2xl ">
          We're a community of teenagers who code, learn, and{" "}
          <Link
            href="https://hackclub.com"
            className="text-[#D35648] underline underline-offset-4 font-medium"
          >
            build together
          </Link>
          .
        </div>
        <div className="text-lg md:text-2xl mt-2 mb-6">
          Events are designed for{" "}
          <Link
            href="https://hackclub.com"
            className="text-[#D35648] underline underline-offset-4 font-medium"
          >
            beginners
          </Link>{" "}
          learning to code, girls are supported by experienced Hack Clubbers.
        </div>

        <hr className="my-12 border-[#D35648]" />

        <div
          id="bento"
          className="w-full grid lg:grid-rows-1 grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-8 my-8"
        >
          {/*Row 1*/}
          <Card
            cardType="spotlight"
            image="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1ac00aee633128056bb70c2c7c568be0644147d3_0a5ff024abb6b5a18a3b49c86029b8adf8454576_1events-card-min__2_.jpg"
            href="/events"
            title="Events"
            description="One-day coding events that teach girls and gender minorities code."
            className="col-span-1 md:col-span-2 row-span-1 self-stretch"
          />
          <Card
            cardType="spotlight"
            image="https://hc-cdn.hel1.your-objectstorage.com/s/v3/0a2717cd728b6d8f58c8750bf8c566a689b95a7b_daf0706d7cfa4c152ba8229ca61971f0b098df98_dsc00047__1_.jpg"
            href="/calendar"
            title="Calendar"
            description="Check out the calendar of upcoming events and past events."
            className="col-span-1 md:col-span-2 row-span-1 self-stretch"
          />
          <Card
            cardType="spotlight"
            image="https://aurora.hackclub.com/photos/horizon.jpg"
            href="/projects"
            title="Project Gallery"
            description="See the various projects created by Athena Award participants."
            className="col-span-1 md:col-span-2 row-span-1 "
          />

          {/*Row 2*/}
          <Card
            cardType="spotlight"
            image="https://cloud-hhue70g6y-hack-club-bot.vercel.app/4250a3142.jpg"
            href="/team"
            title="Team"
            description="Meet the team behind Athena events and programs."
            className="col-span-1 md:col-span-2 self-stretch"
          />
          <Card
            cardType="spotlight"
            image="https://media.licdn.com/dms/image/v2/D4E22AQGHjXAnX8muMQ/feedshare-shrink_800/feedshare-shrink_800/0/1732238750448?e=1752710400&v=beta&t=FgrsnIeGV6R5Y4U8WuIKQyOcQ764pNo0fUsNTaYzPYE"
            href="https://ascend.hackclub.com"
            title="Ascend '24"
            description="Ascend was Hack Club's first-ever Days of Service Summit in Nov 2024!"
            className="col-span-1 md:col-span-2 self-stretch"
          />
          <Card
            cardType="spotlight"
            image="https://cloud-82398rypd-hack-club-bot.vercel.app/0woop.jpg"
            href="/philosophy"
            title="Philosophy"
            description="Check out Athena's mission and values and how we started."
            className="col-span-1 md:col-span-2 self-stretch"
          />

          {/*Row 3*/}
          <hr className="border-[#D35648] col-span-full row-span-1" />

          {/*Row 4*/}
          <div className="col-span-full row-span-1">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <div className="text-xl md:text-3xl font-bold">
                  Check out the various stories from Athena members
                </div>
                <div className="text-lg md:text-2xl mt-2">
                  We're a community of teenagers who code, learn, and{" "}
                  <Link
                    href="https://hackclub.com"
                    className="text-[#D35648] underline underline-offset-4 font-medium"
                  >
                    build together
                  </Link>
                  .
                </div>
              </div>
              <Link
                href="/stories"
                className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"
              >
                View all stories <FaArrowRightLong />
              </Link>
            </div>
            <Carousel cards={stories} />
          </div>

          {/*Row 5*/}
          <hr className="border-[#D35648] col-span-full row-span-1" />

          {/*Row 6*/}
          <div className="flex flex-col text-3xl col-span-full row-span-1 text-center">
            <div className="text-xl md:text-3xl font-bold">
              Some feedback from past events
            </div>
            <div className="text-lg md:text-2xl mt-2">
              Words of support from leaders of our partner organizations.
            </div>
          </div>

          {/*Row 7*/}
          <div className="*:text-lg *:md:text-2xl h-fit handwritten my-auto p-8 border border-black rotate-1 my-4 *:py-2 col-span-2 row-span-3">
            <p>
              "It was a magical day! We hope we can work with you again in the
              future."
            </p>

            <p className="font-bold">- Girl Scouts of Eastern Massachusetts</p>

            <img
              src="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/3newsletter-card-min.jpg"
              alt=""
              className="hidden w-full h-auto m-auto"
            />

            <div className="absolute -top-1 -left-6 w-12 h-4 bg-[#D35648] -rotate-45" />
            <div className="absolute -bottom-1 -right-6 w-12 h-4 bg-[#D35648] -rotate-45" />
          </div>
          <div className="*:text-lg *:md:text-2xl h-fit handwritten p-8 border border-black -rotate-1 my-4 *:py-2 col-span-2 row-span-3 relative">
            <p>
              "We saw the girls taking an opportunity to incorporate their
              creative voice within their projects.""
            </p>

            <p className="font-bold">- Girl Scouts of Greater LA</p>

            <iframe
              className="w-full aspect-[16/9] m-auto"
              src="https://www.youtube.com/embed/hLCCbJw6Osg?si=Um_MuWLuXcShrulz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="absolute -top-1 -left-6 w-16 h-4 bg-[#D35648] -rotate-45" />
            <div className="absolute -bottom-1 -right-6 w-16 h-4 bg-[#D35648] -rotate-45" />
          </div>
          <div className="*:text-lg *:md:text-2xl h-fit handwritten my-auto p-8 border border-black rotate-1 my-4 *:py-2 col-span-2 row-span-3">
            <p>
              "Girls are being taught by other girls, and I believe that when
              girls see it, they can be it."
            </p>

            <p className="font-bold">- Girl Scouts of Greater LA</p>

            <img
              src="https://cloud-l9vmg3n5i-hack-club-bot.vercel.app/0img_5774.jpg"
              alt=""
              className="hidden w-full h-fit m-auto"
            />

            <div className="absolute -top-1 -left-6 w-16 h-4 bg-[#D35648] -rotate-45" />
            <div className="absolute -bottom-1 -right-6 w-16 h-4 bg-[#D35648] -rotate-45" />
          </div>

          {/*Row 8*/}
          <hr className="border-[#D35648] col-span-full row-span-1" />

          {/*Row 9*/}
          <div className="col-span-full row-span-3 py-12 gap-4 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold ">
                Interested in running an Athena event or <br /> joining the{" "}
                <div className="bg-[#D35648] handwritten text-white px-2 py-1 rounded- inline-block -rotate-2">
                  Hack Club
                </div>{" "}
                community?
              </div>
              <div className="text-2xl mt-3 text-[#8C2E37]">
                Email{" "}
                <Link
                  href="mailto:zenab@hackclub.com"
                  className="text-white underline underline-offset-4 font-medium"
                >
                  zenab@hackclub.com
                </Link>{" "}
                to talk about running an Athena event. <br /> Or join our{" "}
                <Link
                  href="https://hackclub.com/slack/"
                  className="text-white underline underline-offset-4 font-medium"
                >
                  Slack
                </Link>{" "}
                to get involved in our events.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
