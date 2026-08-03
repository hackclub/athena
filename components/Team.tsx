import Image from "next/image";
import { FaSlack } from "react-icons/fa6";
import { TeamMember } from "@/types";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center border border-athena-maroon bg-white p-3 pb-5 shadow-[0px_4px_0px_0px_rgba(82,36,44,0.5)] transition-transform duration-300 hover:-rotate-1">
      <div className="relative aspect-square w-full overflow-hidden border border-athena-maroon bg-athena-cream2/50">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
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
  );
}

function TeamRow({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center gap-3 border border-athena-maroon bg-white p-2 pr-4 shadow-[0px_3px_0px_0px_rgba(82,36,44,0.5)] transition-transform duration-300 hover:-rotate-1">
      <div className="h-16 w-16 shrink-0 border border-athena-maroon bg-athena-cream2/50">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-0.5 text-left">
        {member.name && (
          <p className="font-quattrocento text-sm text-athena-maroon">
            {member.name}
          </p>
        )}
        {member.role && (
          <p className="font-quattrocento text-xs text-athena-maroon/70">
            {member.role}
          </p>
        )}
        {member.slack && (
          <a
            href={member.slack}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 inline-flex w-fit items-center gap-1 rounded-full border border-athena-maroon/30 px-2 py-0.5 font-quattrocento text-[10px] text-athena-red2 transition hover:border-athena-red2 hover:text-athena-red3"
          >
            <FaSlack />
            Message on Slack
          </a>
        )}
      </div>
    </div>
  );
}

export default function Team({
  members,
  compact = false,
}: {
  members: TeamMember[];
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <TeamRow key={index} member={member} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
      {members.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  );
}
