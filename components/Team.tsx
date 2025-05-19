interface TeamMember {
  name: string;
  role: string;
  slack: string;
  pronouns: string;
  image: string;
}

export default function Team({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
      {members.map((member, index) => (
        <div
        key={index}
        className="rounded-2xl p-6 text-center backdrop-blur-md bg-white/20 shadow-md transition-transform duration-300 hover:rotate-1"
        >

          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-xl font-bold">{member.name}</h2>
          <p className="mt-1 text-[#dc2626]">{member.role}</p>
          <p className="text-sm text-gray-500">{member.slack}</p>
          <p className="text-sm text-gray-600">{member.pronouns}</p>


        </div>
      ))}
    </div>
  );
}
