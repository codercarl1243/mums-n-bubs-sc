import { RiFacebookLine, RiInstagramLine } from "@remixicon/react";
import Icon from "./icon";
import Logo from "./logo";
import SkipLink from "./skiplink";
import clsx from "clsx";


export default function Header({className, ...props}: React.ComponentProps<'header'>) {

    return (
        <header className={clsx(className, "flex justify-between p-4")} {...props}>
            <SkipLink />
            <Logo />
            {/* this might end up being a nav but is a div for now */}
            <div className="nav-items flex gap-2">
                <a href="facebook.com" >{<Icon className="button" icon={RiFacebookLine} color={"blue"} />}</a>
                <a href="instagram.com">{<Icon className="button" icon={RiInstagramLine} color={"blue"} />}</a>
            </div>
        </header>
    )
}