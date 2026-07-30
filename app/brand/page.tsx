import { ReactNode } from "react";
import NavBar from "@/components/home/NavBar";
import AthenaWordmark from "@/components/home/AthenaWordmark";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

const stripeOverlayStyle = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, transparent 0 80px, rgba(255,255,255,0.08) 80px 82px)",
};

const cardStyle =
  "rounded-[24px] border border-athena-maroon2 bg-white/75";

const swatches = [
  { hex: "#52242C", textClass: "text-athena-cream2" },
  { hex: "#DF383B", textClass: "text-athena-maroon2" },
  { hex: "#FFFFFF", textClass: "text-athena-maroon2" },
  { hex: "#A91E38", textClass: "text-white" },
  { hex: "#B15C6E", textClass: "text-athena-cream2" },
  { hex: "#FFE4D3", textClass: "text-athena-maroon2" },
  { hex: "#FFF6EA", textClass: "text-athena-maroon2" },
  { hex: "#FFECEB", textClass: "text-athena-maroon2" },
  { hex: "#D42F4C", textClass: "text-white" },
];

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-quattrocento font-bold text-athena-accent underline decoration-2 underline-offset-4"
      style={{ fontSize: "clamp(24px, 2.6vw, 40px)" }}
    >
      {children}
    </h2>
  );
}

