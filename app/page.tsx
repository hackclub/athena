import Footer from "@/components/Footer";
import NavBar from "@/components/home/NavBar";
import Hero from "@/components/home/Hero";
import AthenaIsBand from "@/components/home/AthenaIsBand";
import PolaroidClothesline from "@/components/home/PolaroidClothesline";
import BenefitsGrid from "@/components/home/BenefitsGrid";
import GinghamSection from "@/components/home/GinghamSection";
import HackathonVideo from "@/components/home/HackathonVideo";
import PartnersBand from "@/components/home/PartnersBand";
import ReadyCta from "@/components/home/ReadyCta";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <PolaroidClothesline />
      <AthenaIsBand />
      <BenefitsGrid />
      <GinghamSection />
      <HackathonVideo />
      <PartnersBand />
      <ReadyCta />
      <Footer />
    </div>
  );
}
