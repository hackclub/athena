const row1 = [
  {
    title: "Travel & adventure",
    body: "Get travel grants to attend Hack Club hackathons and go on the coolest adventures all around the world.",
    image: "/images/benefit-travel.png",
    basis: "27%",
  },
  {
    title: "Learn technical skills",
    body: "No matter where you’re starting, we have a community for you. You’ll learn how to make your first website to even how to launch a rocket- and while you make things, you earn prizes like a laptop, iPad, digital camera, Steam grants, etc.",
    image: "/images/benefit-learn.png",
    basis: "42%",
  },
  {
    title: "Meet friends & earn prizes",
    body: "Hack Clubbers are not only technical but also extremely kind and curious. On the journey of making, you’ll form friendships that live beyond your journey with us.",
    image: "/images/benefit-friends.png",
    basis: "30%",
  },
];

const row2 = [
  {
    title: "Gain access to professional networks",
    body: "Regularly meet industry professional women shaping the industry from GitHub, Netflix, Microsoft, etc. through our AMA (ask me anything) sessions and at our in-person events.",
    image: "/images/benefit-networks.png",
    basis: "35%",
  },
  {
    title: "College and career development",
    body: "You’ll develop the college and career necessary skills in this community. You can learn to host an AMA, design posters in Figma, and contribute to the community, helping improve your skills valued in the real world.",
    image: "/images/benefit-college.jpg",
    basis: "39%",
  },
  {
    title: "Certificates and service hours",
    body: "Earn official certificates from Hack Club and our partners by completing our program requirements.",
    image: "/images/benefit-certificate.jpg",
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
      className="relative flex min-h-[260px] flex-col items-start gap-1 rounded-[17px] border-[3px] border-[#fca5a5] p-4 md:h-full"
      style={{
        flexBasis: basis,
        flexGrow: 1,
        backgroundImage: `linear-gradient(180deg, rgba(215,39,77,0.62) 0%, rgba(30,10,14,0.55) 100%), url(${image})`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center 75%",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <h3
        className="relative font-quattrocento font-bold text-athena-cream2"
        style={{ fontSize: "clamp(18px, 1.9vw, 36px)", textShadow: "0 1px 3px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.6)" }}
      >
        {title}
      </h3>
      <p
        className="relative font-funnel text-white"
        style={{ fontSize: "clamp(13px, 1.2vw, 23px)", textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.6)" }}
      >
        {body}
      </p>
    </div>
  );
}

export default function BenefitsGrid() {
  return (
    <section
      className="px-4 py-8 md:px-8 md:py-10"
      style={{ backgroundColor: "#FFF6EA" }}
    >
      <div className="mx-auto max-w-[1440px]">
        <h2
          className="text-center font-quattrocento font-bold text-athena-red2"
          style={{ fontSize: "clamp(26px, 3.6vw, 46px)" }}
        >
          By joining Athena, you...
        </h2>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:h-[340px] md:flex-row">
            {row1.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
          <div className="flex flex-col gap-3 md:h-[340px] md:flex-row">
            {row2.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
