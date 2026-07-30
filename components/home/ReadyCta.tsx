import Image from "next/image";
import EmailSignupForm from "./EmailSignupForm";

export default function ReadyCta() {
  return (
    <section className="relative z-20 overflow-visible bg-gradient-to-b from-white to-athena-cream px-6 pb-32 pt-6 text-center md:px-12 md:pb-44 md:pt-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        <h2 className="bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text font-quattrocento text-3xl font-bold text-transparent md:text-5xl">
          Ready?
        </h2>

        <EmailSignupForm buttonLabel="join!" className="justify-center" />

        <p className="font-quattrocento text-athena-maroon text-2xl">
          join 1600+ girls like you in the Athena community
        </p>
      </div>

      <Image
        src="/images/flower-and-grass.png"
        alt=""
        width={250}
        height={220}
        className="pointer-events-none absolute bottom-0 left-6 h-auto w-full max-w-[90px] translate-y-2 md:left-12 md:max-w-[130px]"
      />

      <Image
        src="/images/depressedbunny.png"
        alt=""
        width={980}
        height={824}
        className="pointer-events-none absolute bottom-0 right-6 h-auto w-full max-w-[240px] translate-y-1/4 md:right-12 md:max-w-[340px]"
      />
    </section>
  );
}
