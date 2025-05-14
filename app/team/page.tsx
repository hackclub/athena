import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Background from "@/components/Background";
import Card from "@/components/Card";
import Team from "@/components/Team";

export default function TeamPage() {
  return (
    <Background>
        <div className="px-6 lg:px-32 py-16">
            <Link href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</Link>
            <h1 className="text-5xl font-bold mt-4">Our Team</h1>
            <div className="mt-4">
                <Card cardType="bordered" className="!border-red">
                    <span className="block text-2xl font-bold">Meet the team behind Athena.</span>
                    We're a group who is passionate about expanding opportunities for girls and gender minorities to learn to code.
                </Card>
            </div>
            <div className="mt-4 flex flex-col items-center">
                <div className="w-full items-start">
                    <div className="text-3xl font-bold">Join the Team</div>
                    <div className="text-base">Join #days-of-service in the <Link href="https://hackclub.com/slack" className="underline">Hack Club Slack!</Link> to learn more about Athena and how you can get involved!</div>
                </div>
                <hr className="border border-black w-full translate-y-1.5" />
                <div className="mt-4 w-full flex gap-6 pb-4 overflow-x-scroll lg:overflow-x-visible">
                    <Team/>
                </div>
            </div>
        </div>
    </Background>
  );
}
