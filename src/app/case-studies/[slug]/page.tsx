import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'
import { ourCase } from '@/components/pages/home/cards/case/dummy'
import { pickLocale } from '@/lib/i18n/pickLocale'
import { resolveLocale } from '@/lib/i18n/locale'
import CaseStudyOverview from '@/components/pages/caseStudies/details/CaseStudyOverview'
import CaseStudyApproach from '@/components/pages/caseStudies/details/CaseStudyApproach'
import CaseStudyResults from '@/components/pages/caseStudies/details/CaseStudyResults'
import OurSuccess from '@/components/pages/home/slides/ourSuccess'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import GetInTouch from '@/components/pages/home/slides/getInTouch'
import SmallBanner from '@/components/shared/smallBanner'
import JsonLd from '@/components/shared/JsonLd'
import { caseStudySchema } from '@/lib/seo/schema'
import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'

export async function generateStaticParams() {
    return ourCase.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const item = ourCase.find((caseItem) => caseItem.slug === slug)
    if (!item) return {}

    const locale = resolveLocale(await getLocale())
    return pageMetadata({
        locale,
        title: pickLocale(item.title, locale),
        description: pickLocale(item.description, locale),
        path: `/case-studies/${slug}`,
        image: item.image,
        type: 'article',
    })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const item = ourCase.find((caseItem) => caseItem.slug === slug)

    if (!item) {
        notFound()
    }

    const locale = resolveLocale(await getLocale())

    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
            <JsonLd data={caseStudySchema(item, locale)} />
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
