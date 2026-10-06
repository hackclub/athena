import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Programs", href: "/programs" },
  { label: "Brand", href: "/brand" },
  { label: "Team", href: "/team" },
];

export default function NavBar() {
  return (
    <nav className="bg-athena-red relative z-30 flex items-center justify-between gap-4 px-6 py-4 md:px-12">
      <Link
        href="/"
        className="shrink-0 transition hover:scale-105 hover:opacity-80"
      >
        <Image
          src="/images/new-athena-logo.png"
          alt="Athena"
          width={2013}
          height={1371}
          priority
          className="h-14 w-auto md:h-16"
        />
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 md:gap-x-10">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-quattrocento font-bold text-white transition hover:text-athena-cream"
            style={{ fontSize: "clamp(16px, 2.4vw, 36px)" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
