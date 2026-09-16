import BoardOfDirectors from "@/components/pages/about/boardOfDirectors";
import Explore from "@/components/pages/about/explore";
import GirlSection from "@/components/pages/about/GirlSection";
import Legacy from "@/components/pages/about/legacy";
import StandFor from "@/components/pages/about/standFor";
import Visions from "@/components/pages/about/visions";
import ScrollDownIndicator from "@/components/pages/contactUs/getInTouch/ScrollDownIndicator";
import SocialSidebar, { defaultSocialLinks } from "@/components/pages/contactUs/getInTouch/SocialSidebar";
import GetInTouch from "@/components/pages/home/slides/getInTouch";
import LogosMarquee from "@/components/shared/logosMarquee/LogosMarquee";
import SmallBanner from "@/components/shared/smallBanner";
import JsonLd from "@/components/shared/JsonLd";
import { aboutPageSchema } from "@/lib/seo/schema";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { resolveLocale } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("AboutPage.meta");
    const locale = resolveLocale(await getLocale());
    return pageMetadata({ locale, title: t("title"), description: t("description"), path: "/about" });
}

export default async function Page() {
    const t = await getTranslations("AboutPage");

    return (
        <div className="pt-18 xl:pt-32">
            <JsonLd data={aboutPageSchema()} />
            <SmallBanner title={t("bannerTitle")} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="story" />
            <GirlSection />
            <Visions />
            <StandFor />
            <BoardOfDirectors />
            <Legacy />
            <LogosMarquee />
            <Explore />
            <GetInTouch key='10' />
        </div>
    )
}
