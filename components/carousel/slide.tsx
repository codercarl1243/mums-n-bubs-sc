import Image from "next/image";
import Icon from "@/components/icon";
import { RiExternalLinkLine } from "@remixicon/react";

export type TSlide = {
    name: string;
    logo: string;
    url: string;
}

export default function Slide({ name, logo, url }: TSlide) {

    return (
        <a
            href={url}
            rel="noopener noreferrer"
            className="relative group h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            title={name}
            aria-label={`Visit ${name}'s website`}
            tabIndex={-1}
        >
            <Image
                src={logo}
                height={300}
                width={300}
                alt={`${name} logo`}
                className="h-[253px] w-[194px] object-contain"
                loading="lazy"
            />
            <span
                className={`
          absolute top-2 right-2
          opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
          transition-opacity
          bg-white/70 text-black rounded-full p-1
          pointer-events-none
        `}
                aria-hidden="true"
            >
                <Icon color={'var(--color-neutral-400)'} icon={RiExternalLinkLine} size={32} />
            </span>
        </a>
    )
}