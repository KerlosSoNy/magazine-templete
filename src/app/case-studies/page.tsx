import CaseStudiesList from "@/components/pages/caseStudies/CaseStudiesList";
import ScrollDownIndicator from "@/components/pages/contactUs/getInTouch/ScrollDownIndicator";
import SocialSidebar, { defaultSocialLinks } from "@/components/pages/contactUs/getInTouch/SocialSidebar";
import GetInTouch from "@/components/pages/home/slides/getInTouch";
import SmallBanner from "@/components/shared/smallBanner";
import JsonLd from "@/components/shared/JsonLd";
import { caseStudiesCollectionSchema } from "@/lib/seo/schema";
import { ourCase } from "@/components/pages/home/cards/case/dummy";
import { resolveLocale } from "@/lib/i18n/locale";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations("CaseStudiesPage");
    const locale = resolveLocale(await getLocale())
    return (
        <div className="pt-18 xl:pt-32">
            <JsonLd data={caseStudiesCollectionSchema(ourCase, locale, t("banner.title"))} />
            <SmallBanner title={t("banner.title")} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="case-studies" />
            <CaseStudiesList />
            <GetInTouch />
        </div>
    )
}
