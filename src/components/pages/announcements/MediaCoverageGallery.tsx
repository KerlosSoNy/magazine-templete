'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper/types'
import { pickLocale } from '@/lib/i18n/pickLocale'
import { resolveLocale } from '@/lib/i18n/locale'
import type { MediaCoverageItem } from './types'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

const ArrowLeft = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
        <path d="M13.3334 8H2.66675M2.66675 8L7.33341 3.33334M2.66675 8L7.33341 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
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
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const total = item.images.length
    const locale = resolveLocale(useLocale())
    const title = pickLocale(item.title, locale)
    const source = pickLocale(item.source, locale)
    const t = useTranslations('AnnouncementsPage.mediaCoverage.gallery')
    const tPopup = useTranslations('Common.popup')

    const goTo = (i: number) => {
        setIndex(i)
        thumbsSwiper?.slideTo(i)
    }

    const step = (dir: 1 | -1) => goTo((index + dir + total) % total)

    return (
        <div className="relative bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-6 md:gap-9.5 items-end w-[92vw] max-w-190 max-h-[90vh] overflow-y-auto">
            <button
                type="button"
                onClick={onClose}
                aria-label={tPopup('close')}
                className="absolute inset-e-3 top-3 md:inset-e-4 md:top-4 flex items-center justify-center p-2 rounded hover:bg-secondary-bg transition-colors"
            >
                <CloseIcon />
            </button>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center w-full pe-8">
                <h3 className="text-4 md:text-3 font-bold leading-6 md:leading-3 text-text-secondary capitalize w-full md:w-90 shrink-0">
                    {title}
                </h3>
                <span className="text-6 md:text-5 text-text-placeholder">{source}</span>
            </div>

            <div className="relative h-60 md:h-96 w-full rounded-lg overflow-hidden shrink-0">
                <Image src={item.images[index]} alt={title} fill sizes="(min-width: 768px) 680px, 92vw" className="object-cover" />
            </div>

            {total > 1 && (
                <div className="flex gap-3 md:gap-4.25 h-20 md:h-30.25 items-center justify-end w-full">
                    <button
                        type="button"
                        aria-label={t('previousImage')}
                        onClick={() => step(-1)}
                        className="shrink-0 flex items-center justify-center p-2.5 rounded bg-main"
                    >
                        <ArrowLeft />
                    </button>

                    <Swiper
                        modules={[FreeMode, Thumbs]}
                        onSwiper={setThumbsSwiper}
                        watchSlidesProgress
                        freeMode
                        slidesPerView="auto"
                        spaceBetween={12}
                        className="h-full min-w-0 flex-1"
                    >
                        {item.images.map((image, i) => (
                            <SwiperSlide key={image} className="w-27! md:w-40.25! h-full!">
                                <button
                                    type="button"
                                    aria-label={t('showImage', { index: i + 1 })}
                                    onClick={() => goTo(i)}
                                    className="relative h-full w-full shrink-0 min-h-30 rounded-lg overflow-hidden"
                                >
                                    <Image src={image} alt={`${title} ${i + 1}`} fill sizes="(min-width: 768px) 161px, 108px" className="object-cover" />
                                    {i === index && <span className="absolute inset-0 bg-black/40" />}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        type="button"
                        aria-label={t('nextImage')}
                        onClick={() => step(1)}
                        className="shrink-0 flex items-center justify-center p-2.5 rounded bg-main"
                    >
                        <ArrowRight />
                    </button>
                </div>
            )}
        </div>
    )
}
