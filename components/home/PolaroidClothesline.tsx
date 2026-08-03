interface PolaroidPhoto {
  image: string;
  alt: string;
}

// To swap a photo, just replace its `image` URL below — sizing/cropping is
// handled automatically (background-size: cover, centered).
const PHOTOS: PolaroidPhoto[] = [
  { image: "https://cdn.hackclub.com/019fc87e-735e-7bd8-9ace-4eb3fc5f6c6c/dsc04074__1_.jpg", alt: "Athena community snapshot" },
  { image: "https://cdn.hackclub.com/019fc87e-7641-789d-bec7-05ed7cf14d33/dsc04077__1_.jpg", alt: "Athena community snapshot" },
  { image: "https://cdn.hackclub.com/019fc87e-788e-7ae4-95c7-7969abda4ca6/dsc04623__2_.jpg", alt: "Athena community snapshot" },
  { image: "https://cdn.hackclub.com/019fc87e-7b1d-7eaa-aedb-3d73cbfb2032/1f86f383-37da-4246-a59a-35af48e68e44.jpeg", alt: "Athena community snapshot" },
  { image: "https://cdn.hackclub.com/019fc87e-7da9-714d-8543-c036c3328940/img_2959.jpeg", alt: "Athena community snapshot" },
  { image: "https://cdn.hackclub.com/019fc87e-804d-7604-8cd5-573ffb0f1bc7/img-20260425-wa0238.jpg", alt: "Athena community snapshot" },
];

// Literal classes (not template strings) so Tailwind's static scanner can see them.
const FRAME_ROTATE_CLASSES = [
  "rotate-[-6deg]",
  "rotate-[5deg]",
  "rotate-[-4deg]",
  "rotate-[6deg]",
  "rotate-[-5deg]",
  "rotate-[4deg]",
];

const FRAME_HOVER_CLASSES =
  "transition-all duration-300 ease-out hover:z-20 hover:rotate-0 hover:-translate-y-1 hover:scale-[1.06] hover:shadow-[0px_10px_16px_0px_rgba(82,36,44,0.35)]";

function Clip() {
  return (
    <div
      className="relative z-10 w-3 rounded-[2px] bg-[#C69B62] shadow-sm sm:w-4 md:w-5"
      style={{ height: "var(--clip-h)" }}
    >
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#8C6239]" />
    </div>
  );
}

function Photo({ photo }: { photo: PolaroidPhoto }) {
  return (
    <div
      className="aspect-square w-full bg-athena-cream"
      style={{
        backgroundImage: `url(${photo.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default function PolaroidClothesline() {
  const n = PHOTOS.length;

  return (
    <div className="relative w-full overflow-hidden pt-4 pb-12 [--rope-h:48px] [--clip-h:20px] sm:[--rope-h:64px] sm:[--clip-h:24px] md:pt-6 md:pb-16 md:[--rope-h:80px] md:[--clip-h:28px]">
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 w-full"
        style={{ height: "var(--rope-h)" }}
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 8 Q 50 40 100 8"
          fill="none"
          stroke="#A9835B"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="0" cy="8" r="1.8" fill="#8C6239" />
        <circle cx="100" cy="8" r="1.8" fill="#8C6239" />
      </svg>

      <div className="relative flex items-start justify-between gap-3 px-4 sm:gap-6 sm:px-8 md:gap-10 md:px-12">
        {PHOTOS.map((photo, i) => {
          const t = n > 1 ? i / (n - 1) : 0.5;
          const coeff = Math.round((0.2 + 1.6 * t * (1 - t)) * 1000) / 1000;
          const rotateClass = FRAME_ROTATE_CLASSES[i % FRAME_ROTATE_CLASSES.length];

          return (
            <div
              key={i}
              style={{ transform: `translateY(calc(var(--rope-h) * ${coeff} - var(--clip-h)))` }}
              className="flex min-w-0 flex-1 max-w-[110px] flex-col items-center sm:max-w-[160px] md:max-w-[220px]"
            >
              <Clip />
              <div
                className={`${rotateClass} ${FRAME_HOVER_CLASSES} w-full border border-athena-maroon/70 bg-white p-1.5 pb-3 shadow-[0px_3px_0px_0px_rgba(82,36,44,0.35)] sm:p-2 sm:pb-4 md:p-3 md:pb-5`}
              >
                <Photo photo={photo} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
