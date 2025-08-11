'use client';
import EmblaCarousel from '@/components/carousel';

type Sponsor = {
    name: string;
    logo: string; // logo image path or URL
    url: string;
};

const SPONSORS: Sponsor[] = [
    {
        name: "Sunshine Beverages",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
    {
        name: "Palmwoods Hardware",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
    {
        name: "Greenfield Organics",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
    {
        name: "Coastal Bank",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
    {
        name: "SparkTech Solutions",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
    {
        name: "Valley View Farms",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
    {
        name: "Rise & Grind Café",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
    {
        name: "Studio Bloom Designs",
        logo: "/assets/coming_soon.webp",
        url: "/#",
    },
];
// const SLIDES = Array.from(Array(5).keys())

export default function Sponsors() {


    return (
        <section>
            {/* <h2 className="text-center text-secondary-700">Sponsors</h2> */}
            <EmblaCarousel slides={SPONSORS} />
        </section>
    )
}