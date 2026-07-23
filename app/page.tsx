import Footer from "@/components/Footer";
import NavBar from "@/components/home/NavBar";
import Hero from "@/components/home/Hero";
import AthenaIsBand from "@/components/home/AthenaIsBand";
import BenefitsGrid from "@/components/home/BenefitsGrid";
import GinghamSection from "@/components/home/GinghamSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <AthenaIsBand />
      <BenefitsGrid />
      <GinghamSection />
      <Footer />
    </div>
  );
}
