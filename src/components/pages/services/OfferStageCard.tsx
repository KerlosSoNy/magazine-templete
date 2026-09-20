import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import { pickLocale } from '@/lib/i18n/pickLocale'
import type { Locale } from '@/lib/i18n/locale'
import type { OfferStage } from './types'

export default async function OfferStageCard({ stage }: { stage: OfferStage }) {
    const locale = (await getLocale()) as Locale
    const t = await getTranslations('ServicesPage.weOfferYou')
    const title = pickLocale(stage.title, locale)
    const description = pickLocale(stage.description, locale)
    const outcomes = pickLocale(stage.outcomes, locale)
    const gains = pickLocale(stage.gains, locale)
    return (
        <div
            className="bg-white group hover:bg-[var(--icon-iconBg)] border transition-all duration-500 border-text-disabled/40 rounded-lg p-8 flex flex-col justify-between gap-3 hover:h-fit"
            style={{ '--icon-iconBg': stage.iconBg } as React.CSSProperties}
        >
            <div className="flex flex-col gap-2">
                {stage.iconBg ? (
                    <span
                        className="w-fit h-fit p-4 group-hover:p-0 transition-all duration-500 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: stage.iconBg }}
                    >
                        <Image src={stage.icon} alt={title} width={50} height={64} className="w-13 h-13" />
                    </span>
                ) : (
                    <Image src={stage.icon} alt={title} width={88} height={88} className="size-22" />
                )}
                <span className="text-3 font-bold text-text-secondary group-hover:text-white">{title}</span>
            </div>
            <p className="text-5 text-text-disabled group-hover:text-white">{description}</p>
            <div className="flex flex-col gap-1">
                <p className="text-5">
                    <span className="font-bold uppercase text-[#006c78] group-hover:text-white">{t('outcomesLabel')}: </span>
                    <span className="text-text-disabled group-hover:text-white">{outcomes}</span>
                </p>
                <p className="text-5">
                    <span className="font-bold uppercase text-[#006c78] group-hover:text-white">{t('gainsLabel')}: </span>
                    <span className="text-text-disabled group-hover:text-white">{gains}</span>
                </p>
            </div>
        </div>
    )
}
