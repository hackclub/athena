"use client";
import { FormEvent, useState } from "react";

export default function EmailSignupForm({
  buttonLabel,
  className = "",
}: {
  buttonLabel: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a real mailing-list signup once one exists
    console.log("Athena signup (stub):", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-2xl flex-col gap-3 sm:flex-row ${className}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="w-full flex-1 rounded-full border border-athena-accent/75 bg-white px-6 py-3 font-quattrocento text-athena-accent/70 shadow-[0px_4px_0px_0px_rgba(215,39,77,0.25)] placeholder:text-athena-accent/50 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full border border-athena-maroon2 bg-athena-red2 px-8 py-3 font-quattrocento font-bold text-athena-cream shadow-[0px_4px_0px_0px_#52242C] transition hover:brightness-105"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
