export default function AthenaWordmark({
  className = "",
  variant = "dark",
  showTagline = true,
}: {
  className?: string;
  variant?: "dark" | "light";
  showTagline?: boolean;
}) {
  const secondaryTextClass = variant === "light" ? "text-athena-cream2" : "text-athena-red4";

  return (
    <div className={`flex w-full flex-col ${className}`}>
      <div className="w-full" style={{ aspectRatio: "2013 / 1371" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/new-athena-logo.png"
          alt="Athena"
          className="h-full w-full object-contain"
        />
      </div>
      {showTagline && (
        <p
          className={`-mt-1 pr-[2%] text-right font-quattrocento font-bold ${secondaryTextClass}`}
          style={{ fontSize: "clamp(13px, 2.4vw, 30px)" }}
        >
          by girls, for girls
        </p>
      )}
    </div>
  );
}
