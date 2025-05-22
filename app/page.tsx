import Card from "@/components/Card";
import AthenaAwardsCard from "@/components/AthenaAwardsCard";
//import Spotlight from "@/components/Spotlight";
//import { AirtableSpotlightManager } from "@/lib/airtable";
//import { SpotlightPost } from "@/lib/spotlight";
import Image from "next/image";
import Link from "next/link";
 
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  //const data = await new AirtableSpotlightManager().getLatestRecord();
  //const post: SpotlightPost = data.fields as unknown as SpotlightPost;
  return (
    <div className = "relative">
      <Link href="https://hackclub.com" className="block absolute z-40 top-0 left-[5vw]">
        <Image src="https://assets.hackclub.com/flag-orpheus-top.svg" height={158} width={250} alt="" className="h-[10vh] lg:h-[15vh] -translate-y-3 w-auto hover:rotate-[5deg] transition" />
      </Link>
    <AthenaAwardsCard/>

      <div className="w-full text-left px-6 lg:px-32 mb-16">
      <hr className = "py-10"/>

      <div className="text-2xl md:text-4xl font-bold">Curious what else we do?</div>
        <div className="text-6xl md:text-9xl font-bold">Athena</div>
        <div className="text-xl md:text-3xl font-bold mt-2">is a group of programs at Hack Club to empower girls and nonbinary teenagers to code.</div>
        <div className="text-base md:text-lg">From hosting in-person hackathons to virtual workshops, Hack Club is a place to become more technical and immerse yourself in coding.</div>
        
        <div className='w-full h-fit grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 my-8'>
          <div className="col-span-full md:col-span-full w-full h-full relative rounded-lg pb-8 p-9 bg-gradient-to-l from-[#150122] via-[#150122] to-[#2651A6] overflow-hidden transition">
            <div className="relative z-0">
              <div className="text-lg md:text-xl font-bold text-white mb-3">Our 2024 summit:</div>
              <Image alt="Ascend Event" src="https://cloud-rnls34zc7-hack-club-bot.vercel.app/0reduced-whitespace-ascend-logo.png" className="max-h-[15vh] w-auto" width={1121} height={390} />
              <div className="text-white md:w-3/5 line-clamp-2">Ascend was Hack Club&apos;s first-ever Days of Service Summit! Held in Los Angeles, this event brought together 50 girls and non-binary Hack Club members from across the U.S. and internationally for a hackathon hosted at SpaceX, along with a weekend filled with fun and growth. This summit became the largest teenage girl hackathon in the U.S. this year, in partnership with Girls Who Code and Kode with Klossy.</div>
              <Link href="https://ascend.hackclub.com" className="text-white italic underline inline-block mt-3 text-lg underline-offset-4 decoration-transparent transition-all hover:decoration-white">Learn more about Ascend</Link>
            </div>
            <Image alt="" src="https://ascend.hackclub.com/moon.png" className="h-[150%] w-auto absolute -top-[10vh] -right-[10vh] opacity-50 md:opacity-100" height={800} width={800}></Image>
          </div>
        </div>

        {/* TODO: set grid-rows on large back to 2 */}
        <div id="bento" className="w-full grid lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-8">
          <Card cardType="tinted" image="https://hc-cdn.hel1.your-objectstorage.com/s/v3/1ac00aee633128056bb70c2c7c568be0644147d3_0a5ff024abb6b5a18a3b49c86029b8adf8454576_1events-card-min__2_.jpg" tintColor="#69346D" href="/events" title="Events" description="One-day coding events that help girls and gender minorities write their first lines of code" className="md:col-span-1 lg:col-span-2 self-stretch" />
          <Card cardType="tinted" image="https://hc-cdn.hel1.your-objectstorage.com/s/v3/0a2717cd728b6d8f58c8750bf8c566a689b95a7b_daf0706d7cfa4c152ba8229ca61971f0b098df98_dsc00047__1_.jpg" tintColor="#69346D" href="/stories" title="Stories" description="Check out the awesome projects and stories from Athena members!" className="md:col-span-2 lg:col-span-3 self-stretch" />
          
          <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/3newsletter-card-min.jpg" tintColor="#2E0E0C" href="/team" title="Team" description="Meet the team behind Athena" className="md:col-span-2 lg:col-span-3 self-stretch" />
          {/*<Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/2horizon-coding-min.png" tintColor="#223B26" href="#" title="Start Hacking" description="Teenager? Stay tuned!" className="md:col-span-1 lg:col-span-2 self-stretch" /> */}
          <Card cardType="tinted" image="https://cloud-lz7wipd7a-hack-club-bot.vercel.app/2horizon-coding-min.png" tintColor="#223B26" href="https://daysofservice.hackclub.com" title="Days of Service" description="Looking for the old site? Click here." className="md:col-span-1 lg:col-span-2 self-stretch" /> 
          
        </div>
      </div>
    </div>
  );
}
