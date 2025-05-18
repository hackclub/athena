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
    role: "Gap Year @ hq",
    slack: "@phthallo",
    pronouns: "they/them",
    image: "https://ca.slack-edge.com/T0266FRGM-U078J6H1XL3-724a93fb0c6f-512",
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
    role: "Athena Team (Specify)",
    slack: "@phaedra",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U05468GUS7J-53ffbb76641b-512",
  },
  {
    name: "Kyra Ezikeuzor",
    role: "Athena Intern",
    slack: "@Kyra",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U03RG1Y7HNW-5aceecc2bc09-512",
  },
  {
    name: "Nadeen",
    role: "Athena Intern",
    slack: "@neptvnisme",
    pronouns: "she/her",
    image: "https://ca.slack-edge.com/T0266FRGM-U07AK3CE2MQ-9fb9ad6f2d73-512",
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
