'use client'
import Image from "next/image"
import Link from "next/link"
import { Tooltip } from 'react-tooltip'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { useSearchParams } from "next/navigation"

async function handleEmailSubmit(event: FormEvent<HTMLFormElement>, router: any, utm_source: string){
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const email = String(formData.get("email")).replace("+", "%2b")
  router.push(`https://athena.hackclub.com/awards?email=${email}&utm_source=${utm_source}`) // update this url to actual link
  
  }


const SignUp = ({className, buttonClicked, setButtonClicked, router, utm_source}: {className?: string, buttonClicked: boolean, setButtonClicked: (value: any) => void, router: any, utm_source: string}) => {
  return (
    <div className = {`flex flex-row flex-wrap gap-4 mt-10 ${className && className}`}>
       { buttonClicked 
        ? <form onSubmit={(e) => handleEmailSubmit(e, router, utm_source)} className = "w-max border border-white/30 text-black bg-white rounded-lg p-4 uppercase flex gap-4 text-xl md:text-2xl decoration-transparent ">
          <input className="outline-none" placeholder="orpheus@mail.com" required type="email" name="email" id="email"/>
          <input type = "submit" value = "Submit" className = "text-[#8C2E37] uppercase font-bold"/>
        </form>
        : 
        <button className = "w-max border border-white/30 bg-[#8C2E37] rounded-lg p-4 uppercase text-white block text-xl md:text-2xl hover:-rotate-[4deg] hover:scale-110 font-bold decoration-transparent transition-all hover:decoration-white" onClick={() => setButtonClicked(true)}>start</button>
      }
    
    <Link href="https://forms.hackclub.com/athena-award-stickers" className="w-max border border-white/30 bg-[#DDA14A] rounded-lg p-4 uppercase text-white block text-xl md:text-2xl hover:-rotate-[4deg] hover:scale-110 font-bold decoration-transparent transition-all hover:decoration-white">Free stickers + RSVP</Link>
    </div>

  )
}
export default function AthenaAwardsCard(){
  const searchParams = useSearchParams()
  const utm_source = searchParams.get('utm_source')

  const [ buttonClicked, setButtonClicked ] = useState(false);
  const router = useRouter()
    return (
    <>
        <div className="col-span-full md:col-span-full w-full h-max relative rounded-b-lg p-12 lg:px-32 lg:pt-32 lg:pb-0 bg-gradient-to-b from-[#D35648] from-0%  via-[#D35648]/80 via-60% to-[#993E47]/0 overflow-hidden transition">
            <div className="relative z-20 h-full">
              {/* <div className="text-6xl md:text-8xl font-bold text-white mb-3 z-20">The Athena Award</div> */}
              <img className="w-full md:w-3/5" src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6338dbbd7a0200f2b9f2f5b7b59834511c45cc58_athena_award_1000x1000-cropped.svg"/>
              <div className="text-white text-2xl md:w-2/3 py-4">
              
              <Tooltip id="info" className = "max-w-96"/>
                <ul className = "list-inside list-decimal text-lg md:text-2xl">
                  <li>Earn Hack Club&apos;s Athena Award, an industry recognized technical certificate.</li>
                  <li>Travel to New York City for 2025&apos;s largest high school hackathon for girls!</li>
                  <li>Win prizes as you code, including laptops, iPads, Flipper Zeros, headphones and hoodies.</li>
                </ul>
              </div>

              <SignUp buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} router={router} utm_source ={utm_source!} className="mb-10"/>
              <span className = "text-2xl text-[#D35648] my-4">Happening now. You&apos;re invited to join a community of creators, built by girls, for girls. In collaboration with:</span>

            </div>
            <Image alt="Athena Awards Assets" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/bee04c282d692e6134762edd5a860546454d0629_demo_logo.svg" className="animate-wiggle w-auto absolute z-0 -top-[4vh] right-0 md:right-[4vh] opacity-25 lg:opacity-80" height={800} width={800}></Image>
            </div>
          <div>
          <div className = "py-6">
            <div className="p-12 lg:pt-4 lg:p-32 pt-0 flex flex-col gap-4">
              <div className = "flex flex-row flex-wrap gap-4 sm:justify-between *:max-h-[4vh] *:md:max-h-[8vh] *:object-cover *:w-auto">
                <Image alt="Girls Who Code" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b665896a3d2052c8e9a56755f9aab6bf49a576d3_gwc_final-logo_black.png" width={2021} height={390} />
                <Image alt="MIT School of Engineering Logo" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fcb35244b5ecccc9dd17efc2fab64994788efa55_mit_soe.png" width={1121} height={390} />
                <Image alt="GitHub Logo" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/5c6f29f2226f6bb46c0085cf7c9c40eac35099bb_github_logo.png" width={1121} height={390} />
                <Image alt="First Robotics Logo" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/c62d8ebaffc63403ab0d8a3d64954e3fcf2b4483_first_vertical_rgb.png" width={1121} height={390} />
                <Image alt="Congressional App Challenge" src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/0e51a14a2e4e9bbb74952d7765983c47e5873c3e_image.png" width={1121} height={390} />
                <Image alt = "Girl Scouts of Greater New York" width={1121} height={390} src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/cc00ddd41af16e89cb908cd35d4933b5d8770242_girlscoutsnyc-green.png"/>
                <Image alt = "The Knowledge House" width={1121} height={390} src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b873c50405c464861cd44f8677fa1fc5a2fa4421_tkh_horizontal_purple_logo.png"/>
                <Image alt = "Black Girls Code" width={1121} height={390}  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/3856089f0606f05c0606b9918322fc5b736098e6_bgc_orange_logo.png"/>
                <Image alt = "Code.org" width={1121} height={390} src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/3167e98697dc80a930ae15e6079993b883110882_cs4all_fin_cs_codelogo_black_whiteletters.png"/>
                <Image alt = "Être" width={1121} height={390} src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/1c899c2d35b31a161552c8526b8bb00154b0aefa_etre_new_gradient_logo__1___1_.jpg"/>
                <Image alt = "Launchpad Philly" width={1121} height={390} src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/42a735d8d938c5d1ed5369e51d78a6f288b910e8_03-more-transp-launchpad-logo-less-padding-copy-4.png"/>

              </div>

            <h1 className = "pt-10 relative text-2xl md:text-4xl font-bold text-[#D35648]">How it works - Code three technical projects by Oct 31st</h1>
            <p className = "text-lg md:text-2xl">Build three of your own projects, or follow one of Hack Club&apos;s tutorials to get started.</p>
            <p className = "text-lg md:text-2xl">Code for thirty hours and open source your finished projects.</p>

            <p className = "text-lg md:text-2xl">Meet other girls in the online community. Ask questions. Get technical support in online meetups and chats. Hack Clubbers will help you finish and deploy your projects.</p>

            <p className = "text-lg md:text-2xl text-[#D35648] font-bold">Earn the Athena Award to share on your LinkedIn, college applications, or elsewhere.</p>           
                        <div>
              <h1 className = "py-10 relative text-2xl md:text-4xl font-bold text-[#D35648]">Here&apos;s what you can expect:</h1>
              <div className = "grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className = "flex p-6 flex-col md:flex-row gap-4 border items-center rounded-lg">
                  <div className = "basis-1/4">
                    <img className = "h-36 object-cover" src = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/098d21987b059784caa0a9019d4e88590d9eb771_image.png"/>
                    <p>Sarah N</p>
                    <p>16, California</p>
                    <p><a className = "text-[#D35648] underline hover:decoration-wavy" href = "https://github.com/idksarah">@idksarah</a></p>

                  </div>
                  <div className = "basis-1/4 grow text-xl">
                    <p>Hihi!! I&apos;m Sarah and I&apos;m a 16 year old based in California. I first found Hack Club through <a className = "text-[#D35648] underline hover:decoration-wavy" target = "_blank" href = "https://hackclub.com/arcade">Arcade</a>, a coding summer event which I participated in partially because of the allure of free stickers.</p>
                    <br/>
                    <p>Since then, I&apos;ve been helping organize various <a className = "text-[#D35648] underline hover:decoration-wavy" target = "_blank" href = "https://ysws.hackclub.com">You-Ship-We-Ship</a> and <a className = "text-[#D35648] underline hover:decoration-wavy" target = "_blank" href = "/events">Days-of-Service</a> programs as an artist and developer, + found some of my favorite people through awesome hackathons in LA, Shanghai, and even online. So excited to see you all in an even cooler hackathon in NYC :3</p></div>
                </div> 
                <iframe className = "w-full" height="415" src="https://www.youtube.com/embed/NsK5vUG9_Tw?si=GZj3D-8ke0lpkol5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>

            <h1 className = "pt-10 relative text-2xl md:text-4xl font-bold text-[#D35648]">You&apos;re invited to the best ever hackathon.</h1>
            <style>{`
                @import url(https://fonts.googleapis.com/css2?family=Gaegu&display=swap);
                .handwritten { 
                    font-family: "Gaegu", sans-serif;
                }`}
              </style>
            <div className = "*:text-lg *:md:text-2xl handwritten p-8 border border-black -rotate-1 my-4 *:py-2">

              <p>Hack Club wants you to make things. Cool engineering things. Things you love to make.</p>
              
              <p>If you code and deploy three technical projects and spend 30 hours of coding by Oct 31st, Hack Club will issue you the <b className = "text-[#D35648]">Athena Award certification.</b></p>
              
              <p>This is an exclusive badge for your website/LinkedIn/GitHub that is recognized by colleges like MIT and employers like SpaceX.</p>

              <p>It certifies you have achieved an impressive technical milestone.</p>

              <p>You will also instantly qualify to join Hack Club&apos;s NYC hackathon - the nation&apos;s largest all-girl hackathon - running from November 14th-November 16th. 250 girls can attend this 36 hour event, and we&apos;ll issue nearly 100 travel stipends.</p>
              
              <p>Win prizes, enjoy free food, play games and meet cool female tech CEOs!</p>
              
              <p>Deploying 3 technical projects is not easy. So along your journey, you&apos;ll earn &quot;artifacts&quot; to redeem for prizes. Hack Club is ready to give away $100k in prizes for the Athena Award - check out a few below. Get started - the Athena Award is competitive and hard, but also fun and packed with friends. There is no limit to the # of winners. We are here to support you.</p>
              
              <p className = "font-bold">- Christina Asquith, Hack Club Cofounder</p>
            </div>   
            
            <h1 className = "py-3 text-2xl md:text-4xl font-bold">Earn incredible prizes for each project you ship!</h1>
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
                  <h1 className = "text-5xl text-[#D35648] font-bold">Prizes</h1>
                  <p className = "text-2xl">Build awesome projects. Win awesome prizes.</p>
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
                <image className="bg-cover" x="10" y="10" width="85%" height="85%" xlinkHref="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b8f350870db2b2488bc656a06ee7d27e2c4daf94_merch.png"></image>
                <path fillRule="evenodd" clipRule="evenodd" d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z" fill="#F4BF4F"/>
                </svg>
                <div className = "text-center p-2 bg-[#ebb33d] text-black tracking-wide">Athena Hoodie</div>

                <svg viewBox="0 0 202 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="85%" height="85%" fill="white"/>
                  <image className="bg-cover" x="10" y="10" width="85%" height="85%" xlinkHref="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a0b17ff3c19af8ca34c8df29522b409f4c1b87d5_image.png"></image>
                  <path fillRule="evenodd" clipRule="evenodd" d="M179.544 164.648L196.305 158.93L201.89 135.674L190.944 128.071L190.944 39.5193L195.847 24.7221L189.345 10.5846L173.664 7.05647L156.662 9.10768L39.0272 9.10768L23.9131 0.000131933L5.09624 7.05647L-1.30231e-06 27.0495L8.6244 39.5193L8.6244 128.071L-1.30231e-06 137.207L5.09624 158.93L24.6972 167L42.8363 158.93L165.624 158.93L179.544 164.648ZM16.8446 135.674L29.1683 147.973L165.624 147.973L177.948 135.674L177.948 31.2456L165.624 18.9467L29.1683 18.9467L16.8446 31.2456L16.8446 135.674Z" fill="#F4BF4F"/>
                </svg>
                <div className = "text-center p-2 bg-[#ebb33d] text-black tracking-wide">iPad (11 inch)</div>
              </div> 
            </div>
            <SignUp buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} router={router} utm_source={utm_source!} className = "items-center justify-center *:border-black"/>
          </div>
        </div>
        </div>
    </>
    )
}