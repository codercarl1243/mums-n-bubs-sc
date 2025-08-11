import clsx from "clsx"
import Image from '@/components/image';
import React from "react";

export default function Sweeteners({ className, ...props }: React.ComponentProps<'ul'>) {
  const sweeteners = [
    { imageSrc: '/assets/images/teddyBear_expert.webp', label: 'Local Experts' },
    { imageSrc: '/assets/images/basket.webp', label: 'Free Raffle' },
    { imageSrc: '/assets/images/facepaint.webp', label: 'Free Face Painting' },
    { imageSrc: '/assets/images/bubbles.webp', label: 'Bubble Station' },
    { imageSrc: '/assets/drawings/bird.webp', label: 'Soft Play Zone' },
    { imageSrc: '/assets/images/gifts_and_games.webp', label: 'Games & Gifts' },
  ]

  return (
    <div className="width-bleed">
             <h2 className="text-xl font-bold text-primary-700 text-center">Event Highlights</h2>
      <ul
        className={clsx(
          className,
          'grid max-w-[700px] gap-8 mx-auto grid-cols-[repeat(auto-fit,minmax(150px,1fr))]',
          'md:grid-cols-[repeat(auto-fit,minmax(175px,1fr))]',
          'lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'
        )}
        {...props}
      >
        {sweeteners.map((sweetener, idx) => (
          <li key={idx} className="grid gap-2 min-w-[150px] shadow p-4 rounded-2xl">
            <Image className="place-self-start mx-auto aspect-square sm:w-[150px] md:w-[200px]" src={sweetener.imageSrc} alt="" height={250} width={200} loading="lazy" />
            <span className="w-full font-bold place-self-end text-center">{sweetener.label}</span>
          </li>
        ))}
      </ul>
    </div>

  )

}