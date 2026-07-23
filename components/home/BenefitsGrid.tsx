const row1 = [
  {
    title: "Travel & adventure",
    body: "Get travel grants to fly to Hack Club events around the globe - and go on some of the coolest adventures of your life.",
    image: "/images/benefit-travel.png",
    basis: "27%",
  },
  {
    title: "Learn technical skills",
    body: "No coding experience? No problem. You'll learn to build real websites, apps, games etc.",
    image: "/images/benefit-learn.png",
    basis: "42%",
  },
  {
    title: "Meet friends & earn prizes",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/images/benefit-friends.png",
    basis: "30%",
  },
];

const row2 = [
  {
    title: "Gain access to professional networks",
    body: "Meet women in industry from",
    image: "/images/benefit-networks.png",
    basis: "35%",
  },
  {
    title: "College and career development",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/images/benefit-college.png",
    basis: "39%",
  },
  {
    title: "Certificates and service hours",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/images/benefit-college.png",
    basis: "26%",
  },
];

function BenefitCard({
  title,
  body,
  image,
  basis,
}: {
  title: string;
  body: string;
  image: string;
  basis: string;
}) {
  return (
    <div
      className="relative flex min-h-[150px] flex-col items-start gap-1 rounded-[17px] border-[3px] border-[#fca5a5] p-4"
      style={{
        flexBasis: basis,
        flexGrow: 1,
        backgroundImage: `linear-gradient(180deg, #D7274D 0%, rgba(176,132,140,0.28) 100%), url(${image})`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <h3
        className="relative font-quattrocento font-bold text-athena-cream2"
        style={{ fontSize: "clamp(18px, 1.9vw, 36px)" }}
      >
        {title}
      </h3>
      <p className="relative font-funnel text-white" style={{ fontSize: "clamp(13px, 1.2vw, 23px)" }}>
        {body}
      </p>
    </div>
  );
}

export default function BenefitsGrid() {
  return (
    <section
      className="px-4 py-8 md:px-8 md:py-10"
      style={{
        backgroundImage: "linear-gradient(126deg, #FFF6EA 0.5%, #FFFFFF 106%)",
      }}
    >
      <div className="mx-auto max-w-[1440px]">
        <h2
          className="text-center font-quattrocento font-bold text-athena-red2"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          By joining Athena, you...
        </h2>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            {row1.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            {row2.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
