import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import NavBar from "@/components/home/NavBar";

export default function NotFound() {
  return (
    <div className="relative">
      <NavBar />
      <section
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-20 md:px-12 md:py-32"
        style={{
          backgroundColor: "#FFF6E5",
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px), repeating-linear-gradient(to bottom, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px)",
        }}
      >
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h1
            className="font-quattrocento font-bold leading-none text-athena-red3"
            style={{ fontSize: "clamp(56px, 12vw, 140px)" }}
          >
            404
          </h1>

          <p
            className="font-quattrocento text-athena-maroon2"
            style={{ fontSize: "clamp(18px, 2.4vw, 28px)" }}
          >
            this page wandered off somewhere
          </p>

          <Link
            href="/"
            className="mt-2 shrink-0 rounded-full border border-athena-maroon2 bg-athena-red2 px-8 py-3 font-quattrocento font-bold text-athena-cream shadow-[0px_4px_0px_0px_#52242C] transition hover:brightness-105"
          >
            back home
          </Link>

          <Image
            src="/images/bunny-illustration.png"
            alt=""
            width={320}
            height={200}
            className="mx-auto h-auto w-64 md:w-96"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
