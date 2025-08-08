import Image from '@/components/image'
import SkipLink from "./skiplink";
import clsx from "clsx";
import Logo from "@/components/logo";


export default function Header({ className, ...props }: React.ComponentProps<'header'>) {

    return (
        <>
            <SkipLink />
            <header className={clsx(className, "flex justify-between items-center sm:gap-2 sm:p-4 mb-4 bg-primary-400")} {...props}>
                <a href="/"><Logo /><span className="sr-only">Vitalia Health Chiropractic Clinic</span></a>
                <div className="flex items-end gap-1">
                    <Image src="/chick1.webp" loading="lazy" className="" alt="" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/chick2.webp" loading="lazy" className=" ml-16" alt="" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/chick3.webp" loading="lazy" className=" ml-[-2px]" alt="" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/chick4.webp" loading="lazy" className=" ml-[-6px]" alt="" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/chicken.webp" loading="lazy" alt="" height={250} width={100} style={{ height: "100px" }} />
                </div>
            </header>
        </>

    )
}