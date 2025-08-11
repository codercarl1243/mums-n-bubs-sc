import clsx from "clsx"
import Image from "next/image"
import React from "react"
import EventDetails from "./eventDetails"

export default function Hero({ className, ...props }: React.ComponentProps<'div'>) {

    return (
        <div className={clsx(className,
            "grid grid-rows-[auto] gap-2",
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
            <EventDetails className="row-span-3 col-end-1 md:row-[1_2] md:col-4" />
        </ div>

    )
}