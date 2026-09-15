import { useTranslations } from 'next-intl'
import CaseStudyResultCard from './CaseStudyResultCard'

interface ResultStat {
    label: string
    value: string
    percent?: number
    description: string
}

export default function CaseStudyResults() {
    const t = useTranslations('CaseStudiesPage.results')
    const stats = t.raw('stats') as ResultStat[]

    return (
        <div className="w-full bg-secondary-bg">
            <div className="container mx-auto flex flex-col gap-16 py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-6 lg:max-w-160">
                        <span className="text-5 text-text-placeholder">{t('eyebrow')}</span>
                        <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary">
                            {t('headingLead')} <span className="text-main">{t('headingHighlight')}</span>
                        </h2>
                    </div>
                    <p className="text-6 md:text-5 text-text-placeholder max-w-140">
                        {t('summary')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <CaseStudyResultCard key={stat.label} stat={stat} />
                    ))}
                </div>
            </div>
        </div>
    )
}
