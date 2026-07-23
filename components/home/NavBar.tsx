import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Programs", href: "/programs" },
  { label: "Stories", href: "/stories" },
  { label: "Brand", href: "https://hackclub.com/brand", external: true },
  { label: "Team", href: "/team" },
];

export default function NavBar() {
  return (
    <nav className="bg-athena-red relative z-30 flex items-center justify-between gap-4 px-6 py-4 md:px-12">
      <Link
        href="https://hackclub.com"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 transition hover:scale-105 hover:opacity-80"
      >
        <Image
          src="/svg/hack-club-logo-red.svg"
          alt="Hack Club"
          width={158}
          height={48}
          className="h-8 w-auto md:h-10"
        />
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 md:gap-x-10">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
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
