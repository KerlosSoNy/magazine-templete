import { notFound } from 'next/navigation'
import { articles } from '@/components/pages/articles/dummy'
import ArticleHero from '@/components/pages/articles/details/ArticleHero'
import ArticleContent from '@/components/pages/articles/details/ArticleContent'
import RelatedArticles from '@/components/pages/articles/details/RelatedArticles'
import ScrollDownIndicator from '@/components/pages/contactUs/getInTouch/ScrollDownIndicator'
import SocialSidebar, { defaultSocialLinks } from '@/components/pages/contactUs/getInTouch/SocialSidebar'
import GetInTouch from '@/components/pages/home/slides/getInTouch'
import ArticleDetailsContainer from '@/components/pages/articles/details/ArticleDetailsContainer'

export async function generateStaticParams() {
    return articles.map((item) => ({ slug: item.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const item = articles.find((article) => article.slug === slug)

    if (!item) {
        notFound()
    }

    return (
        <div className="pt-18 xl:pt-32 max-w-screen overflow-hidden">
            <ArticleHero item={item} />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="article-content" />
            <ArticleDetailsContainer item={item} />
            <GetInTouch />
        </div>
    )
}
