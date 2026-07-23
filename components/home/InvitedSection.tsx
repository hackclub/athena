import Image from "next/image";

export default function InvitedSection() {
  return (
    <section className="bg-gradient-to-b from-white to-athena-cream px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text font-quattrocento text-3xl font-bold text-transparent md:text-5xl">
          And you&rsquo;re invited!
        </h2>

        <a
          href="https://sunbeam.hackclub.com/"
          className="relative mx-auto mt-12 block w-full max-w-md transition-transform hover:scale-105"
        >
          <Image
            src="/images/surfboard.png"
            alt=""
            width={800}
            height={800}
            className="h-auto w-full"
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-center font-quattrocento text-xl font-semibold text-[#0E387A] md:text-2xl"
            style={{
              textShadow:
                "-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white",
            }}
          >
            Sign up to run your own Sunbeam!
          </div>
        </a>
      </div>
    </section>
  );
}
