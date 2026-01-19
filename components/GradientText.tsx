export default function GradientText({
  children,
  gradient,
  strokeWidth = "4px",
  className = "",
}: {
  children: React.ReactNode;
  gradient: string;
  strokeWidth?: string;
  className?: string;
}) {
  return (
    <span
      className={`relative font-bold inline-block ${className}`}
      style={{ fontFamily: "'MADE Tommy Soft', sans-serif" }}
    >
      {/* White stroke layer behind - with slight blur to soften joins */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "#FFFFFF",
          WebkitTextStroke: strokeWidth,
          filter:
            "drop-shadow(0px 1px 0px #C6C7E4) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)) blur(0.3px)",
        }}
      >
        {children}
      </span>
      {/* Gradient text on top */}
      <span
        style={{
          position: "relative",
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {children}
      </span>
    </span>
  );
}
