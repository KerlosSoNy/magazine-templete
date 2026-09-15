import Image from 'next/image'
import { useLocale } from 'next-intl'
import ReadMoreLink from './ReadMoreLink'
import type { ArticleItem } from './types'
import { pickLocale } from '@/lib/i18n/pickLocale'

export default function ArticleCard({ item }: { item: ArticleItem }) {
    const locale = useLocale()
    const title = pickLocale(item.title, locale)

    return (
        <div className="w-full flex flex-col gap-8">
            <div className="relative w-full h-70 md:h-97.5 rounded-xl overflow-hidden">
                <Image src={item.image} alt={title} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
                <h3 className="text-3 font-bold leading-3 text-text-secondary line-clamp-2">{title}</h3>
                <p className="text-5 text-text-disabled line-clamp-3">{pickLocale(item.excerpt, locale)}</p>
                <ReadMoreLink href={item.href} />
            </div>
        </div>
    )
}
