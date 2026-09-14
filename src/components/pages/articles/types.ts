export interface ArticleSection {
    title: string
    paragraphs: string[]
}

export interface ArticleAuthor {
    name: string
    role: string
    avatar: string
}

export interface ArticleDetail {
    heroImage: string
    subtitle: string
    summary: string
    sections: ArticleSection[]
    conclusion: ArticleSection
    author: ArticleAuthor
}

export interface ArticleItem {
    industry: string
    year: string
    title: string
    slug: string
    href: string
    excerpt: string
    image: string
    detail: ArticleDetail
}
