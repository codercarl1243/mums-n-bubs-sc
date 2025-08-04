import { RiFacebookLine, RiInstagramLine } from "@remixicon/react";
import Icon from "./icon";
import SkipLink from "./skiplink";
import clsx from "clsx";


export default function Header({ className, ...props }: React.ComponentProps<'header'>) {

    return (
        <header className={clsx(className, "flex justify-between p-4")} {...props}>
            <SkipLink />
            <div className="sm:ml-auto nav-items flex flex-wrap items-center justify-between gap-2 w-full sm:w-fit">
                <div className="flex">
                    <a className="button link-button" href="https://www.facebook.com/events/1504819507558539/" >
                        <span className="sr-only">Facebook</span>
                        <Icon icon={RiFacebookLine} size={'xl'} color={"blue"} />
                    </a>
                    {/* <a className="button link-button sm:ml-0" href="instagram.com">
                        <span className="sr-only">Instagram</span>
                        <Icon icon={RiInstagramLine} size={'xl'} color={"blue"} />
                    </a> */}
                </div>
                <a className="h-fit" href="mailto:admin@vitaliahealth.com.au">admin@vitaliahealth.com.au</a>

            </div>
        </header>
    )
}