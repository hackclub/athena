export default function AthenaWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: "655 / 460" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/c2-graphic.png"
        alt="Athena"
        className="absolute left-0 top-0 h-auto w-full object-contain"
      />
      <p
        className="absolute text-left leading-tight font-quattrocento font-bold text-athena-red3"
        style={{
          left: "86%",
          top: "34%",
          width: "18%",
          transform: "translate(0, -50%)",
          fontSize: "clamp(14px, 3vw, 36px)",
        }}
      >
        Hack
        <br />
        Club&rsquo;s
      </p>
      <p
        className="absolute whitespace-nowrap text-center font-quattrocento font-bold text-athena-red4"
        style={{
          left: "81%",
          top: "90%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(13px, 2.4vw, 30px)",
        }}
      >
        by girls, for girls
      </p>
    </div>
  );
}
