import Image from '@/components/image'
import SkipLink from "./skiplink";
import clsx from "clsx";
import Logo from "@/components/logo";
import Link from 'next/link';


export default function Header({ className, ...props }: React.ComponentProps<'header'>) {

    return (
        <>
            <SkipLink />
            <header className={clsx(className, "flex justify-between items-center sm:gap-2 sm:p-4 mb-4 ")} {...props}>
                <Link href="/"><Logo /><span className="sr-only">Vitalia Health Chiropractic Clinic</span></Link>
                <div className="flex gap-4 ml-auto">
                    <Link href="/partners">Partners</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact-us">Contact Us</Link>
                </div>
                <div className="flex items-end gap-1 max-sm:hidden">
                    <Image src="/assets/drawings/chick1.webp" loading="lazy" className="" alt="Mother chicken with 4 baby chicks following her" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/assets/drawings/chick2.webp" loading="lazy" className=" [margin-left:clamp(0.5rem,4vw,4rem)]" alt="" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/assets/drawings/chick3.webp" loading="lazy" className=" ml-[-2px]" alt="" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/assets/drawings/chick4.webp" loading="lazy" className=" ml-[-6px]" alt="" height={100} width={80} style={{ height: "20px", width: "20px" }} />
                    <Image src="/assets/drawings/chicken.webp" loading="lazy" alt="" height={250} width={100} style={{ height: "100px" }} />
                </div>
            </header>
        </>
    )
}