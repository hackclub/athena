export default function UpcomingEvent({
  name,
  time,
  location,
}: {
  name?: string;
  time: string;
  location: string;
  website?: string;
}) {
  return (
    <div className="sm:w-auto flex flex-col items-center">
      <div className="size-3 bg-black rounded-full mb-3"></div>
      <div className="whitespace-nowrap text-left border-2 border-black p-4 rounded-md min-w-[25vw] bg-white">
        <div className="flex justify-between gap-4">
          <div className="text-2xl font-bold">{name ? name : location}</div>
          <span className="text-sm px-4 py-0.5 rounded-full bg-red/20 flex items-center justify-center">
            {time}
          </span>
        </div>
        {name && <div className="text-base">{location}</div>}
      </div>
    </div>
  );
}
