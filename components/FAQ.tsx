import {memo} from "react";
import Accordion from "./accordion";

const FAQ_DATA = [
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase as long as the item is unused and in its original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 3–7 business days depending on your location and selected shipping method.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping times and costs may vary based on destination.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you’ll receive an email with a tracking number and a link to view the delivery status.",
  },
  {
    question: "Can I change or cancel my order?",
    answer: "We can modify or cancel orders within one hour of purchase. After that, the order is processed and can’t be changed.",
  },
];

export default function FAQ() {

    return (
        <section>
            <h2>FAQ's</h2>
            <Accordion items={FAQ_DATA} accordionName={"faq"} />
        </ section>
    )
}