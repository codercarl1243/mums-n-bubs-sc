import { RiFacebookLine, RiInstagramLine } from "@remixicon/react";
// import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Footer() {

    return (
        <footer className="flex gap-2 justify-between bg-secondary-400">
            <div className="flex gap-2">
                <h2 className="text-light">Contact us</h2>
                {<RiFacebookLine color={"blue"}/>}
                {<RiInstagramLine color={"blue"}/>}
            </div>
            <div style={{height: "200px", width: "300px", border: "1px solid red", background: "purple", color: "white" }}>
                TEMP google maps embed replacement
            </div>
            {/* <GoogleMapsEmbed
                apiKey={process.env.GOOGLE_MAPS_API_KEY}
                height={200}
                width="100%"
                mode="place"
                q="Palmwoods+Memorial+Hall/@-26.6862137,152.9586327,19.25z/data=!4m6!3m5!1s0x6b93826741494a07:0x5507862d6f26dabc!8m2!3d-26.6862628!4d152.9590188!16s%2Fg%2F1thw_m8q?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
            /> */}
        </footer>
    )
}
