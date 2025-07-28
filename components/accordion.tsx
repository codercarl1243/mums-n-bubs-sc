'use client';
import { useState } from "react";
import Button from "@/components/button";
import { clsx } from "clsx";
import Icon from "./icon";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "@remixicon/react";

type AccordionItem = {
    question: string;
    answer: string;
    id: number; // optional initially
    isOpen: boolean;
};

type AccordionProps = {
    accordionName: string;
    items: Omit<AccordionItem, 'id' | 'isOpen'>[];
};

export default function Accordion({ accordionName, items }: AccordionProps) {
    const [itemsWithOpenState, setItemsWithOpenState] = useState<AccordionItem[]>(() =>
        items.map((item, idx) => ({
            ...item,
            id: idx,
            isOpen: false,
        }))
    );

    const toggleItem = (id: number) => {
        setItemsWithOpenState((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, isOpen: !item.isOpen } : item
            )
        );
    };

    return (
        <div className="accordion space-y-4 border rounded-xl border-primary-400">
            {itemsWithOpenState.map(({ id, question, answer, isOpen }) => {

                return (
                    <div key={id} className="accordion--item">
                        <h3>
                            <Button
                                onClick={() => toggleItem(id)}
                                id={`accordion-button-${accordionName + id}`}
                                aria-expanded={isOpen}
                                aria-controls={`accordion-panel-${accordionName + id}`}
                                className={clsx(
                                    "accordion--item__button w-full text-left justify-between p-4 font-medium flex items-center",
                                    isOpen ? "bg-gray-100" : "bg-white"
                                )}
                            >
                                <span>{question}</span>
                                <span aria-hidden>{isOpen ? <Icon icon={RiArrowDropUpLine} /> : <Icon icon={RiArrowDropDownLine}/>}</span>
                            </Button>
                        </h3>

                        {isOpen && (
                            <div
                                id={`accordion-panel-${accordionName + id}`}
                                role="region"
                                aria-labelledby={`accordion-button-${accordionName + id}`}
                                className="accordion--item__panel p-4 border-t text-gray-700"
                            >
                                {answer}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
