import { getTranslations } from 'next-intl/server'
import ApproachStepCard from './ApproachStepCard'

interface ApproachStep {
    number: string
    title: string
    description: string
}

export default async function CaseStudyApproach() {
    const t = await getTranslations('CaseStudiesPage.approach')
    const steps = t.raw('steps') as ApproachStep[]

    return (
        <div className="w-full bg-main">
            <div className="container mx-auto flex flex-col gap-14 py-16 lg:py-42">
                <div className="flex flex-col gap-3 items-center text-center max-w-240 mx-auto">
                    <span className="text-5 text-white/80">{t('eyebrow')}</span>
                    <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-white">
                        {t('heading')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <ApproachStepCard key={step.number} step={step} />
                    ))}
                </div>
            </div>
        </div>
    )
}
