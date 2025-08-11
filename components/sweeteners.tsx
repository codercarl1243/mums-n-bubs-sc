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
    <ul
      className={clsx(
        className,
        'width-bleed grid grid-cols-2 sm:grid-cols-3 gap-8 mx-auto '
      )}
      {...props}
    >
      {sweeteners.map((sweetener, idx) => (
        <li key={idx} className="grid place-items-center gap-2 min-w-[12ch] shadow p-4 rounded-2xl">
          <Image className="place-self-end" src={sweetener.imageSrc} alt="" height={250} width={200} loading="lazy" />
          <span className="font-bold">{sweetener.label}</span>
        </li>
      ))}
    </ul>
  )

}