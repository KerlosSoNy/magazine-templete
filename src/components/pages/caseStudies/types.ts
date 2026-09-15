import type { LocalizedText } from '@/lib/i18n/pickLocale'

export interface CaseStudyStats {
    timeline: LocalizedText
    industry: LocalizedText
    serviceLine: LocalizedText
    client: LocalizedText
}

export interface CaseStudyChallenge {
    title: LocalizedText
    paragraphs: LocalizedText[]
    quote: LocalizedText
    quoteAuthor: string
    quoteRole: LocalizedText
}

export interface CaseStudyDetail {
    stats: CaseStudyStats
    challenge: CaseStudyChallenge
}

export interface CaseStudyItem {
    tags: [string, LocalizedText, LocalizedText]
    title: LocalizedText
    href: string
    slug: string
    description: LocalizedText
    subTitle: LocalizedText
    image: string
    detail: CaseStudyDetail
}
