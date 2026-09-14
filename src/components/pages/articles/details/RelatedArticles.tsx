import Image from 'next/image'
import { articles } from '../dummy'
import ReadMoreLink from '../ReadMoreLink'
import type { ArticleItem } from '../types'

export default function RelatedArticles({ current }: { current: ArticleItem }) {
    const related = articles.filter((item) => item.slug !== current.slug).slice(0, 3)

    if (related.length === 0) return null

    return (
        <div className="flex flex-col gap-8 w-full lg:w-97 shrink-0">
            <span className="text-5 text-text-disabled">Related Article</span>
            <div className="flex flex-col gap-6">
                {related.map((item) => (
                    <div key={item.slug} className="bg-secondary-bg rounded-lg p-6 flex flex-col gap-5">
                        <div className="relative w-22.5 h-20 rounded-lg overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <h3 className="text-3 font-bold leading-3 text-text-secondary line-clamp-2">{item.title}</h3>
                        <p className="text-5 text-text-disabled line-clamp-3">{item.excerpt}</p>
                        <ReadMoreLink href={item.href} />
                    </div>
                ))}
            </div>
        </div>
    )
}
