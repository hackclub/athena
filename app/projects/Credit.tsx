import Link from "next/link";

export default function Credit() {
  return (
    <div className="font-medium opacity-90 text-right text-lg justify-center items-center gap-4 z-10 pt-12 ">
        <div>
          Made by {" "}
          <Link 
            className='text-red underline' 
            target="_blank" 
            href="https://kyraezikeuzor.com">
              Kyra
          </Link> from {" "}
          <Link 
            className='text-red underline' 
            target="_blank" 
            href="https://hackclub.com">
              Hack Club
          </Link>.
        </div>
    </div>
  );
}