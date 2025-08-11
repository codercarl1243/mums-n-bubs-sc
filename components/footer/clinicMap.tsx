import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function ClinicMap() {

    return (
        <div>
            {process.env.GOOGLE_MAPS_API_KEY && <GoogleMapsEmbed
                apiKey={process.env.GOOGLE_MAPS_API_KEY}
                height={350}
                allowfullscreen
                width={'100%'}
                mode="place"
                q="Palmwoods+Memorial+Hall/@-26.6862137,152.9586327,19.25z/data=!4m6!3m5!1s0x6b93826741494a07:0x5507862d6f26dabc!8m2!3d-26.6862628!4d152.9590188!16s%2Fg%2F1thw_m8q?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
            />}
        </div>
    )
}