import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Background from "@/components/Background";
import philosophy from "@/lib/philosophy";

export default function PhilosophyPage() {

  return (
    <Background>
        <div className="px-6 lg:px-32 py-16">
            <Link href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</Link>
            
            <div className="text-[#D35648] flex flex-col items-start justify-center text-left mx-auto max-w-3xl whitespace-pre-line">
                <h1 className="text-5xl font-bold mt-2 ">What is Athena?</h1>
                <div className="mt-2">
                    <div className="text-2xl">{philosophy}</div>
                </div>
            </div>
        </div>
    </Background>
  );
}