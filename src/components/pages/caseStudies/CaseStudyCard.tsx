import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import GenericButton from '@/components/buttons/genericButton'
import { pickLocale } from '@/lib/i18n/pickLocale'
import CaseStudyPills from './CaseStudyPills'
import type { CaseStudyItem } from './types'

export default function CaseStudyCard({ item }: { item: CaseStudyItem }) {
    const locale = useLocale()
    const t = useTranslations('Common.buttons')
    const [year, company, category] = item.tags
    const title = pickLocale(item.title, locale)

    return (
        <div className="w-full flex flex-col">
            <div className="relative w-full h-70 md:h-82.5 rounded-xl overflow-hidden -mb-10 z-1">
                <Image src={item.image} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="bg-secondary-bg rounded-xl pt-16 p-6 md:p-10 flex z-2 flex-col items-start gap-6">
                <CaseStudyPills tags={[year, pickLocale(category, locale)]} tone="dark" />
                <span className="text-5 text-text-secondary">{pickLocale(company, locale)}</span>
                <h3 className="text-3 -mt-2 md:text-2 font-bold leading-3 md:leading-2 text-text-secondary">
                    {title}
                </h3>
                <div className="flex flex-col -mt-4 gap-3">
                    <span className="text-5 text-text-secondary">{pickLocale(item.subTitle, locale)}</span>
                    <p className="text-6 text-text-disabled line-clamp-3">{pickLocale(item.description, locale)}</p>
                </div>
                <GenericButton title={t('discoverMore')} href={item.href} />
            </div>
        </div>
    )
}
