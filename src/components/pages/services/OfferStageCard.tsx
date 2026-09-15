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
        <div className="bg-white border border-text-disabled/40 rounded-lg p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                {stage.iconBg ? (
                    <span
                        className="size-22 rounded-full flex items-center justify-center p-3"
                        style={{ backgroundColor: stage.iconBg }}
                    >
                        <Image src={stage.icon} alt={title} width={50} height={64} className="w-auto h-full" />
                    </span>
                ) : (
                    <Image src={stage.icon} alt={title} width={88} height={88} className="size-22" />
                )}
                <span className="text-3 font-bold text-text-secondary">{title}</span>
            </div>
            <p className="text-5 text-text-disabled">{description}</p>
            <div className="flex flex-col gap-4">
                <p className="text-5">
                    <span className="font-bold uppercase text-[#006c78]">{t('outcomesLabel')}: </span>
                    <span className="text-text-disabled">{outcomes}</span>
                </p>
                <p className="text-5">
                    <span className="font-bold uppercase text-[#006c78]">{t('gainsLabel')}: </span>
                    <span className="text-text-disabled">{gains}</span>
                </p>
            </div>
        </div>
    )
}
