import MediaCoverageList from '@/components/pages/announcements/MediaCoverageList'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import GetInTouch from '@/components/pages/home/slides/getInTouch'
import LatestNews from '@/components/pages/home/slides/latestNews'
import SmallBanner from '@/components/shared/smallBanner'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
    const t = await getTranslations('AnnouncementsPage')

    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
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
