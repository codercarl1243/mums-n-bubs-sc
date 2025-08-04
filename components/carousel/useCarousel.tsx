import { useEffect, useState } from "react"
import useEmblaCarousel, { EmblaViewportRefType } from "embla-carousel-react"
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"

type UseCarouselType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
    emblaRef: EmblaViewportRefType;
    selectedIndex: number;
    isDragging: boolean;
}

export const UseCarousel = (
    options: EmblaOptionsType
): UseCarouselType => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const onSelect = (emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }

    const onPrevButtonClick = () => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }

    const onNextButtonClick = () => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi)
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("reInit", onSelect);
            emblaApi.off("select", onSelect);
        }
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return;
        const handlePointerDown = () => setIsDragging(true);
        const handlePointerUp = () => setIsDragging(false);

        emblaApi.on("pointerDown", handlePointerDown);
        emblaApi.on("pointerUp", handlePointerUp);
        // embla doesnt expose a pointercancel event
        const container = emblaApi.containerNode();
        container.addEventListener("pointercancel", handlePointerUp);

        return () => {
            emblaApi.off("pointerDown", handlePointerDown);
            emblaApi.off("pointerUp", handlePointerUp);
            container.removeEventListener("pointercancel", handlePointerUp);
        };
    }, [emblaApi])


    useEffect(() => {
        if (!emblaApi) return
        const container = emblaApi.containerNode();
        const carouselNode = container.closest('[aria-roledescription="carousel"]') as HTMLElement | null;
        if (!carouselNode) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') emblaApi.scrollNext();
            if (e.key === 'ArrowLeft') emblaApi.scrollPrev();
        }

        carouselNode.addEventListener('keydown', handleKeyDown);

        return () => {
            carouselNode.removeEventListener('keydown', handleKeyDown);
        }
    }, [emblaApi])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
        selectedIndex,
        emblaRef,
        isDragging
    }
}