function LogoTile({ dark, withText }: { dark: boolean; withText: boolean }) {
  return (
    <div
      className={`flex h-full min-w-0 flex-col items-center justify-center gap-1 overflow-hidden rounded-xl p-3 ${dark ? "bg-athena-accent" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/c2-graphic.png" alt="Athena" className="h-16 w-auto object-contain" />
      {withText && (
        <div className="text-center leading-tight">
          <p className={`font-quattrocento font-bold text-sm ${dark ? "text-white" : "text-athena-red3"}`}>
            Hack Club&rsquo;s
          </p>
          <p className={`font-quattrocento font-bold text-xs ${dark ? "text-white" : "text-athena-red4"}`}>
            by girls, for girls
          </p>
        </div>
      )}
    </div>
  );
}

function FontSpecimen({
  title,
  description,
  fontWeightClass,
  textSize,
}: {
  title: string;
  description: string;
  fontWeightClass: string;
  textSize: string;
}) {
  return (
    <div className={`${cardStyle} flex flex-col gap-6 p-6 md:flex-row md:gap-10 md:p-10`}>
      <div className="md:w-1/3 md:shrink-0 md:border-r md:border-athena-maroon2/30 md:pr-8">
        <p className="font-quattrocento font-bold text-athena-maroon2 underline underline-offset-4" style={{ fontSize: "clamp(18px, 1.6vw, 24px)" }}>
          {title}
        </p>
        <p className="mt-2 font-quattrocento text-athena-maroon2" style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}>
          {description}
        </p>
      </div>
      <div
        className={`min-w-0 flex-1 font-quattrocento text-athena-red4 ${fontWeightClass} leading-tight break-words`}
        style={{ fontSize: textSize }}
      >
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p>abcdefghijklmnopqrstuvwxyz</p>
        <p>{`-«+»!?.*\\/()£€$¥¢+−±÷=`}</p>
      </div>
    </div>
  );
}

export default function BrandPage() {
  return (
    <>
      <NavBar />

      <section className="relative overflow-hidden bg-athena-red2 px-6 py-8 md:px-12 md:py-12">
        <div className="pointer-events-none absolute inset-0" style={stripeOverlayStyle} />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <AthenaWordmark variant="light" className="max-w-[220px] md:max-w-[280px]" />

          <div className="text-center md:text-right">
            <h1
              className="font-quattrocento font-bold text-athena-cream2"
              style={{ fontSize: "clamp(32px, 4.6vw, 72px)" }}
            >
              Identity
            </h1>
            <p
              className="mt-2 font-quattrocento text-athena-cream2"
              style={{ fontSize: "clamp(14px, 1.6vw, 26px)" }}
            >
              How we use logos, colours, and fonts to create our brand
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start">
          <aside className="shrink-0 lg:sticky lg:top-24 lg:w-64">
            <div className={`${cardStyle} overflow-hidden shadow-[0px_4px_0px_0px_#52242c,0px_6px_4px_0px_rgba(0,0,0,0.25)]`}>
              <div className="bg-[#FFE4D3] px-5 py-3">
                <p className="font-quattrocento font-bold text-athena-maroon2" style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
                  Table of Contents
                </p>
              </div>
              <div className="px-5 py-4">
                <p
                  className="font-quattrocento font-bold text-athena-maroon2 underline underline-offset-4"
                  style={{ fontSize: "clamp(20px, 1.8vw, 28px)" }}
                >
                  Identity
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 font-quattrocento text-athena-maroon2">
                  <li><a href="#logos" className="hover:underline">Logos</a></li>
                  <li><a href="#colors" className="hover:underline">Colors</a></li>
                  <li><a href="#typography" className="hover:underline">Typography</a></li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-16">
            <div className="flex flex-col gap-5">
              <SectionHeading id="logos">Logos</SectionHeading>
              <p className="font-quattrocento text-athena-maroon2" style={{ fontSize: "clamp(15px, 1.4vw, 22px)" }}>
                Do not place any objects such as graphics or text too close to the logo. Make sure to keep the logo at a legible size, and do not stretch nor deform the logo.
              </p>

              <div className={`${cardStyle} grid grid-cols-1 overflow-hidden sm:grid-cols-3`}>
                <div className="flex h-48 min-w-0 items-center justify-center p-4">
                  <LogoTile dark={false} withText />
                </div>
                <div className="flex h-48 min-w-0 items-center justify-center p-4">
                  <LogoTile dark={false} withText={false} />
                </div>
                <div className="flex h-48 min-w-0 items-center justify-center p-4">
                  <LogoTile dark withText />
                </div>

                <div className="bg-athena-cream px-4 py-4 text-center">
                  <p className="font-quattrocento text-[#D42F4C]" style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}>Main logo</p>
                </div>
                <div className="bg-athena-cream px-4 py-4 text-center">
                  <p className="font-quattrocento text-[#D42F4C]" style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}>Main logo w/o tagline</p>
                </div>
                <div className="bg-athena-cream px-4 py-4 text-center">
                  <p className="font-quattrocento text-[#D42F4C]" style={{ fontSize: "clamp(13px, 1vw, 16px)" }}>Main logo adjusted for dark backgrounds</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SectionHeading id="colors">Colors</SectionHeading>
              <p className="font-quattrocento text-athena-maroon2" style={{ fontSize: "clamp(15px, 1.4vw, 22px)" }}>
                These are the Athena brand colors. Try to adhere to them, but other colours may be used for illustrations.
              </p>

              <div className={`${cardStyle} grid grid-cols-1 gap-0 overflow-hidden sm:grid-cols-3`}>
                {swatches.map((swatch) => (
                  <div
                    key={swatch.hex}
                    className={`flex h-24 items-center justify-center border border-athena-maroon2/20 font-quattrocento ${swatch.textClass}`}
                    style={{ backgroundColor: swatch.hex, fontSize: "clamp(14px, 1.2vw, 20px)" }}
                  >
                    {swatch.hex}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <SectionHeading id="typography">Typography</SectionHeading>

              <FontSpecimen
                title="Quattrocento Bold"
                description="Used for headings and text that needs to be emphasized."
                fontWeightClass="font-bold"
                textSize="clamp(20px, 3vw, 40px)"
              />

              <FontSpecimen
                title="Quattrocento"
                description="Used for body text."
                fontWeightClass="font-normal"
                textSize="clamp(16px, 2.4vw, 32px)"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
