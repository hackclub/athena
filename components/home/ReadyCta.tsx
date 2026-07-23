import Image from "next/image";
import EmailSignupForm from "./EmailSignupForm";

export default function ReadyCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-athena-cream to-white px-6 pb-10 pt-20 text-center md:px-12 md:pt-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="bg-gradient-to-r from-athena-red4 to-athena-red3 bg-clip-text font-quattrocento text-3xl font-bold text-transparent md:text-5xl">
          Ready?
        </h2>

        <EmailSignupForm buttonLabel="join!" className="justify-center" />

        <p className="font-quattrocento text-athena-maroon text-2xl">
          join 1600+ girls like you in the Athena community
        </p>
      </div>

      <Image
        src="/images/bunny-illustration.png"
        alt=""
        width={1920}
        height={1200}
        className="pointer-events-none relative mx-auto mt-4 h-auto w-full max-w-md md:max-w-lg"
      />
    </section>
  );
}
