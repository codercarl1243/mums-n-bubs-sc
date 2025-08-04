'use client';
import {
    PrevButton,
    NextButton,
} from './carousel.buttons'
import { UseCarousel } from '@/components/carousel/useCarousel';
import Slide, { TSlide } from './slide';
import clsx from 'clsx';
import { EmblaOptionsType } from 'embla-carousel';

type PropType = {
    slides: TSlide[]
} & React.ComponentProps<'div'>

const EmblaCarousel: React.FC<PropType> = ({ slides, ...props }: PropType) => {
    const options: EmblaOptionsType = {
        loop: true,
        align: 'center',
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
        dragFree: true
    }

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        selectedIndex,
        emblaRef,
        isDragging
    } = UseCarousel(options)

    return (
        <div 
        className="embla" 
        aria-roledescription="carousel" 
        role="region"
        tabIndex={0}
        {...props}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div
                            className={clsx("embla__slide", { 'embla__slide--selected': index === selectedIndex })}
                            key={index}
                            aria-roledescription="slide"
                            aria-label={`${slide.name}`}
                        >
                            <div className="embla__slide__content"><Slide {...slide} /></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled || isDragging} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled|| isDragging} />
            </div>
        </div>
    )
}

export default EmblaCarousel


