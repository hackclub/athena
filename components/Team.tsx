import Image from "next/image";
import { FaSlack } from "react-icons/fa6";

interface TeamMember {
  name: string;
  role: string;
  slack: string;
  pronouns: string;
  image: string;
}

export default function Team({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center border border-athena-maroon bg-white p-3 pb-5 shadow-[0px_4px_0px_0px_rgba(82,36,44,0.5)] transition-transform duration-300 hover:-rotate-1"
        >
          <div className="aspect-square w-full border border-athena-maroon bg-athena-cream2/50">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                width={220}
                height={220}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="mt-4 flex min-h-[4.5rem] w-full flex-col items-center gap-1 text-center">
            {member.name && (
              <p className="font-quattrocento text-lg text-athena-maroon sm:text-xl">
                {member.name}
              </p>
            )}
            {member.role && (
              <p className="font-quattrocento text-sm text-athena-maroon/70">
                {member.role}
              </p>
            )}
            {member.slack && (
              <a
                href={member.slack}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-athena-maroon/30 px-3 py-1 font-quattrocento text-xs text-athena-red2 transition hover:border-athena-red2 hover:text-athena-red3"
              >
                <FaSlack />
                Message on Slack
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
