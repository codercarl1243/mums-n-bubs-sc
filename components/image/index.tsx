'use client';

import { ErrorBoundary } from "react-error-boundary";
import { RiFileDamageLine } from "@remixicon/react";
import Icon from "../icon";
import NextImage from 'next/image';
import clsx from "clsx";

export default function MainImage({ src, alt, width, height, className, ...rest }: React.ComponentProps<typeof NextImage>) {
    return (
        <ErrorBoundary
            fallback={<FallbackImage width={width ?? 800} height={height ?? 300} />}
        >
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={clsx('image block-image', className)}
                {...rest}
            />
        </ErrorBoundary>
    )
}

export function FallbackImage({ width, height }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div style={{ width, height, display: "grid", placeContent: "center", cursor: "pointer" }} className="fallback-image">
            <Icon icon={RiFileDamageLine} size={"lg"} />
        </div>
    )
}