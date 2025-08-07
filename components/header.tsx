import { RiFacebookLine } from "@remixicon/react";
import Icon from "@/components/icon";
import Image from '@/components/image'
import SkipLink from "./skiplink";
import clsx from "clsx";


export default function Header({ className, ...props }: React.ComponentProps<'header'>) {

    return (
        <>
            <SkipLink />
            <header className={clsx(className, "flex justify-between items-center sm:gap-2 sm:p-4 mb-4 bg-purple-50")} {...props}>
                    <a className="button link-button link__social bg-white" href="https://www.facebook.com/events/1504819507558539/" >
                        <span className="sr-only">Facebook</span>
                        <Icon icon={RiFacebookLine} size={'xl'} color={"var(--color-primary-700)"} />
                    </a>
                <div className="flex items-end">
                    <Image src="/chick1.svg" loading="lazy" className="" alt="" height={100} width={80} style={{ height: "20px" }} />
                    <Image src="/chick2.svg" loading="lazy"  className=" ml-8" alt="" height={100} width={80} style={{ height: "20px" }} />
                    <Image src="/chick3.svg" loading="lazy"  className=" ml-[-16px]" alt="" height={100} width={80} style={{ height: "20px" }} />
                    <Image src="/chick4.svg" loading="lazy"  className=" ml-[-16px]" alt="" height={100} width={80} style={{ height: "20px" }} />
                    <Image src="/chicken.svg" loading="lazy" alt="" height={250} width={100} style={{height: "100px"}} />
                </div>
            </header>
        </>

    )
}