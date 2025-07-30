import Image from '@/components/image';

type Sponsor = {
    name: string;
    logo: string; // logo image path or URL
    url: string;
};

const SPONSORS: Sponsor[] = [
    {
        name: "Sunshine Beverages",
        logo: "https://placehold.co/150x150",
        url: "https://sunshinebeverages.com",
    },
    {
        name: "Palmwoods Hardware",
        logo: "https://placehold.co/150x150",
        url: "https://palmwoodshardware.com.au",
    },
    {
        name: "Greenfield Organics",
        logo: "https://placehold.co/150x150",
        url: "https://greenfieldorganics.com",
    },
    {
        name: "Coastal Bank",
        logo: "https://placehold.co/150x150",
        url: "https://coastalbank.com.au",
    },
    {
        name: "SparkTech Solutions",
        logo: "https://placehold.co/150x150",
        url: "https://sparktech.io",
    },
    {
        name: "Valley View Farms",
        logo: "https://placehold.co/150x150",
        url: "https://valleyviewfarms.com",
    },
    {
        name: "Rise & Grind Café",
        logo: "https://placehold.co/150x150",
        url: "https://riseandgrindcafe.com",
    },
    {
        name: "Studio Bloom Designs",
        logo: "https://placehold.co/150x150",
        url: "https://studiobloomdesigns.com",
    },
];

export default function Sponsors() {

    return (
        <section>
            <h2 className="text-center text-secondary-700">Sponsors</h2>
            <div
                className="
          columns-2 
          sm:columns-3 
          md:columns-4 
          gap-4 
          space-y-4 
          [column-fill:_balance] 
          mx-auto max-w-6xl"
            >
                {SPONSORS.map((sponsor) => (
                    <a
                        key={sponsor.name}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-inside-avoid p-2 hover:opacity-80 transition-opacity"
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
                ))}
            </div>
        </section>
    )
}