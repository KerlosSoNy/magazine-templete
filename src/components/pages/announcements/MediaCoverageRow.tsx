'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { pickLocale } from '@/lib/i18n/pickLocale'
import { resolveLocale } from '@/lib/i18n/locale'
import type { MediaCoverageItem } from './types'

export default function MediaCoverageRow({
    item,
    onOpen,
}: {
    item: MediaCoverageItem
    index?: number
    onOpen: (item: MediaCoverageItem) => void
}) {
    const locale = resolveLocale(useLocale())
    const title = pickLocale(item.title, locale)
    const source = pickLocale(item.source, locale)

    return (
        <div className={`w-full border-b border-text-disabled hover:bg-main duration-700 transition-all group`}>
            <button
                type="button"
                onClick={() => onOpen(item)}
                className="w-full container mx-auto flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center  py-6 lg:py-8 text-start  transition-colors px-2"
            >
                <h3 className="text-4 md:text-3 font-bold leading-6 md:leading-3 text-text-secondary group-hover:text-white duration-500 transition-all capitalize w-full md:w-90 shrink-0">
                    {title}
                </h3>
                <span className="text-6 md:text-5 text-text-placeholder md:w-58 shrink-0 group-hover:text-white duration-500 transition-all">
                    {source}
                </span>
                <div className="flex flex-1 gap-3 md:gap-4.25 items-center justify-start md:justify-end w-full overflow-x-auto">
                    {item.images.map((image, index) => (
                        <div
                            key={image}
                            className="relative h-20 w-27 md:h-30.25 md:w-40.25 shrink-0 rounded-lg overflow-hidden"
                        >
                            <Image src={image} alt={`${title} ${index + 1}`} fill sizes="(min-width: 768px) 161px, 108px" className="object-cover" />
                        </div>
                    ))}
                </div>
            </button>
        </div>
    )
}
