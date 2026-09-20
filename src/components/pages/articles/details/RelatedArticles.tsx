import { useTranslations } from 'next-intl'
import { articles } from '../dummy'
import type { ArticleItem } from '../types'
import RelatedArticleCard from './RelatedArticleCard'
import MotionDiv from '@/components/shared/motionDiv'

export default function RelatedArticles({ current }: { current: ArticleItem }) {
    const t = useTranslations('ArticlesPage.detail')
    const related = articles.filter((item) => item.slug !== current.slug).slice(0, 3)

    if (related.length === 0) return null

    return (
        <div className="flex flex-col gap-8 w-full lg:w-97 shrink-0">
            <MotionDiv delay={0.2}>
                <span className="text-5 text-text-disabled">{t('relatedArticle')}</span>
            </MotionDiv>
            <div className="flex flex-col gap-6">
                {related.map((item, index) => (
                    <MotionDiv key={index} delay={0.4 + index * 0.1} axis='y' spring>
                        <RelatedArticleCard key={item.slug} item={item} />
                    </MotionDiv>
                ))}
            </div>
        </div>
    )
}
