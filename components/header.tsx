import { RiFacebookLine, RiInstagramLine } from "@remixicon/react";
import Icon from "./icon";
import Logo from "./logo";
import SkipLink from "./skiplink";


export default function Header() {

    return (
        <header className="flex justify-between py-4">
            <SkipLink />
            <Logo />
            {/* this might end up being a nav but is a div for now */}
            <div className="nav-items flex gap-2">
                <a href="facebook.com">{<Icon icon={RiFacebookLine} color={"blue"} />}</a>
                <a href="instagram.com">{<Icon icon={RiInstagramLine} color={"blue"} />}</a>
            </div>
        </header>
    )
}