import CareerHero from '@/components/pages/careers/CareerHero'
import WhyJoinUs from '@/components/pages/careers/WhyJoinUs'
import OpenPositions from '@/components/pages/careers/OpenPositions'
import { CareerApplyProvider } from '@/components/providers/CareerApplyProvider'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import SmallBanner from '@/components/shared/smallBanner'

export default function Page() {
    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
            <SmallBanner title="Careers" />
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
