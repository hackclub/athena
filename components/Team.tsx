import { teamMembers } from "@/lib/team";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
      {teamMembers.map((member: TeamMember | any, index: number) => (
        <div 
          key={index} 
          className="border border-black rounded-lg"
        >
          <div className="relative h-32 w-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="">{member.name}</h2>
            <p className="">{member.role}</p>
            <p className="">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}