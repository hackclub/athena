"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
];

export default function NavBar() {
  // phones get a three-line menu button that opens the links in a panel
  // under the bar; md and up show the links inline
  const pathname = usePathname();
  // remember which page the panel was opened on, so it closes by itself once
  // you navigate somewhere else
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean) => setOpenOn(value ? pathname : null);

  // close the panel on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="bg-athena-red3 relative z-30 flex items-center justify-between gap-4 px-6 py-4 md:px-12">
      <a
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
      </a>

      <div className="hidden items-center justify-end gap-x-10 md:flex">
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

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="relative h-10 w-10 shrink-0 rounded-md text-white transition hover:bg-white/10 md:hidden"
      >
        {/* three lines that fold into an X when open */}
        <span
          aria-hidden="true"
          className={`absolute left-2 right-2 h-0.5 rounded-full bg-current transition-all duration-200 ${
            open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-3"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute left-2 right-2 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute left-2 right-2 h-0.5 rounded-full bg-current transition-all duration-200 ${
            open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-3"
          }`}
        />
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="bg-athena-red3 absolute inset-x-0 top-full border-t border-white/20 px-6 pb-4 shadow-[0px_8px_16px_0px_rgba(82,36,44,0.25)] md:hidden"
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.label} className="border-b border-white/15 last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`block py-3 font-quattrocento text-2xl font-bold transition hover:text-athena-cream ${
                  pathname === link.href ? "text-athena-cream" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
