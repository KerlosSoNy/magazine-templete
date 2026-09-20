import Image from 'next/image'
import { useLocale } from 'next-intl'
import { pickLocale } from '@/lib/i18n/pickLocale'
import type { Locale } from '@/lib/i18n/locale'
import type { ServiceSubItem } from './types'

export default function ServiceSubItemCard({ item }: { item: ServiceSubItem }) {
    const locale = useLocale() as Locale

    return (
        <div className="flex gap-3 items-start">
            <Image src={item.icon} alt="" width={64} height={64} className="size-16 shrink-0" />
            <div className="flex flex-col gap-1">
                <span className="text-4 font-bold text-text-placeholder">{pickLocale(item.title, locale)}</span>
                <p className="text-6 text-text-disabled">{pickLocale(item.description, locale)}</p>
            </div>
        </div>
    )
}
