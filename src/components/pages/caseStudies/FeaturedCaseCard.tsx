import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import GenericButton from '@/components/buttons/genericButton'
import { pickLocale } from '@/lib/i18n/pickLocale'
import CaseStudyPills from './CaseStudyPills'
import type { CaseStudyItem } from './types'

export default function FeaturedCaseCard({ item }: { item: CaseStudyItem }) {
    const locale = useLocale()
    const t = useTranslations('Common.buttons')
    const [year, company, category] = item.tags
    const title = pickLocale(item.title, locale)

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch border-t border-text-disabled pt-4 lg:pt-16">
            <div className="relative w-full lg:flex-1 h-70 md:h-128.5  rounded-xl overflow-hidden">
                <Image src={item.image} alt={title} fill className="object-cover" />
            </div>
            <div className="flex flex-col items-start justify-center gap-6 w-full lg:flex-1">
                <CaseStudyPills tags={[year, pickLocale(category, locale)]} />
                <span className="text-5 text-text-secondary">{pickLocale(company, locale)}</span>
                <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3  -mt-3 md:leading-2 xl:leading-1 text-text-secondary">
                    {title}
                </h2>
                <div className="flex flex-col gap-1 -mt-4">
                    <span className="text-4 xl:text-3 font-bold text-text-secondary">{pickLocale(item.subTitle, locale)}</span>
                    <p className="text-6 xl:text-5 text-text-placeholder max-w-150">{pickLocale(item.description, locale)}</p>
                </div>
                <GenericButton title={t('discoverMore')} href={item.href} />
            </div>
        </div>
    )
}
