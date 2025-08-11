import React from "react";
import Accordion from "./accordion";
import clsx from "clsx";
import Image from '@/components/image'

const FAQ_DATA = [
  {
    question: "How much does it cost?",
    answer: <p className="whitespace-pre-line">Entry is free</p>,
  },
  {
    question: "Where is the event?",
    answer: <p className="whitespace-pre-line">The Event will be held in the Palmwoods Memorial Hall - 1 Main St, Palmwoods QLD 4555</p>,
  },
  {
    question: "When is the event?",
    answer: <p className="whitespace-pre-line">1st of November 2025</p>,
  },
  {
    question: "Is there Parking?",
    answer: <p className="whitespace-pre-line">Yes, parking is available at the venue. {"\n"} Please refer to the below image for more information.<br /> [INSERT PARKING IMAGE HERE]</p>,
  },
  {
    question: "Can I bring my Pram into the hall?",
    answer: <p className="whitespace-pre-line">Yes, the hall is super pram friendly.</p>,
  },
  {
    question: "What can I do at the event?",
    answer: <p className="whitespace-pre-line">We will have a number of stalls available, local experts to ask questions of, {"\n"} play equipment for the little ones, and a free raffle for families. </p>,
  },
  {
    question: "What businesses will be at the event?",
    answer: <p className="whitespace-pre-line">[ INSERT INFORMATION HERE ]. For a full list of stall holders, please visit our <a href="/stall-holders">stall holders list</a> page.</p>,
  },
  {
    question: "How do I participate in the raffle?",
    answer: <p className="whitespace-pre-line">[ INSERT RAFFLE INFORMATION HERE ]</p>,
  },
];

export default function FAQ(props: React.ComponentProps<'section'>) {

  return (
    <section className={
      clsx("grid grid-cols-1 items-start my-4 gap-2 width-bleed",
        "md:grid-cols-[4fr_2fr]"
      )} {...props}>
   <div
        className={clsx(
          "flex items-center justify-center gap-2", // h2 + image inline at small
          "md:mb-4 md:contents" // md+ separate block layout
        )}
      >
        <h2 className="text-xl font-bold text-primary-700 text-center">
          FAQ&apos;s
        </h2>
        <Image
          className={clsx(
            "h-[50px] w-[45px] shrink-0", // small version
            "md:h-[300px] md:w-[300px] md:place-self-center md:col-2 md:row-2" // large version
          )}
          src="/assets/drawings/bee.webp"
          alt="yellow bee with black stripes, drawn with crayons"
          height={300}
          width={300}
        />
      </div>
      <Accordion items={FAQ_DATA} accordionName={"faq"} className="col-1" />
    </section>
  )
}