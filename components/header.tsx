import { RiFacebookLine, RiInstagramLine } from "@remixicon/react";
import Icon from "./icon";
import Logo from "./logo";
import SkipLink from "./skiplink";
import clsx from "clsx";


export default function Header({className, ...props}: React.ComponentProps<'header'>) {

    return (
        <header className={clsx(className, "flex justify-between p-4")} {...props}>
            <SkipLink />
            {/* <Logo /> */}
            {/* this might end up being a nav but is a div for now */}
            <div className="sm:ml-auto nav-items flex gap-2 w-full sm:w-fit">
                <a className="button link-button" href="https://www.facebook.com/events/1504819507558539/" >{<Icon icon={RiFacebookLine} size={'xl'} color={"blue"} />}</a>
                <a className="button link-button ml-auto sm:ml-0" href="instagram.com">{<Icon icon={RiInstagramLine} size={'xl'} color={"blue"} />}</a>
            </div>
        </header>
    )
}