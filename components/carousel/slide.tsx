
export type TSlide = {
    name: string;
    logo: string;
    url: string;
}

export default function Slide({ name, logo, url }: TSlide) {


    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] p-4 flex items-center justify-center bg-white border border-gray-200 shadow-md mx-2 rounded-lg transition-transform duration-300 hover:scale-105"
        >
            <img
                src={logo}
                alt=""
                className="w-full h-full object-contain"
            />
        </a>
    )

}