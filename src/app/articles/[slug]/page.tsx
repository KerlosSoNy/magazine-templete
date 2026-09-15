import { notFound } from 'next/navigation'
import { articles } from '@/components/pages/articles/dummy'
import ArticleHero from '@/components/pages/articles/details/ArticleHero'
import ArticleContent from '@/components/pages/articles/details/ArticleContent'
import RelatedArticles from '@/components/pages/articles/details/RelatedArticles'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import GetInTouch from '@/components/pages/home/slides/getInTouch'
import ArticleDetailsContainer from '@/components/pages/articles/details/ArticleDetailsContainer'
import JsonLd from '@/components/shared/JsonLd'
import { articleSchema } from '@/lib/seo/schema'
import { resolveLocale } from '@/lib/i18n/locale'
import { getLocale } from 'next-intl/server'

export async function generateStaticParams() {
    return articles.map((item) => ({ slug: item.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const item = articles.find((article) => article.slug === slug)

    if (!item) {
        notFound()
    }

    const locale = resolveLocale(await getLocale())

    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
            <JsonLd data={articleSchema(item, locale)} />
            <ArticleHero item={item} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="article-content" />
            <ArticleDetailsContainer item={item} />
            <GetInTouch />
        </div>
    )
}
