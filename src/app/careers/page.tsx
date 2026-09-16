import CareerHero from '@/components/pages/careers/CareerHero'
import WhyJoinUs from '@/components/pages/careers/WhyJoinUs'
import OpenPositions from '@/components/pages/careers/OpenPositions'
import { CareerApplyProvider } from '@/components/providers/CareerApplyProvider'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import SmallBanner from '@/components/shared/smallBanner'
import JsonLd from '@/components/shared/JsonLd'
import { jobPostingsSchema } from '@/lib/seo/schema'
import { jobPositions } from '@/components/pages/careers/dummy'
import { resolveLocale } from '@/lib/i18n/locale'
import { getLocale, getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('CareersPage.meta')
    const locale = resolveLocale(await getLocale())
    return pageMetadata({ locale, title: t('title'), description: t('description'), path: '/careers' })
}

export default async function Page() {
    const t = await getTranslations("CareersPage");
    const locale = resolveLocale(await getLocale())

    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
            <JsonLd data={jobPostingsSchema(jobPositions, locale)} />
            <SmallBanner title={t('bannerTitle')} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="open-positions" />
            <CareerApplyProvider>
                <CareerHero />
                <WhyJoinUs />
                <OpenPositions />
            </CareerApplyProvider>
        </div>
    )
}
