import Background from "@/components/Background";
import Card from "@/components/Card";
import Stories from "@/components/Stories";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

export const revalidate = 30;

export default async function EventPage() { 
  return (
    <Background>
      <div className="px-6 lg:px-32 py-16">
        <Link 
          href="/" 
          className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"
        >
          <FaArrowLeftLong /> Athena
        </Link>

        <div className="text-5xl font-bold">Stories</div>

        <div className="mt-4">
                <Card cardType="bordered" className="!border-red">
                <span className="block text-2xl font-bold">Stories bring people together.</span>
                This page spotlights some of the most creative and inspiring projects built by Athena members! 
                <br />
                Want to explore <span className="italic">all</span> the amazing projects submitted for the Athena Award? Check out the full{" "}
                <Link 
                    href="/projects"
                    target="_blank"
                    className="text-red-500 underline hover:text-red-600"
                >
                    Athena Award Gallery
                </Link>
                !
                </Card>


        </div>

        <div className="mt-4 flex flex-col items-center">
          <div className="w-full flex gap-6 pb-4 overflow-x-scroll lg:overflow-x-visible">
            <Stories />
          </div>
        </div>
      </div>
    </Background>
  );
}
