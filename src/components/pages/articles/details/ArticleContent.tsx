import type { ArticleItem } from '../types'
import ArticleConclusionCard from './ArticleConclusionCard'

export default function ArticleContent({ item }: { item: ArticleItem }) {
    const { sections, conclusion, author } = item.detail

    return (
        <div className="flex flex-col gap-16 w-full">
            {sections.map((section) => (
                <div key={section.title} className="flex flex-col gap-6">
                    <h2 className="text-3 md:text-2 font-bold leading-3 md:leading-2 text-text-secondary">
                        {section.title}
                    </h2>
                    <div className="flex flex-col gap-6 text-text-disabled">
                        {section.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-6 md:text-5">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            ))}

            <ArticleConclusionCard conclusion={conclusion} author={author} />
        </div>
    )
}
