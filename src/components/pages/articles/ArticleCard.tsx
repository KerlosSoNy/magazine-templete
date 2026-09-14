import Image from 'next/image'
import ReadMoreLink from './ReadMoreLink'
import type { ArticleItem } from './types'

export default function ArticleCard({ item }: { item: ArticleItem }) {
    return (
        <div className="w-full flex flex-col gap-8">
            <div className="relative w-full h-70 md:h-97.5 rounded-xl overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="text-3 font-bold leading-3 text-text-secondary line-clamp-2">{item.title}</h3>
                <p className="text-5 text-text-disabled line-clamp-3">{item.excerpt}</p>
                <ReadMoreLink href={item.href} />
            </div>
        </div>
    )
}
