import clsx from "clsx";

export default function EventDetails({ className }: React.ComponentProps<'div'>) {
  return (
    <div
      id="details_one"
      className={clsx(
        className,
        "w-full p-4",
        "text-center text-xl max-sm:text-lg leading-[1.15] text-dark",
      )}
    >
      <dl className="md:space-y-4 space-y-2">
        <div
          className={clsx(
            "bg-purple-100 p-4 inline-block",
            "rotate-6", 
            "shadow-md rounded-lg" 
          )}
        >
          <dt className="sr-only">Date</dt>
          <dd>Saturday 1st November</dd>
        </div>

        <div
          className={clsx(
            "bg-primary-200 p-4 inline-block",
            "-rotate-3",
            "shadow-md rounded-lg"
          )}
        >
          <dt className="sr-only">Location</dt>
          <dd>Palmwoods Memorial Hall</dd>
        </div>

        <div
          className={clsx(
            "bg-yellow-400 p-4 inline-block",
            "rotate-2",
            "shadow-md rounded-lg"
          )}
        >
          <dt className="sr-only">Time</dt>
          <dd>10am - 3pm</dd>
        </div>

        <div
          className={clsx(
            "bg-secondary-200 p-2 inline-block -rotate-6 shadow-md rounded-full",
            "md:p-8"
          )}
        >
          <dt className="sr-only">Entry</dt>
          <dd>Free Entry!</dd>
        </div>
      </dl>
    </div>
  );
}