import Image from 'next/image'
import ReadMoreLink from '../ReadMoreLink'
import type { ArticleItem } from '../types'

export default function RelatedArticleCard({ item }: { item: ArticleItem }) {
    return (
        <div className="bg-secondary-bg rounded-lg p-6 flex flex-col gap-5">
            <div className="relative w-22.5 h-20 rounded-lg overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <h3 className="text-3 font-bold leading-3 text-text-secondary line-clamp-2">{item.title}</h3>
            <p className="text-5 text-text-disabled line-clamp-3">{item.excerpt}</p>
            <ReadMoreLink href={item.href} />
        </div>
    )
}
