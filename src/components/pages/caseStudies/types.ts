export interface CaseStudyStats {
    timeline: string
    industry: string
    serviceLine: string
    client: string
}

export interface CaseStudyChallenge {
    title: string
    paragraphs: string[]
    quote: string
    quoteAuthor: string
    quoteRole: string
}

export interface CaseStudyDetail {
    stats: CaseStudyStats
    challenge: CaseStudyChallenge
}

export interface CaseStudyItem {
    tags: string[]
    title: string
    href: string
    slug: string
    description: string
    subTitle: string
    image: string
    detail: CaseStudyDetail
}
