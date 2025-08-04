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
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
        url: "/#",
    },
    {
        name: "Palmwoods Hardware",
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
        url: "/#",
    },
    {
        name: "Greenfield Organics",
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
        url: "/#",
    },
    {
        name: "Coastal Bank",
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
        url: "/#",
    },
    {
        name: "SparkTech Solutions",
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
        url: "/#",
    },
    {
        name: "Valley View Farms",
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
        url: "/#",
    },
    {
        name: "Rise & Grind Café",
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
        url: "/#",
    },
    {
        name: "Studio Bloom Designs",
        // logo: "/150x150_placeholder.png",
        logo: "/splotch_one.png",
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