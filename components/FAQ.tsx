import { memo } from "react";
import Accordion from "./accordion";

const FAQ_DATA = [
  {
    question: "Where is the event?",
    answer: "The Event will be held in the Palmwoods Memorial Hall - 1 Main St, Palmwoods QLD 4555",
  },
  {
    question: "When is the event?",
    answer: "1st of November 2025",
  },
  {
    question: "Is there Parking?",
    answer: "Yes, parking is available at the venue. please refer to the below image for more information.\n [INSERT PARKING IMAGE HERE]",
  },
  {
    question: "How much does it cost?",
    answer: "Entry is free",
  },
  {
    question: "What can I do at the event?",
    answer: "We will have a number of stores available, play equipment for the little ones and [INSERT MORE HERE]",
  },
];

export default function FAQ() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-xl text-center font-bold mb-4 text-primary-700">FAQ's</h2>
        <Accordion items={FAQ_DATA} accordionName={"faq"} />
      </div>
 <div className="border-2 border-purple-600 h-full w-full min-h-[200px] flex items-center justify-center">
        {/* Placeholder for image or visual content */}
        <span className="text-purple-600 italic">[Reserved for image or content]</span>
      </div>
    </ section>
  )
}