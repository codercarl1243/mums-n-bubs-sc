const hours = {
    mon: ["3pm - 6pm"],
    tues: ["8am - 11am", "3pm - 6pm"],
    wed: ["3pm - 6pm"],
    thurs: ["8am - 11am", "3pm - 6pm"],
    fri: ["8am - 11am"],
    sat: null,
    sun: null
};

export default function ClinicHours(props: React.ComponentProps<'div'>) {

    return (
        <div {...props}>
            <h3
                id="clinic-hours-heading"
                className="text-lg font-semibold mb-3"
            >
                Clinic Opening Hours
            </h3>
            <dl
                aria-labelledby="clinic-hours-heading"
                className="grid gap-2 my-4"
            >
                {Object.entries(hours).map(([day, times]) => (
                    <div key={day}
                        className="grid grid-cols-[6ch_25ch] items-start gap-x-2"
                    >
                        <dt>
                            {day.charAt(0).toUpperCase() + day.slice(1)}:
                        </dt>
                        <dd>
                            {times
                                ? times.map((time, i) => (
                                    <span
                                        key={i}
                                    >
                                        {time}
                                        {i < times.length - 1 && (
                                            <>
                                                <span className="sr-only"> and </span>
                                                <span aria-hidden="true" className="mx-0.5"> • </span>
                                            </>
                                        )}
                                    </span>
                                )) : <em>Closed</em>
                            }
                        </dd>
                    </div>
                ))}
            </dl>
            <p>We look forward to welcoming you during our opening hours!</p>
        </div>
    )
}