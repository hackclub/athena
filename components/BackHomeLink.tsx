import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

// "<-" back to the homepage, top-left of an inner page. Phones only: on wider
// screens the navbar's Home link is always in view. Place it inside the page's
// `relative` wrapper so it sits in the space above the page title.
export default function BackHomeLink() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="absolute left-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-athena-red3 transition hover:bg-athena-red3/10 md:hidden"
    >
      <FaArrowLeftLong aria-hidden="true" />
    </Link>
  );
}
