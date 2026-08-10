// export default function AuthCompletePage() {
//   return (
//     <section
//       className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 md:px-12 md:py-32"
//       style={{
//         backgroundColor: "#FFF6E5",
//         backgroundImage:
//           "repeating-linear-gradient(to right, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px), repeating-linear-gradient(to bottom, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px)",
//       }}
//     >
//       <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
//         <h1
//           className="font-quattrocento font-bold text-athena-red3"
//           style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
//         >
//           thanks for signing up!
//         </h1>

//         <p
//           className="font-quattrocento text-athena-accent"
//           style={{ fontSize: "clamp(18px, 2.4vw, 24px)" }}
//         >
//          ready to meet the community? introduce yourself{" "}
//           <a
//             href="https://hackclub.enterprise.slack.com/archives/C0BLVTFNKGE"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline decoration-2 underline-offset-4 hover:brightness-110"
//           >
//             here!
//           </a>
//           .
//         </p>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";

function PaintFrame() {
  return (
    <Image
      src="/images/brushstroke.png"
      alt=""
      className="pointer-events-none absolute inset-0 scale-125 object-fill mt-6"
      aria-hidden="true"
      width={400}
      height={400}
    />
  );
}

const STEPS = [
  {
    number: "1.",
    prompt: "ready to meet the \ncommunity?",
    cta: "introduce yourself",
    ctaSuffix: "here!",
    href: "https://hackclub.enterprise.slack.com/archives/C0BLVTFNKGE",
    badgeClass: "-right-4 top-[58%]",
  },
  {
    number: "2.",
    prompt: "ready to make your \nfirst project?",
    cta: "find events happening",
    ctaSuffix: "here!",
    href: "https://athena.hackclub.com/programs",
    badgeClass: "-right-4 top-[24%]",
  },
];

export default function AuthCompletePage() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 md:px-12 md:py-32"
      style={{
        backgroundColor: "#FFF6E5",
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px), repeating-linear-gradient(to bottom, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px)",
      }}
    >
      {/* logo in top rightt */}
      <Image
        src="/images/athena-logo.png"
        alt="Athena"
        width={300}
        height={128}
        className="absolute top-0.5 right-1"
      />

      {/* flower doodles*/}
      <Image
        src="/images/flowerL.png"
        alt=""
        width={80}
        height={80}
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10"
      />
      <Image
        src="/images/flowerR.png"
        alt=""
        width={80}
        height={80}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10"
      />

      {/* bunny img in top left */}
      <Image
        src="/images/stiiioi.png"
        alt=""
        width={320}
        height={320}
        className="absolute top-6 left-5 md:top-10 md:left-8"
      />


      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
        <h1
          className="font-quattrocento font-bold text-athena-red3"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          thanks for signing up!
        </h1>

        <div className="relative">
          <p
            className="font-quattrocento leading-snug text-athena-accent"
            style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
          >
            welcome to the community!
          </p>
        </div>

        <p
          className="mt-4 font-quattrocento text-athena-maroon"
          style={{ fontSize: "clamp(24px, 2.5vw, 30px)" , fontStyle: "bold"}}
        >
          next steps:
        </p>

        <div className="mt-4 grid w-full grid-cols-1 gap-x-44 gap-y-16 md:grid-cols-2">
          {STEPS.map((step) => (
            <div key={step.number} className="relative px-6 py-10">
              <PaintFrame />
              <div className="relative flex flex-col items-center gap-3">
                <p
                  className="font-bold font-quattrocento text-athena-red3"
                  style={{ fontSize: "clamp(16px, 2vw, 19px)", whiteSpace: "pre-line" }}
                >
                  {step.number}
                  <br />
                  {step.prompt}
                </p>
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-quattrocento text-athena-red3"
                  style={{ fontSize: "clamp(16px, 2vw, 19px)" }}
                >
                  {step.cta}
                  <br />
                  <span className="underline decoration-solid decoration-2 underline-offset-4 transition-all duration-150 group-hover:decoration-wavy">
                    {step.ctaSuffix}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 