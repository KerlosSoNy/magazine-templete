import type { LocalizedText } from '@/lib/i18n/pickLocale'

export interface MediaCoverageItem {
    slug: string
    title: LocalizedText
    source: LocalizedText
    images: string[]
}
