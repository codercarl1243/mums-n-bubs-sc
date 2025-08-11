import { RiHome2Line, RiPhoneLine, RiMailAiLine, RiFacebookLine } from "@remixicon/react";
import Icon from "../icon";
import Logo from "../logo";

export default function ClinicContacts(){
    return (
        <div className="flex flex-col gap-y-4 ">
                <Logo />
                <p className="flex gap-2 items-center">
                    <Icon icon={RiHome2Line} size={'lg'} color={"var(--color-white)"} />
                    Shop 1, 2 Little Main St, Palmwoods QLD 4555 </p>
                <a href="tel:0752215020" className="link flex gap-2 items-center">
                    <Icon icon={RiPhoneLine} size={'lg'} color={"var(--color-white)"} />
                    07 5221 5020
                </a>
                <a href="mailto:admin@vitaliahealth.com.au" className="link flex gap-2 items-center">
                    <Icon icon={RiMailAiLine} size={'lg'} color={"var(--color-white)"} />
                    admin@vitaliahealth.com.au
                </a>
                <a href="https://www.facebook.com/events/1504819507558539/" className="link flex gap-2 items-center">
                    <Icon icon={RiFacebookLine} size={'lg'} color={"var(--color-white)"} />
                    Facebook Event
                </a>
            </div>
    )
}