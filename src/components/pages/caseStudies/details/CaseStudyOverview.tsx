import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import { pickLocale } from '@/lib/i18n/pickLocale'
import type { CaseStudyItem } from '../types'
import CaseStudyStatCard from './CaseStudyStatCard'
import QuoteCard from './QuoteCard'

export default async function CaseStudyOverview({ item }: { item: CaseStudyItem }) {
    const locale = await getLocale()
    const t = await getTranslations('CaseStudiesPage.overview')
    const { stats, challenge } = item.detail
    const title = pickLocale(item.title, locale)

    const statItems = [
        { label: t('labels.timeline'), value: pickLocale(stats.timeline, locale) },
        { label: t('labels.industry'), value: pickLocale(stats.industry, locale) },
        { label: t('labels.serviceLine'), value: pickLocale(stats.serviceLine, locale) },
        { label: t('labels.client'), value: pickLocale(stats.client, locale) },
    ]

    return (
        <div className="container mx-auto flex flex-col gap-16 py-16 lg:py-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statItems.map((stat) => (
                    <CaseStudyStatCard key={stat.label} stat={stat} />
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                <div className="flex flex-col justify-between max-w-169.75 gap-8 w-full lg:flex-1">
                    <div className="flex flex-col gap-6">
                        <span className="text-5 text-text-secondary">{t('challengeEyebrow')}</span>
                        <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary">
                            {pickLocale(challenge.title, locale)}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6 text-text-disabled">
                        {challenge.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-6 md:text-5">
                                {pickLocale(paragraph, locale)}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="relative w-full lg:flex-1 min-h-100">
                    <div className="relative w-full md:w-142 h-100 lg:h-133.75 place-self-end  rounded-xl overflow-hidden">
                        <Image src={item.image} alt={title} fill sizes="(min-width: 768px) 568px, 100vw" className="object-cover" />
                    </div>
                    <QuoteCard quote={pickLocale(challenge.quote, locale)} author={challenge.quoteAuthor} role={pickLocale(challenge.quoteRole, locale)} />
                </div>
            </div>
        </div>
    )
}
