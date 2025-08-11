import clsx from "clsx";
import ClinicHours from "./clinicHours";
import ClinicContacts from "./clinicContacts";
import ClinicMap from "./clinicMap";

export default function Footer({ className, ...rest }: React.ComponentProps<'footer'>) {
    return (
        <footer
            className={clsx(className,
                "pb-0 bg-primary-400 text-white")}
            {...rest}>
            <ClinicMap />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 p-4 py-6">
                <ClinicContacts />
                <ClinicHours />
            </div>

            <p className="bg-dark py-4 border-t border-light/30 text-xs text-center">&copy; 2025 Carl Davidson. All rights reserved. | <a className="link" href="https://codercarl.dev">codercarl.dev</a></p>
        </footer>
    )
}
