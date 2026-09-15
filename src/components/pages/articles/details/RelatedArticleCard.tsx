import Image from 'next/image'
import { useLocale } from 'next-intl'
import ReadMoreLink from '../ReadMoreLink'
import type { ArticleItem } from '../types'
import { pickLocale } from '@/lib/i18n/pickLocale'

export default function RelatedArticleCard({ item }: { item: ArticleItem }) {
    const locale = useLocale()
    const title = pickLocale(item.title, locale)

    return (
        <div className="bg-secondary-bg rounded-lg p-6 flex flex-col gap-5">
            <div className="relative w-22.5 h-20 rounded-lg overflow-hidden">
                <Image src={item.image} alt={title} fill className="object-cover" />
            </div>
            <h3 className="text-3 font-bold leading-3 text-text-secondary line-clamp-2">{title}</h3>
            <p className="text-5 text-text-disabled line-clamp-3">{pickLocale(item.excerpt, locale)}</p>
            <ReadMoreLink href={item.href} />
        </div>
    )
}
