'use client';
import React, { useCallback, useState } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
    useDotButton,
    DotButton
} from './carousel.buttons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Slide, { TSlide } from './slide';
import clsx from 'clsx';


type PropType = {
    slides: TSlide[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides }: PropType) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        containScroll: 'trimSnaps', // Prevent empty space at ends
        slidesToScroll: 1, // Optional: scroll one slide at a time
    }, [Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__content"><Slide {...slide} /></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel


