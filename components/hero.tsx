import clsx from "clsx"
import React from "react"


export default function Hero({className, ...props}: React.ComponentProps<'section'>) {

    return (
        <section  className={clsx(className, "bg-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1440px] mx-auto px-4 py-16")} {...props}>
            <LogoAsText className="text-3xl font-accent leading-none font-medium w-full text-center" />
            <div className="flex flex-col items-center gap-8 md:items-start">
                <EventDetails />
                <EventSweeteners />
            </div>
        </ section>
    )
}

function LogoAsText(props: React.ComponentProps<'h1'>) {
    return (
        <h1 {...props}>
            <span className="text-yellow-400 block text-center">Bumps,</span>
            <div>
                <span className="text-purple-400">Bab</span>
                <span className="text-secondary-400/70">ie</span>
                <span className="text-yellow-400">s</span>
            </div>
            <div className="text-secondary-400">&</div>
            <span className="text-purple-400">Beyond</span>
        </h1>
    )
}
function EventDetails({ className }: React.ComponentProps<'div'>) {

    return (
        <div id="details_one" className={clsx(className, "w-fit p-4 text-center text-xl leading-[1.15] text-light bg-secondary-700/80")}>
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

function EventSweeteners({ className }: React.ComponentProps<'div'>) {

    return (
        <div id="details_two" className={clsx(className, "w-fit p-4 text-center text-lg text-light bg-purple-400/80")}>
            <ul className="flex flex-wrap text-left max-w-[40ch] pl-4 pb-4 gap-x-10 list-disc marker-tight text-yellow-400 text-nowrap">
                <li>Stalls</li>
                <li>Pram friendly</li>
                <li>Community Vibes</li>
                <li>Local Experts</li>
                <li>Lucky Door Prize</li>
                <li>Face Painting</li>
                <li>Bubble Station</li>
                <li>Soft Play</li>
                <li>Games, Gifts and More!</li>
            </ul>
        </div>)
}