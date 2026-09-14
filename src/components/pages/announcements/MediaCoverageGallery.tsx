'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { MediaCoverageItem } from './types'

const ArrowLeft = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3334 8H2.66675M2.66675 8L7.33341 3.33334M2.66675 8L7.33341 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66675 8H13.3334M13.3334 8L8.66675 3.33334M13.3334 8L8.66675 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="#15131A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default function MediaCoverageGallery({
    item,
    onClose,
}: {
    item: MediaCoverageItem
    onClose: () => void
}) {
    const [index, setIndex] = useState(0)
    const total = item.images.length

    const step = (dir: 1 | -1) => setIndex((current) => (current + dir + total) % total)

    return (
        <div className="relative bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-6 md:gap-9.5 items-end w-[92vw] max-w-190 max-h-[90vh] overflow-y-auto">
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 md:right-4 md:top-4 flex items-center justify-center p-2 rounded hover:bg-secondary-bg transition-colors"
            >
                <CloseIcon />
            </button>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center w-full pe-8">
                <h3 className="text-4 md:text-3 font-bold leading-6 md:leading-3 text-text-secondary capitalize w-full md:w-90 shrink-0">
                    {item.title}
                </h3>
                <span className="text-6 md:text-5 text-text-placeholder">{item.source}</span>
            </div>

            <div className="relative h-60 md:h-96 w-full rounded-lg overflow-hidden shrink-0">
                <Image src={item.images[index]} alt={item.title} fill className="object-cover" />
            </div>

            <div className="flex gap-3 md:gap-4.25 h-20 md:h-30.25 items-center justify-end w-full">
                {total > 1 && (
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={() => step(-1)}
                        className="shrink-0 flex items-center justify-center p-2.5 rounded bg-main"
                    >
                        <ArrowLeft />
                    </button>
                )}
                {item.images.map((image, i) => (
                    <button
                        key={image}
                        type="button"
                        aria-label={`Show image ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className="relative h-full w-27 md:w-40.25 shrink-0 rounded-lg overflow-hidden"
                    >
                        <Image src={image} alt={`${item.title} ${i + 1}`} fill className="object-cover" />
                        {i === index && <span className="absolute inset-0 bg-black/40" />}
                    </button>
                ))}
                {total > 1 && (
                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={() => step(1)}
                        className="shrink-0 flex items-center justify-center p-2.5 rounded bg-main"
                    >
                        <ArrowRight />
                    </button>
                )}
            </div>
        </div>
    )
}
