import clsx from "clsx"
import Image from "next/image"
import React from "react"


export default function Hero({ className, ...props }: React.ComponentProps<'div'>) {

  return (
    <div className={clsx(className,
      "bg-light",
      "grid grid-cols-1 grid-rows-[auto] gap-2",
      "md:grid-cols-[2rem_2fr_2fr_3fr_2rem] md:grid-rows-2 items-center"
    )} {...props}>
      <Image
        src="/assets/HeroImage_924x660.webp"
        sizes="(max-width: 768px) 450px, (min-width: 769px) 924px"
        alt="Bumps, Babies & Beyond"
        width={924} height={660}
        fetchPriority="high"
        aria-label="Bumps, Babies & Beyond"
        loading="eager"
        className={
          clsx("w-full h-auto object-cover row-1",
            "md:row-[1/3] md:col-start-2 md:col-span-2"
          )} />
      <EventDetails className="row-span-3 col-end-1" />
    </ div>

  )
}

// function LogoAsText(props: React.ComponentProps<'div'>) {
//     return (
//         <div {...props}>
//             {/* <img src="/main_hero.png" alt="" className="w-full" /> */}
//             <img src="/HeroImage.png" alt="" aria-label="Bumps, Babies & Beyond"/>
//            <h1 className="sr-only"> <span className="text-yellow-400 block text-center">Bumps,</span>
//             <div>
//                 <span className="text-purple-400">Bab</span>
//                 <span className="text-secondary-400/70">ie</span>
//                 <span className="text-yellow-400">s</span>
//             </div>
//             <div className="text-secondary-400">&</div>
//             <span className="text-purple-400">Beyond</span></h1>
//         </div>
//     )
// }
function EventDetails({ className }: React.ComponentProps<'img'>) {

  return (
    // <img src="/event_details.png" alt="" className={clsx(className, "min-w-[250px]")} />
    <div id="details_one" className={clsx(className, "w-full p-4 text-center text-xl leading-[1.15] md:row-1 md:col-4 text-dark")}>
        <dl>
            <div className="pt-4">
                <dt className="sr-only">Date</dt>
                <dd>Saturday 1st November</dd>
            </div>
            <div>
                <dt className="sr-only">Location</dt>
                <dd>Palmwoods Memorial Hall</dd>
            </div>
            <div>
                <dt className="sr-only">Time</dt>
                <dd>10am–3pm</dd>
            </div>
            <div className="pb-4">
                <dt className="sr-only">Entry</dt>
                <dd>Free Entry!</dd>
            </div>
        </dl>
    </div>
  )
}
