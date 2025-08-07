import { RiFacebookLine, RiMailAiLine } from "@remixicon/react";
import clsx from "clsx";
import React from "react";
import Icon from "@/components/icon";
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Footer({ className, ...rest }: React.ComponentProps<'footer'>) {

    return (
        <footer className={clsx(className, "flex flex-wrap gap-2 justify-between p-4 sm:pb-8 bg-purple-50")} {...rest}>
            <div className="flex flex-col gap-2 ">
                <h2 className="text-lg">Contact us</h2>
                <a className="button link-button link__social bg-white" href="https://www.facebook.com/events/1504819507558539/" >
                    <span className="sr-only">Facebook</span>
                    <Icon icon={RiFacebookLine} size={'xl'} color={"var(--color-primary-700)"} />
                </a>
                <a href="mailto:" className="link flex gap-1">
                    admin@vitaliahealth.com.au
                    <Icon icon={RiMailAiLine} size={'xl'} color={"var(--color-primary-700)"} />
                </a>
            </div>
            <div className="min-w-[300px]"
            >
                {process.env.GOOGLE_MAPS_API_KEY && <GoogleMapsEmbed
                    apiKey={process.env.GOOGLE_MAPS_API_KEY}
                    height={200}
                    width="100%"
                    mode="place"
                    q="Palmwoods+Memorial+Hall/@-26.6862137,152.9586327,19.25z/data=!4m6!3m5!1s0x6b93826741494a07:0x5507862d6f26dabc!8m2!3d-26.6862628!4d152.9590188!16s%2Fg%2F1thw_m8q?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                />}
            </div>
        </footer>
    )
}
