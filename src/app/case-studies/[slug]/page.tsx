import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { ourCase } from '@/components/pages/home/cards/case/dummy'
import { pickLocale } from '@/lib/i18n/pickLocale'
import CaseStudyOverview from '@/components/pages/caseStudies/details/CaseStudyOverview'
import CaseStudyApproach from '@/components/pages/caseStudies/details/CaseStudyApproach'
import CaseStudyResults from '@/components/pages/caseStudies/details/CaseStudyResults'
import OurSuccess from '@/components/pages/home/slides/ourSuccess'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import GetInTouch from '@/components/pages/home/slides/getInTouch'
import SmallBanner from '@/components/shared/smallBanner'

export async function generateStaticParams() {
    return ourCase.map((item) => ({ slug: item.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const item = ourCase.find((caseItem) => caseItem.slug === slug)

    if (!item) {
        notFound()
    }

    const locale = await getLocale()

    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
            <SmallBanner title={pickLocale(item.title, locale)} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="case-study-overview" />
            <div id="case-study-overview">
                <CaseStudyOverview item={item} />
            </div>
            <CaseStudyApproach />
            <CaseStudyResults />
            <OurSuccess />
            <GetInTouch />
        </div>
    )
}
