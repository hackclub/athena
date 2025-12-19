import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#D9DAF8] relative">
      <div 
        className="absolute inset-0 bg-[url('/assets/bunny-tile.png')] bg-repeat bg-[length:200px] opacity-50 pointer-events-none z-0"
        style={{
          backgroundPosition: "0 0, 100px 100px",
        }}
      />
      {/* Banner at top */}
      <div className="w-full relative z-10 mb-8 md:mb-12">
        <Image 
          src="/assets/top-banner.png" 
          alt="Sleepover Banner" 
          width={1280} 
          height={200}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-start pl-6 md:pl-14">
          <div className="relative">
            <p 
              className="text-[20px] md:text-[30px] font-bold leading-[30px] md:leading-[50px] text-center"
              style={{
                fontFamily: "'MADE Tommy Soft', sans-serif",
                background: "linear-gradient(357.47deg, #282A5A -128.92%, #2E3367 -26.66%, #38417B 130.45%, #424F90 389.82%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              hack club&apos;s athena initative presents:
            </p>
            <p 
              className="absolute top-0 left-0 text-[20px] md:text-[30px] font-bold leading-[30px] md:leading-[50px] text-center text-white"
              style={{
                fontFamily: "'MADE Tommy Soft Outline', sans-serif",
              }}
            >
              hack club&apos;s athena initative presents:
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 py-2 relative z-10 -mt-4">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center justify-start w-full gap-4 mb-8">
          <Image 
            src="/assets/sleepover_logo.PNG" 
            alt="Sleepover Logo" 
            width={800} 
            height={650}
            className="w-auto h-auto max-w-[500px] md:max-w-[600px] ml-4 md:ml-40"
          />
 
        </div>

        {/* Email Signup */}
        <div className="flex items-center justify-center gap-4 -mt-10 mb-8">
          <input 
            type="email" 
            placeholder="enter your email..." 
            className="w-[300px] md:w-[499px] h-[50px] md:h-[65px] rounded-[20px] text-[18px] md:text-[24px] font-bold text-left pl-6 text-[#BBC8ED] placeholder-[#BBC8ED] focus:outline-none"
            style={{
              fontFamily: "'MADE Tommy Soft', sans-serif",
              background: "#FFFCF6",
              border: "3px solid #FFFFFF",
              boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.25), inset 0px 6px 10px 2px rgba(0, 0, 0, 0.25)",
            }}
          />
          {/* GO Button - 3 layered rectangles */}
          <button className="relative w-[80px] md:w-[103px] h-[60px] md:h-[76px]">
            {/* Layer 1 - White background */}
            <div 
              className="absolute inset-0 rounded-[20px]"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
              }}
            />
            {/* Layer 2 - Purple-pink gradient */}
            <div 
              className="absolute rounded-[20px]"
              style={{
                top: "2px",
                left: "2px",
                right: "3px",
                bottom: "3px",
                background: "linear-gradient(0deg, #7472A0 17.31%, #DFA1AA 100%)",
                backdropFilter: "blur(2px)",
              }}
            />
            {/* Layer 3 - Inner pink gradient */}
            <div 
              className="absolute rounded-[20px] flex items-center justify-center"
              style={{
                top: "6px",
                left: "6px",
                right: "6px",
                bottom: "10px",
                background: "linear-gradient(0.68deg, #DFA2AD 0.59%, #AD8FB5 95.89%)",
                boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <span 
                className="text-white text-[20px] md:text-[28px] font-bold"
                style={{
                  fontFamily: "'MADE Tommy Soft', sans-serif",
                  textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                GO!!
              </span>
            </div>
          </button>
        </div>

        {/* Program description */}
        <p 
          className="text-[24px] md:text-[40px] font-bold leading-[30px] md:leading-[50px] text-center text-[#6C6EA0]"
          style={{
            fontFamily: "'MADE Tommy Soft', sans-serif",
            WebkitTextStroke: "5px #FFFFFF",
            paintOrder: "stroke fill",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          a program for girls and non-binary teens to:
        </p>

        {/* Center Images Collage */}
        <div className="w-full max-w-[900px] mt-8 mx-auto">
          <Image
            src="/assets/collage.png"
            alt="Sleepover Collage"
            width={1229}
            height={894}
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
}
