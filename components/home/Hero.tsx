import EmailSignupForm from "./EmailSignupForm";
import AthenaWordmark from "./AthenaWordmark";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24"
      style={{
        backgroundColor: "#FFF6E5",
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px), repeating-linear-gradient(to bottom, rgba(255,221,206,0.9) 0 1px, transparent 1px 44px)",
      }}
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
          <AthenaWordmark className="max-w-[340px] md:max-w-[440px] lg:max-w-[520px]" />

          <div
            className="flex w-full max-w-[470px] flex-col items-center justify-center gap-3 rounded-lg border-2 border-athena-red2 bg-white p-5 text-center shadow-[0px_6px_0px_0px_rgba(127,23,43,0.15)]"
            style={{ aspectRatio: "612 / 374" }}
          >
            <span className="font-quattrocento text-athena-maroon2" style={{ fontSize: "clamp(20px, 3.4vw, 50px)" }}>
              video
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 text-center">
          <h1
            className="font-quattrocento leading-tight text-athena-red3"
            style={{ fontSize: "clamp(24px, 3.6vw, 44px)" }}
          >
            Become a <span className="font-bold">[blank]</span> with technical skills
          </h1>

          <EmailSignupForm buttonLabel="join the community" className="justify-center" />
          <p className="font-quattrocento text-athena-red3" style={{ fontSize: "clamp(14px, 1.6vw, 24px)" }}>
            sign up for ---, happening now
          </p>
        </div>
      </div>
    </section>
  );
}
