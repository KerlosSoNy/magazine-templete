'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Popup from '@/components/shared/popup'
import { mediaCoverage } from './dummy'
import type { MediaCoverageItem } from './types'
import MediaCoverageRow from './MediaCoverageRow'
import MediaCoverageGallery from './MediaCoverageGallery'

export default function MediaCoverageList() {
    const [activeItem, setActiveItem] = useState<MediaCoverageItem | null>(null)
    const t = useTranslations('AnnouncementsPage.mediaCoverage')

    return (
        <div className="container mx-auto flex flex-col gap-10 lg:gap-16 py-10 lg:py-20 3xl:-mt-30 border-t border-text-disabled">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-8">
                <h2 className="text-2 md:text-1 font-bold leading-2 md:leading-1 text-text-secondary">{t('headingLine1')} <br /> {t('headingLine2')}</h2>
                <p className="text-6 md:text-5 text-text-placeholder max-w-142">
                    {t('description')}
                </p>
            </div>

            <div className="flex flex-col border-t border-text-disabled">
                {mediaCoverage.map((item) => (
                    <MediaCoverageRow key={item.slug} item={item} onOpen={setActiveItem} />
                ))}
            </div>

            <Popup
                key="popup-media-coverage"
                isOpen={!!activeItem}
                onClose={() => setActiveItem(null)}
                animationKey={activeItem?.slug}
            >
                {activeItem && <MediaCoverageGallery item={activeItem} onClose={() => setActiveItem(null)} />}
            </Popup>
        </div>
    )
}
