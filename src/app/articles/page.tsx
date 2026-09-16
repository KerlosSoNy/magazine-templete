import ArticlesList from "@/components/pages/articles/ArticlesList";
import ScrollDownIndicator from "@/components/pages/contactUs/getInTouch/ScrollDownIndicator";
import SocialSidebar, { defaultSocialLinks } from "@/components/pages/contactUs/getInTouch/SocialSidebar";
import GetInTouch from "@/components/pages/home/slides/getInTouch";
import SmallBanner from "@/components/shared/smallBanner";
import JsonLd from "@/components/shared/JsonLd";
import { articlesCollectionSchema } from "@/lib/seo/schema";
import { articles } from "@/components/pages/articles/dummy";
import { resolveLocale } from "@/lib/i18n/locale";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("ArticlesPage.meta");
    const locale = resolveLocale(await getLocale());
    return pageMetadata({ locale, title: t("title"), description: t("description"), path: "/articles" });
}

export default async function Page() {
    const t = await getTranslations("ArticlesPage");
    const locale = resolveLocale(await getLocale())
    return (
        <div className="pt-18 xl:pt-32">
            <JsonLd data={articlesCollectionSchema(articles, locale, t("pageTitle"))} />
            <SmallBanner title={t("pageTitle")} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="articles" />
            <ArticlesList />
            <GetInTouch />
        </div>
    )
}
