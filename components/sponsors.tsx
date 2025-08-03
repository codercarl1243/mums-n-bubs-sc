'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import EmblaCarousel from '@/components/carousel';

type Sponsor = {
    name: string;
    logo: string; // logo image path or URL
    url: string;
};

const SPONSORS: Sponsor[] = [
    {
        name: "Sunshine Beverages",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
    {
        name: "Palmwoods Hardware",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
    {
        name: "Greenfield Organics",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
    {
        name: "Coastal Bank",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
    {
        name: "SparkTech Solutions",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
    {
        name: "Valley View Farms",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
    {
        name: "Rise & Grind Café",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
    {
        name: "Studio Bloom Designs",
        logo: "/150x150_placeholder.png",
        url: "/#",
    },
];
// const SLIDES = Array.from(Array(5).keys())

export default function Sponsors() {


    return (
        <section>
            <h2 className="text-center text-secondary-700">Sponsors</h2>
            {/* <div className="columns-[auto] rows-1 gap-2"> */}
                <EmblaCarousel slides={SPONSORS} />
                {/* <div className='overflow-hidden flex' ref={emblaRef}>
                    {SPONSORS.map(({ logo, url }, i) => (
                       
                    ))}

                </div> */}
                {/* {SPONSORS.map((sponsor) => (
                    <a
                        key={sponsor.name}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit hover:opacity-80 transition-opacity"
                        title={sponsor.name}
                    >
                        <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            width={150}
                            height={150}
                            className="border rounded-xl"
                        />
                    </a>
                ))} */}
            {/* </div> */}
        </section>
    )
}