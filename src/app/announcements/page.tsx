import MediaCoverageList from '@/components/pages/announcements/MediaCoverageList'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import GetInTouch from '@/components/pages/home/slides/getInTouch'
import LatestNews from '@/components/pages/home/slides/latestNews'
import SmallBanner from '@/components/shared/smallBanner'
import JsonLd from '@/components/shared/JsonLd'
import { mediaCoverageCollectionSchema } from '@/lib/seo/schema'
import { mediaCoverage } from '@/components/pages/announcements/dummy'
import { resolveLocale } from '@/lib/i18n/locale'
import { getLocale, getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('AnnouncementsPage.meta')
    const locale = resolveLocale(await getLocale())
    return pageMetadata({ locale, title: t('title'), description: t('description'), path: '/announcements' })
}

export default async function Page() {
    const t = await getTranslations('AnnouncementsPage')
    const locale = resolveLocale(await getLocale())

    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
            <JsonLd data={mediaCoverageCollectionSchema(mediaCoverage, locale, t('bannerTitle'))} />
            <SmallBanner title={t('bannerTitle')} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="media-coverage" />
            <LatestNews />
            <div id="media-coverage">
                <MediaCoverageList />
            </div>
            <GetInTouch />
        </div>
    )
}
