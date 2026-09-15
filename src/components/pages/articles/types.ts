import type { LocalizedText } from '@/lib/i18n/pickLocale'

export interface ArticleSection {
    title: LocalizedText
    paragraphs: LocalizedText[]
}

export interface ArticleAuthor {
    name: string
    role: LocalizedText
    avatar: string
}

export interface ArticleDetail {
    heroImage: string
    subtitle: LocalizedText
    summary: LocalizedText
    sections: ArticleSection[]
    conclusion: ArticleSection
    author: ArticleAuthor
}

export interface ArticleItem {
    industry: LocalizedText
    year: string
    title: LocalizedText
    slug: string
    href: string
    excerpt: LocalizedText
    image: string
    detail: ArticleDetail
}
