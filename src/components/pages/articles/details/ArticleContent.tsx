import { useLocale } from 'next-intl'
import type { ArticleItem } from '../types'
import ArticleConclusionCard from './ArticleConclusionCard'
import { pickLocale } from '@/lib/i18n/pickLocale'
import MotionDiv from '@/components/shared/motionDiv'

export default function ArticleContent({ item }: { item: ArticleItem }) {
    const locale = useLocale()
    const { sections, conclusion, author } = item.detail

    return (
        <div className="flex flex-col gap-16 w-full">
            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col gap-6">
                    <MotionDiv delay={0.2 + sectionIndex * 0.1}>
                        <h2 className="text-3 md:text-2 font-bold leading-3 md:leading-2 text-text-secondary">
                            {pickLocale(section.title, locale)}
                        </h2>
                    </MotionDiv>
                    <div className="flex flex-col gap-6 text-text-disabled">
                        {section.paragraphs.map((paragraph, index) => (
                            <MotionDiv delay={0.4 + sectionIndex * 0.1 + index * 0.1} key={index} className="text-6 md:text-5">
                                {pickLocale(paragraph, locale)}
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            ))}

            <ArticleConclusionCard conclusion={conclusion} author={author} />
        </div>
    )
}
