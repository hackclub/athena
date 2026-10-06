import Footer from "@/components/Footer";
import NavBar from "@/components/home/NavBar";
import Hero from "@/components/home/Hero";
import AthenaIsBand from "@/components/home/AthenaIsBand";
import PolaroidClothesline from "@/components/home/PolaroidClothesline";
import BenefitsGrid from "@/components/home/BenefitsGrid";
import GinghamSection from "@/components/home/GinghamSection";
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
      <ReadyCta />
      <Footer />
    </div>
  );
}
