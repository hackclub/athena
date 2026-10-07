const YELLOW_GRID =
  "linear-gradient(rgba(242,183,5,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(242,183,5,0.18) 1px, transparent 1px)";
const PINK_GRID =
  "linear-gradient(rgba(215,39,77,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(215,39,77,0.12) 1px, transparent 1px)";

export default function HackathonVideo() {
  return (
    <section className="relative bg-[#FFF6EA] px-4 pt-10 pb-16 md:px-8 md:pt-16 md:pb-24">
      {/* graph-paper grid on cream (both as behind "By joining Athena"): yellow lines (same as behind "By joining
          Athena") that blend into the partners band's pink lines over the
          bottom of this section. Anchored to the bottom edge so the 28px
          squares carry straight on into the band's grid below. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: YELLOW_GRID,
          backgroundSize: "28px 28px",
          backgroundPosition: "center bottom",
          maskImage: "linear-gradient(to bottom, transparent, black 40px, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 40px, black 60%, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: PINK_GRID,
          backgroundSize: "28px 28px",
          backgroundPosition: "center bottom",
          maskImage: "linear-gradient(to bottom, transparent 60%, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 60%, black)",
        }}
      />
      {/* centred and narrower than the full-width marquee above so the video isn't huge */}
      <div className="relative mx-auto flex max-w-5xl flex-col gap-6">
        <h2
          className="text-left font-quattrocento font-bold text-athena-red3"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          Parthenon, an all-girls high school hackathon in NYC in November 2025
        </h2>

        <div className="aspect-video w-full overflow-hidden rounded-xl border-2 border-athena-maroon2 bg-white shadow-[0px_6px_0px_0px_rgba(82,36,44,0.55)]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/7K_E7tG-O68?start=34"
            title="Parthenon, an all-girls high school hackathon in NYC"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
