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
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <h1
          className="font-quattrocento font-bold text-athena-red3"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          thanks for signing up!
        </h1>

        <p
          className="font-quattrocento text-athena-maroon2"
          style={{ fontSize: "clamp(18px, 2.4vw, 24px)" }}
        >
         ready to meet the community? introduce yourself{" "}
          <a
            href="https://hackclub.enterprise.slack.com/archives/C0BLVTFNKGE"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-4 hover:brightness-110"
          >
            here!
          </a>
          .
        </p>
      </div>
    </section>
  );
}
