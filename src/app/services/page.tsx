import WeOfferYou from '@/components/pages/services/WeOfferYou'
import BespokeSolutions from '@/components/pages/services/BespokeSolutions'
import ClientsSection from '@/components/pages/services/ClientsSection'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import SmallBanner from '@/components/shared/smallBanner'
import GetInTouchSection from '@/components/pages/contactUs/getInTouch/GetInTouchSection'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
    const t = await getTranslations("ContactUsPage");
    return (
        <div className="pt-18 xl:pt-32">
            <SmallBanner title={t('bannerTitle')} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="services" />
            <div id="services">
                <WeOfferYou />
            </div>
            <BespokeSolutions />
            <ClientsSection />
            <GetInTouchSection />
        </div>
    )
}
