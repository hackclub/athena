import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Background from "@/components/Background";
import Card from "@/components/Card";
import Team from "@/components/Team";

export default function TeamPage() {

    const teamMembers = [
  {
    name: "Christina Asquith",
    role: "Cofounder of Hack Club",
    slack: "@Christina Asquith",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-UT2E7L19C-e2d0cd8db595-512",
  },
  {
    name: "Zenab H.",
    role: "Creative Events Manager",
    slack: "@Zenab H.",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U079FFTKM37-35a4de306155-512",
  },
  {
    name: "Annabel",
    role: "Gap Year Engineer @ HQ",
    slack: "@phthallo",
    pronouns: "they/them",
    image: "https://cloud-6fxxs7j9y-hack-club-bot.vercel.app/11733036812219.jpg",
  },
  {
    name: "Phoebe",
    role: "Communications & Partnership Lead @ HQ",
    slack: "@phoebe",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U08B2HD1JNA-af8fa755df15-512",
  },
  {
    name: "Phaedra Sanon",
    role: "Athena Team Engineer",
    slack: "@phaedra",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U05468GUS7J-53ffbb76641b-512",
  },

  {
    name: "Nadeen",
    role: "Athena Intern",
    slack: "@neptvnisme",
    pronouns: "she/her",
    image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/afb88308e7239a5456c900d581bce746f61b2c45_t0266frgm-u07ak3ce2mq-9fb9ad6f2d73-512.webp",
  },
  {
    name: "Kyra Ezikeuzor",
    role: "Athena Intern",
    slack: "@Kyra",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U03RG1Y7HNW-5aceecc2bc09-512",
  },
  {
    name: "Celeste R.",
    role: "Athena Intern",
    slack: "@thegrammarpolice",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U06TV3F4HEU-ee45e446ed7e-512",
  },
  {
    name: "Meghana M.",
    role: "Athena Intern",
    slack: "@Meghana",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U06P62WGWAV-f150278a6fda-512",
  },
  {
    name: "Reem K.",
    role: "Athena Intern",
    slack: "@reem",
    pronouns: "she/her",
    image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c630a53b4da175e0dfc077710a87e11c90a10651_aed248e0-7fef-4005-8c5d-63e988d0a615.jpeg",
  },

  {
    name: "Louisa M.",
    role: "Athena Intern",
    slack: "@lou",
    pronouns: "they/them",
    image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/0c0306bad2c52f721b120474ade9de27f4857cd7_lou.png",
  },

  {
    name: "Lubaba N.",
    role: "Athena Intern",
    slack: "@lubabaxn",
    pronouns: "she/her",
    image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/39175545e2e3009b1f26aa1d7101fc9575904d0f_screenshot_2025-06-12_at_10.29.00___am.png",
  },

  {
    name: "Estella G.",
    role: "Athena Intern",
    slack: "@magic frog",
    pronouns: "she/her",
    image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/e27855d383340c741fc7d7186eeff0d567aeac0e_screenshot_2025-06-12_at_10.24.54___am.png",
  },
];


  return (
    <Background>
        <div className="px-6 lg:px-32 py-16">
            <Link href="/" className="text-2xl font-bold flex gap-2 transition-all items-center hover:gap-4 cursor-pointer"><FaArrowLeftLong /> Athena</Link>
            <h1 className="text-5xl font-bold mt-4">Our Team</h1>
            <div className="mt-4">
                <Card cardType="bordered" className="!border-red">
                  <span className="block text-2xl font-bold">Meet the team behind Athena.</span>
                  <p className="text-lg mt-2">
                  We’re a group building the spaces we once needed; where anyone can code, connect, and feel seen. Got questions? Ideas? Just wanna chat? DM us on Slack using the handles below!
                  </p>
                  </Card>
            </div>
            <div className="mt-4 flex flex-col items-center">
                <div className="mt-4 w-full flex gap-6 pb-4 overflow-x-scroll lg:overflow-x-visible">
                    <Team members={teamMembers} />
                </div>
            </div>
        </div>
    </Background>
  );
}
