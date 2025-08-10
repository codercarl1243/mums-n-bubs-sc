import clsx from "clsx";
import ClinicHours from "./clinicHours";
import ClinicContacts from "./clinicContacts";
import ClinicMap from "./clinicMap";
import Image from '@/components/image';

export default function Footer({ className, ...rest }: React.ComponentProps<'footer'>) {
    return (
        <footer
            className={clsx(className,
                "pb-0 bg-primary-400 text-white")}
            {...rest}>
            <ClinicMap />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 p-4">
                <ClinicContacts />
                <ClinicHours />
            </div>

            <p className="bg-dark py-4 border-t border-light/30 text-xs text-center text-light">&copy; 2025 Carl Davidson. All rights reserved. | <a className="link" href="https://codercarl.dev">codercarl.dev</a> <Image src="/assets/drawings/snail.webp" alt="snail with a red shell, drawn with crayons"  style={{ height: '2.5lh' }} width={150} height={150}/></p>
        </footer>
    )
}
