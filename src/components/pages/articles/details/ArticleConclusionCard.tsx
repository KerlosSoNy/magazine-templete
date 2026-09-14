import Image from 'next/image'
import type { ArticleAuthor, ArticleSection } from '../types'

export default function ArticleConclusionCard({ conclusion, author }: { conclusion: ArticleSection; author: ArticleAuthor }) {
    return (
        <div className="bg-[#E8EEED] rounded-xl p-8 md:p-12 flex flex-col gap-6">
            <h3 className="text-3 font-bold leading-3 text-text-secondary">{conclusion.title}</h3>
            <div className="flex flex-col gap-4 text-text-disabled">
                {conclusion.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-6 md:text-5">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="flex items-center gap-5">
                <div className="relative size-14 rounded-full overflow-hidden shrink-0">
                    <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-5 font-bold uppercase text-text-secondary">{author.name}</span>
                    <span className="text-6 text-text-placeholder">{author.role}</span>
                </div>
            </div>
        </div>
    )
}
