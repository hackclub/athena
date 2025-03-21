import Background from "@/components/Background";
import Card from "@/components/Card";
import Projects from "@/components/Projects";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { Fragment } from "react";
 
export const revalidate = 60;

export default async function EventPage() { 
    return (
        <Background>
            <div className="px-6 lg:px-32 py-16">
                <Link href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</Link>
                <div className="text-5xl font-bold">Stories</div>
                <div className="mt-4">
                <Card cardType="bordered" className="!border-red">
                    <span className="block text-2xl font-bold">Stories bring people together.</span>
                    Our very own space celebrating the incredible projects and stories of Athena members! 
                </Card>
                </div>
                <div className="mt-4 flex flex-col items-center">
                    <div className="w-full items-start">
                        <div className="text-3xl font-bold">Project Spotlight</div>
                        <div className="text-base">Run your own Athena event by joining our community in the <Link href="https://hackclub.com/slack" className="underline">Hack Club Slack!</Link></div>
                    </div>
                    <hr className="border border-black w-full translate-y-1.5" />

                    <div className="w-full flex gap-6 pb-4 overflow-x-scroll lg:overflow-x-visible">
                        <Projects/>
                    </div>
                </div>
                
            </div>
        </Background>
    ) 

}