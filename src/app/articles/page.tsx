import ArticlesList from "@/components/pages/articles/ArticlesList";
import ScrollDownIndicator from "@/components/pages/contactUs/getInTouch/ScrollDownIndicator";
import SocialSidebar, { defaultSocialLinks } from "@/components/pages/contactUs/getInTouch/SocialSidebar";
import GetInTouch from "@/components/pages/home/slides/getInTouch";
import SmallBanner from "@/components/shared/smallBanner";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations("ContactUsPage");
    return (
        <div className="pt-18 xl:pt-32">
            <SmallBanner title={t("pageTitle")} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="articles" />
            <ArticlesList />
            <GetInTouch />
        </div>
    )
}
