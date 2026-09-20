import Image from 'next/image'
import { useLocale } from 'next-intl'
import type { ArticleAuthor, ArticleSection } from '../types'
import { pickLocale } from '@/lib/i18n/pickLocale'
import MotionDiv from '@/components/shared/motionDiv';

export default function ArticleConclusionCard({ conclusion, author }: { conclusion: ArticleSection; author: ArticleAuthor }) {
    const locale = useLocale()

    return (
        <div className="bg-[#E8EEED] rounded-xl p-8 md:p-12 flex flex-col gap-6">
            <MotionDiv delay={0.2}>
                <h3 className="text-3 font-bold leading-3 text-text-secondary">{pickLocale(conclusion.title, locale)}</h3>
            </MotionDiv>
            <div className="flex flex-col gap-4 text-text-disabled">
                {conclusion.paragraphs.map((paragraph, index) => (
                    <MotionDiv delay={0.4 + index * 0.1} key={index} className="text-6 md:text-5">
                        {pickLocale(paragraph, locale)}
                    </MotionDiv>
                ))}
            </div>
            <div className="flex items-center gap-5">
                <MotionDiv delay={0.6} className="relative size-14 rounded-full overflow-hidden shrink-0">
                    <Image src={author.avatar} alt={author.name} fill sizes="56px" className="object-cover" />
                </MotionDiv>
                <div className="flex flex-col gap-1">
                    <MotionDiv delay={0.8}>
                        <span className="text-5 font-bold uppercase text-text-secondary">{author.name}</span>
                    </MotionDiv>
                    <MotionDiv delay={1}>
                        <span className="text-6 text-text-placeholder">{pickLocale(author.role, locale)}</span>
                    </MotionDiv>
                </div>
            </div>
        </div>
    )
}
