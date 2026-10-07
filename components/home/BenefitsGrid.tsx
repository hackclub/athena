import Image from "next/image";

const row1 = [
  {
    title: "Go on adventures",
    body: "Get travel grants to attend Hack Club hackathons and go on the coolest adventures all around the world.",
    image: "/images/benefit-photos/benefit-travel.jpg",
  },
  {
    title: "Technical skills and prizes",
    body: "You’ll learn how to build projects like a website, game, hardware etc. and earn prizes like stickers and iPads.",
    image: "/images/benefit-photos/benefit-learn.jpg",
  },
  {
    title: "Make lifelong friendships",
    body: "We are a kind and curious community. On the journey of building projects, you’ll form lifelong friendships here!",
    image: "/images/benefit-photos/benefit-friends.jpg",
  },
];

const row2 = [
  {
    title: "Certificates and service hours",
    body: "Earn official certificates from Hack Club and our partners by completing our program requirements.",
    image: "/images/benefit-photos/benefit-certificate.jpg",
  },
  {
    title: "College and career prep",
    body: "You’ll develop the college and career necessary skills in this community. You can host an AMA, design posters, and many others to gain valuable skills in the real world.",
    image: "/images/benefit-photos/benefit-college.jpg",
  },
  {
    title: "Professional networking",
    body: "Meet women shaping the tech industry from SpaceX, Netflix, Microsoft, etc. through our AMA (Ask Me Anything) calls and at our in-person events.",
    image: "/images/benefit-photos/benefit-networks.jpg",
  },
];

const BENEFITS = [...row1, ...row2];

// Each margin column fills the space beside the max-w-4xl (56rem) boxes,
// minus a small gap, so the photos are as big as the room allows.
const MARGIN_WIDTH = "calc((100% - 56rem) / 2 - 2.25rem)";

// Photos scattered in the side margins on wide screens. 
const LEFT_SPOTS = [
  { top: "0%", left: "4%", width: "80%", rotate: "-7deg" },
  { top: "35%", left: "2%", width: "70%", rotate: "4deg" },
  { top: "66%", left: "10%", width: "76%", rotate: "-3deg" },
];
const RIGHT_SPOTS = [
  { top: "8%", left: "6%", width: "72%", rotate: "6deg" },
  { top: "39%", left: "16%", width: "80%", rotate: "-5deg" },
  { top: "72%", left: "4%", width: "76%", rotate: "3deg" },
];

type Spot = (typeof LEFT_SPOTS)[number];

function MarginPhoto({ src, spot }: { src: string; spot: Spot }) {
  return (
    <div
      className="absolute transition-transform duration-300 ease-out [backface-visibility:hidden] hover:z-10 hover:!rotate-0"
      style={{ top: spot.top, left: spot.left, width: spot.width, rotate: spot.rotate }}
    >
      <Image
        src={src}
        alt=""
        width={880}
        height={660}
        // pre-sized, lightly sharpened copies in /images/benefit-photos/
        // (880px, ~4x the display size) look crisper than the optimizer's
        // output once the photos are tilted, so they're served as-is
        unoptimized
        className="aspect-[4/3] w-full rounded-xl border-2 border-athena-maroon2 object-cover shadow-[0px_6px_0px_0px_rgba(82,36,44,0.55)]"
      />
    </div>
  );
}

function BenefitCard({ title, body, red }: { title: string; body: string; red: boolean }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl border-2 border-athena-maroon2 p-6 shadow-[0px_6px_0px_0px_rgba(82,36,44,0.55)] ${
        red ? "bg-athena-red2" : "bg-athena-cream"
      }`}
    >
      <h3
        className={`font-quattrocento font-bold leading-tight ${red ? "text-athena-cream2" : "text-athena-red3"}`}
        style={{ fontSize: "clamp(20px, 1.8vw, 28px)" }}
      >
        {title}
      </h3>
      <p
        className={`font-funnel leading-snug ${red ? "text-white" : "text-athena-maroon2"}`}
        style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
      >
        {body}
      </p>
    </div>
  );
}

export default function BenefitsGrid() {
  const left = BENEFITS.slice(0, 3);
  const right = BENEFITS.slice(3);

  return (
    <section
      className="relative overflow-hidden px-4 pt-8 pb-18 md:px-8 md:pt-12 md:pb-28"
      style={{ backgroundColor: "#FFF6EA" }}
    >
      {/* faint yellow graph-paper grid, faded in at the top so it melts out of
          the red band's cream wave. Anchored to the bottom edge so it lines
          up with the same grid carried on behind the pink scallops below. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(242,183,5,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(242,183,5,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "center bottom",
          maskImage: "linear-gradient(to bottom, transparent, black 10%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%)",
        }}
      />
      {/* photos scattered down the left and right margins (wide screens only,
          where there is room beside the cards) */}
      <div
        className="absolute bottom-24 left-8 top-20 hidden max-w-[320px] xl:block"
        style={{ width: MARGIN_WIDTH }}
      >
        {left.map((b, i) => (
          <MarginPhoto key={b.image} src={b.image} spot={LEFT_SPOTS[i]} />
        ))}
      </div>
      <div
        className="absolute bottom-24 right-3 top-20 hidden max-w-[320px] xl:block"
        style={{ width: MARGIN_WIDTH }}
      >
        {right.map((b, i) => (
          <MarginPhoto key={b.image} src={b.image} spot={RIGHT_SPOTS[i]} />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl">
        <h2
          className="text-left font-quattrocento font-bold text-athena-red2"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          By joining Athena, you...
        </h2>

        {/* pink and red boxes alternate like a checkerboard */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {BENEFITS.map((card, i) => (
            <BenefitCard
              key={card.title}
              title={card.title}
              body={card.body}
              red={Math.floor(i / 2) % 2 === 0 ? i % 2 === 0 : i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
