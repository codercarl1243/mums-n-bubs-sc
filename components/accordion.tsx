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
        <div className="accordion w-fit border-1 rounded-[1rem]  border-primary-400">
            {itemsWithOpenState.map(({ id, question, answer, isOpen }) => {
                const buttonId = `accordion-button-${accordionName + id}`;
                const panelId = `accordion-panel-${accordionName + id}`;

                return (
                    <div key={id}
                        className={clsx(
                            "accordion--item border-b last:border-none overflow-hidden",
                            id === 0 && "first:rounded-t-[1rem]",
                            id === itemsWithOpenState.length - 1 && "last:rounded-b-[1rem]"
                        )}
                    >
                        <h3>
                            <Button
                                onClick={() => toggleItem(id)}
                                id={buttonId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                className={clsx(
                                    // "accordion--item__button w-full m-0 border-x-0 transition-[border] duration-300 ease-in-out py-1 px-2 font-medium flex items-center",
                                    "text-lg accordion--item__button w-full m-0 p-[0.3rem] font-medium flex items-center border-x-0 transition-all duration-200 ease-in-out",
                                    "hover:bg-primary-700/60 hover:text-light",
                                    "active:bg-light active:text-primary-700 ",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:z-10",
                                    id === 0 && "first:rounded-t-[0.7rem] ",
                                    id === itemsWithOpenState.length - 1 && !isOpen && "last:rounded-b-[0.7rem]"
                                )}
                            >
                                <span aria-hidden>{isOpen ? <Icon icon={RiArrowDropUpLine} /> : <Icon icon={RiArrowDropDownLine} />}</span>
                                <span>{question}</span>
                            </Button>
                        </h3>
                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className={clsx(
                                isOpen ? "max-h-96 py-4" : "max-h-0 py-0",
                                "accordion--item__panel px-2 transition-[max-height,padding] duration-300 ease-in-out"
                            )}
                        >
                            {answer}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
