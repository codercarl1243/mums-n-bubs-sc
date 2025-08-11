import clsx from "clsx"
import Image from '@/components/image';
import React from "react";

export default function Sweeteners({className, ...props}: React.ComponentProps<'ul'>){
  const sweeteners = [
    { imageSrc: '/assets/images/teddyBear_expert.webp', label: 'Local Experts' },
    { imageSrc: '/assets/images/basket.webp', label: 'A free raffle for families' },
    { imageSrc: '/assets/images/facepaint.webp', label: 'Free Face Painting' },
    { imageSrc: '/assets/images/bubbles.webp', label: 'Bubble Station' },
    { imageSrc: '/assets/drawings/bird.webp', label: 'A free soft play zone for little ones' },
    { imageSrc: '/assets/images/gifts_and_games.webp', label: 'Games & Gifts' },
  ]

  return (
    <ul
      className={clsx(
        className,
        'width-bleed grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto '
      )}
      {...props}
    >
      {sweeteners.map((sweetener, idx) => (
        <li key={idx} className="flex items-center gap-2 min-w-[12ch] shadow p-4 bg-light rounded-2xl">
          <Image src={sweetener.imageSrc} alt="" height={150} width={100} loading="lazy"/>
          <span>{sweetener.label}</span>
        </li>
      ))}
    </ul>
  )

}