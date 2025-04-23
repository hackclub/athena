'use client'
import { Sign } from "crypto"
import Image from "next/image"
import Link from "next/link"
import { Tooltip } from 'react-tooltip'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

async function handleEmailSubmit(event: FormEvent<HTMLFormElement>, router: any){
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const email = String(formData.get("email"))
  router.push(`https://athena.hackclub.com/awards?email=${email}`) // update this url to actual link
  
  }


const SignUp = ({className, buttonClicked, setButtonClicked, router}: {className?: string, buttonClicked: boolean, setButtonClicked: (value: any) => void, router: any}) => {
  return (
    <div className = {`flex flex-row gap-4 pt-10 ${className}`}>
      { buttonClicked 
        ? <form onSubmit={(e) => handleEmailSubmit(e, router)} className = "w-max border border-white/30 text-black bg-white rounded-lg p-4 uppercase flex gap-4 text-xl md:text-2xl decoration-transparent ">
          <input placeholder="orpheus@mail.com" required type="text" name="email" id="email"/>
          <input type = "submit" value = "Submit" className = "text-[#8C2E37] uppercase font-bold"/>
        </form>
        : 
        <button className = "w-max border border-white/30 bg-[#8C2E37] rounded-lg p-4 uppercase text-white block text-xl md:text-2xl hover:-rotate-[4deg] hover:scale-110 font-bold decoration-transparent transition-all hover:decoration-white" onClick={() => setButtonClicked(true)}>start</button>
      }
    
    <Link href="https://forms.hackclub.com/athena-awards-stickers" className="w-max border border-white/30 bg-[#DDA14A] rounded-lg p-4 uppercase text-white block text-xl md:text-2xl hover:-rotate-[4deg] hover:scale-110 font-bold decoration-transparent transition-all hover:decoration-white">Free stickers</Link>
    </div>

  )
}
export default function AthenaAwardsCard(){
  const [ buttonClicked, setButtonClicked ] = useState(false);
  const router = useRouter()
    return (
    <>
        <div className="col-span-full md:col-span-full w-full h-max lg:h-[110vh] relative rounded-b-lg p-12 lg:px-32 lg:pt-32 lg:pb-0 bg-gradient-to-b from-[#8C2E37] from-0%  via-[#8C2E37]/80 via-60% to-[#993E47]/0 overflow-hidden transition">
            
            <div className="relative z-20 h-full">
              <div className="text-6xl md:text-8xl font-bold text-white mb-3 z-20">The Athena Award</div>

              <div className = "flex flex-row gap-4">
              <Image alt="Athena Awards Event" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/bdc8c09039207e203df13effe406e2d289e24a13_image.png" className="md:max-h-[13vh] object-cover w-auto" width={1121} height={390} />
              <Image alt="MIT Logo" src="https://brand.mit.edu/sites/default/files/styles/image_text_2x/public/2023-08/MIT-logo-red-textandimage.png?itok=RNoAwZvy" className="md:max-h-[13vh] object-cover w-auto" width={1121} height={390} />
              <Image alt="GitHub Logo" src="https://pngimg.com/d/github_PNG23.png" className="md:max-h-[13vh] object-cover w-auto" width={1121} height={390} />

              </div>
              <div className="text-white text-2xl md:w-2/3 py-4">
              
              <Tooltip id="info" className = "max-w-96"/>
                <ul className = "list-inside list-decimal">
                  <li>Girl? Code projects, earn prizes - including Framework 12 laptops and iPads.</li>
                  <li>Earn the{' '}
                    <b data-tooltip-id="info" data-tooltip-content="The Athena Award is a certification of technical excellence from Hack Club, MIT, and GitHub. We believe that Athena Award recipients will be in the top 5% of technical young women ages 13-18 worldwide.">Athena Award </b> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                     </svg>
                  from Hack Club, MIT, and GitHub when you hit 30 hours.
                  </li>
                 <li>Every recipient is invited to the 2025 end of year hackathon in <b>New York City.</b> Top 70 get travel stipends!</li>
                </ul>
              </div>

              <SignUp buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} router={router}/>
              <span className = "text-2xl text-white my-4">For girls and nonbinary students ages 18 and under. Closes December 31st 2025.</span>


              <h1 className = "pt-10 relative text-2xl md:text-4xl font-bold text-[#F34B5C]">You&apos;re invited to the best ever hackathon.</h1>

            </div>
            <Image alt="Athena Awards Assets" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/559ad7ea83bf62dac0eccb386a99861819ff9725_demo_logo.svg" className="h-[70%] w-auto absolute z-0 -top-[4vh] -right-[4vh] opacity-25 lg:opacity-80" height={800} width={800}></Image>
            </div>

          <div>

            <div className="p-12 lg:pt-4 lg:p-32 pt-0 flex flex-col gap-4">
            <p className = "text-lg md:text-2xl">Be one of  <b className = "text-red">100 female and nonbinary hackers</b> who attend our end of year <b className = "text-red">high school hackathon</b> in <b className = "text-red">New York City</b> by completing the Athena Awards.</p>
            <p className = "text-lg md:text-2xl">All you need to do to accept your invite is code <b className = "text-red">three technical projects in 30 hours</b>.</p>
            <p className = "text-lg md:text-2xl">One of the <b className = "text-red">top 70 coders</b> who complete the program? We&apos;ll also grant you a <b className = "text-red">travel stipend</b> to cover your travel to NYC.</p>
            <h1 className = "py-3 text-2xl md:text-4xl font-bold">Can&apos;t join us in New York City?</h1>
            <p className = "text-lg md:text-2xl">No problem — every hour you code during the Athena Awards will earn you our currency, <b className = "text-red">artifacts</b>. Redeem your artifacts for incredible prizes.</p>
            </div>


        <div className = "px-12 pb-12 lg:px-32 lg:pb-32">
            <div className = "flex flex-row flex-wrap *:lg:basis-1/3 *:basis-full">
              <div className = "text-center hidden lg:inline">
              <svg viewBox="0 0 202 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="85%" height="85%" fill="white"/>
                <image className="bg-cover" x="10" y="10" width="85%" height="85%" xlinkHref="https://hc-cdn.hel1.your-objectstorage.com/s/v3/3380a2b1bfe0bc53f4f0e325e157022595387fca_image.png"></image>
                <path fillRule="evenodd" clipRule="evenodd" d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z" fill="#F4BF4F"/>
                </svg>
                <div className = "text-center p-2 bg-[#ebb33d] text-black tracking-wide">Wacom Drawing Tablet</div>

                <svg viewBox="0 0 202 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="85%" height="85%" fill="white"/>
                  <image className="bg-cover" x="10" y="10" width="85%" height="85%" xlinkHref="https://hc-cdn.hel1.your-objectstorage.com/s/v3/111b2401af60e04060a8ffd51c61f4be5de41f86_image.png"></image>
                  <path fillRule="evenodd" clipRule="evenodd" d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z" fill="#F4BF4F"/>
                </svg>
                <div className = "text-center p-2 bg-[#ebb33d] text-black tracking-wide">Nothing Earbuds (Ear (a))</div>
              </div>

              <div className = "text-center flex flex-col">
                <span>
                  <h1 className = "text-5xl text-red font-bold">Prizes</h1>
                  <p className = "text-2xl">Build awesome shit. Win awesome prizes.</p>
                </span>
                <svg className = "self-end" viewBox="0 0 672 774" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="70%" height="70%" fill="white"/>
                    <image className="bg-cover" x="40" y="20" width="90%" height="87%" xlinkHref="https://hc-cdn.hel1.your-objectstorage.com/s/v3/5435315191718994f75eb7fbe1e10a8df0b6f720_image.png"></image>
                    <path fillRule="evenodd" clipRule="evenodd" d="M54 724.543L18.2477 773.687L0.0244268 744L18.2476 691.367L30.5 373L43.2075 93.0696L27.8028 31.2608L68.1375 0.0296471L102.375 19.9577L319.05 21.8007L406.183 21.8008L608 19.9576L639.907 9.48962L670.407 31.2608L670.407 51.9296L658 424.501L650 679.5L671.5 708.74L658 752L624.5 767L595 735.001L414 735.001L343.5 735.001L54 724.543ZM66.6112 418.542L70.3935 687.5L276.378 691.367L597.129 687.5L620.5 52.8447L301.058 47.2869L88.3237 42.1003L70.3935 59.7818L66.6112 418.542Z" fill="url(#paint0_radial_480_189)"/>
                    <defs>
                    <radialGradient id="paint0_radial_480_189" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(343 339.5) rotate(94.2423) scale(533.963 635.385)">
                    <stop offset="0.653846" stopColor="#F4BF4F"/>
                    <stop offset="1" stopColor="#EC3750"/>
                    </radialGradient>
                    </defs>
                    </svg>
                    <div className = "lg:inline p-2 bg-[#ebb33d] text-black tracking-wide">Framework 12 Laptop</div>
                    <p className = "py-3 mt-auto text-2xl">... all these and more!</p>
                </div>
              <div className = "hidden lg:inline">
              <svg viewBox="0 0 202 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="85%" height="85%" fill="white"/>
                <image className="bg-cover" x="10" y="10" width="85%" height="85%" xlinkHref="https://placehold.co/800x600"></image>
                <path fillRule="evenodd" clipRule="evenodd" d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z" fill="#F4BF4F"/>
                </svg>
                <div className = "text-center p-2 bg-[#ebb33d] text-black tracking-wide">Athena Hoodie</div>

                <svg viewBox="0 0 202 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="85%" height="85%" fill="white"/>
                  <image className="bg-cover" x="10" y="10" width="85%" height="85%" xlinkHref="https://placehold.co/800x600"></image>
                  <path fillRule="evenodd" clipRule="evenodd" d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z" fill="#F4BF4F"/>
                </svg>
                <div className = "text-center p-2 bg-[#ebb33d] text-black tracking-wide">placeholder</div>
              </div> 
            </div>
            <SignUp buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} router={router} className = "items-center justify-center *:border-black"/>
          </div>
        </div>
    </>
    )
}