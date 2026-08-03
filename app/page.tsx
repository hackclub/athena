import Footer from "@/components/Footer";
import NavBar from "@/components/home/NavBar";
import Hero from "@/components/home/Hero";
import AthenaIsBand from "@/components/home/AthenaIsBand";
import PolaroidClothesline from "@/components/home/PolaroidClothesline";
import BenefitsGrid from "@/components/home/BenefitsGrid";
import GinghamSection from "@/components/home/GinghamSection";
import InvitedSection from "@/components/home/InvitedSection";
import PastPrograms from "@/components/home/PastPrograms";
import ReadyCta from "@/components/home/ReadyCta";
import { getMemberStories } from "@/lib/memberStories";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const stories = await getMemberStories();

  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <AthenaIsBand />
      <PolaroidClothesline />
      <InvitedSection />
      <BenefitsGrid />
      <GinghamSection stories={stories} />
      <PastPrograms />
      <ReadyCta />
      <Footer />
    </div>
  );
}
