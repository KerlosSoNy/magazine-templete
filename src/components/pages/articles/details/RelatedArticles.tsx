import { useTranslations } from 'next-intl'
import { articles } from '../dummy'
import type { ArticleItem } from '../types'
import RelatedArticleCard from './RelatedArticleCard'

export default function RelatedArticles({ current }: { current: ArticleItem }) {
    const t = useTranslations('ArticlesPage.detail')
    const related = articles.filter((item) => item.slug !== current.slug).slice(0, 3)

    if (related.length === 0) return null

    return (
        <div className="flex flex-col gap-8 w-full lg:w-97 shrink-0">
            <span className="text-5 text-text-disabled">{t('relatedArticle')}</span>
            <div className="flex flex-col gap-6">
                {related.map((item) => (
                    <RelatedArticleCard key={item.slug} item={item} />
                ))}
            </div>
        </div>
    )
}
