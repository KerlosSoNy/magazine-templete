import { getTranslations } from 'next-intl/server'
import CaseStudyResultCard from './CaseStudyResultCard'
import MotionDiv from '@/components/shared/motionDiv'

interface ResultStat {
    label: string
    value: string
    percent?: number
    description: string
}

export default async function CaseStudyResults() {
    const t = await getTranslations('CaseStudiesPage.results')
    const stats = t.raw('stats') as ResultStat[]

    return (
        <div className="w-full bg-secondary-bg">
            <div className="container mx-auto flex flex-col gap-16 py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-6 lg:max-w-160">
                        <MotionDiv delay={0.2}>
                            <span className="text-5 text-text-placeholder">{t('eyebrow')}</span>
                        </MotionDiv>
                        <MotionDiv delay={0.4}>
                            <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary">
                                {t('headingLead')} <span className="text-main">{t('headingHighlight')}</span>
                            </h2>
                        </MotionDiv>
                    </div>
                    <MotionDiv delay={0.6}>
                        <p className="text-6 md:text-5 text-text-placeholder max-w-140">
                            {t('summary')}
                        </p>
                    </MotionDiv>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <MotionDiv key={index} spring axis="y" delay={1 + index * 0.1}>
                            <CaseStudyResultCard key={stat.label} stat={stat} />
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </div>
    )
}
