import { useLocale, useTranslations } from 'next-intl'
import { pickLocale } from '@/lib/i18n/pickLocale'
import { ArrowUpRightIcon, SuitcaseIcon } from './icons'
import type { JobPosition } from './types'

export default function JobPositionCard({ job, onApply }: { job: JobPosition; onApply: (job: JobPosition) => void }) {
    const locale = useLocale()
    const t = useTranslations('CareersPage.openPositions')
    const tEmploymentType = useTranslations('CareersPage.employmentType')
    const tWorkMode = useTranslations('CareersPage.workMode')

    return (
        <div className="border-b border-text-placeholder group hover:bg-main hover:shadow-xl hover:-translate-y-1 relative transition-all duration-500 ease-out">
            <div className="container flex lg:h-60 2xl:h-55 flex-col lg:flex-row md:items-start justify-between gap-6 py-8 mx-auto">
                <div className="flex flex-col h-full justify-between items-start gap-4 md:w-55 shrink-0">
                    <p className={`text-3 font-bold capitalize transition-colors duration-500 ${job.isOpen ? 'text-main group-hover:text-white' : 'text-text-disabled'}`}>
                        {job.isOpen ? t('statusOpen') : t('statusClosed')} <br className="lg:block hidden" /> {t('position')}
                    </p>
                    <div className="flex gap-2 items-center text-text-secondary group-hover:text-white flex-wrap transition-colors duration-500">
                        <SuitcaseIcon className="size-6 transition-transform duration-500 group-hover:scale-110" />
                        <span className="text-5">{tEmploymentType(job.employmentType)}</span>
                        <span className="text-5">/</span>
                        <span className="text-5">{tWorkMode(job.workMode)}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:gap-9 flex-1">
                    <h3 className="text-3 font-bold text-text-secondary group-hover:text-white capitalize transition-colors duration-500">{pickLocale(job.title, locale)}</h3>
                    <p title={pickLocale(job.description, locale)} className="text-5 text-text-disabled line-clamp-4 2xl:line-clamp-3 transition-colors duration-500">{pickLocale(job.description, locale)}</p>
                </div>

                <div className="shrink-0 self-start">
                    {job.isOpen ? (
                        <button type="button" onClick={() => onApply(job)} className="flex items-center gap-4">
                            <span className="text-3 font-bold text-black group-hover:text-white capitalize transition-colors duration-500">{t('apply')}</span>
                            <ArrowUpRightIcon className="size-6 text-black group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-180" />
                        </button>
                    ) : (
                        <span className="text-3 font-bold text-text-disabled capitalize">{t('statusClosed')}</span>
                    )}
                </div>
            </div>
        </div>
    )
}
