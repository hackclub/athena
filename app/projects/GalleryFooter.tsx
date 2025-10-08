import Link from "next/link";
import { Heart } from 'lucide-react';

export default function GalleryFooter() {
  return (
    <div className="relative handwritten font-semibold text-white text-center text-lg justify-center items-center gap-4 z-10 w-screen pt-3 pb-6 bg-hc-primary-dull">
        <div>
          A project made by {" "}
          <Link 
            className='text-[#ecb64e] underline' 
            target="_blank" 
            href="https://kyraezikeuzor.com">
              Kyra
          </Link> from {" "}
          <Link 
            className='text-[#ecb64e] underline' 
            target="_blank" 
            href="https://hackclub.com">
              Hack Club
          </Link>.
        </div>
    </div>
  );
}