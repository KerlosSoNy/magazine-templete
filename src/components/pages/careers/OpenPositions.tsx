'use client'

import { useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { jobPositions } from './dummy'
import { useCareerApply } from '@/components/providers/CareerApplyProvider'
import { pickLocale } from '@/lib/i18n/pickLocale'
import JobPositionCard from './JobPositionCard'
import MotionDiv from '@/components/shared/motionDiv'

const PAGE_SIZE = 3
const ALL_DEPARTMENTS = '__all__'

export default function OpenPositions() {
    const { openApplyForm } = useCareerApply()
    const locale = useLocale()
    const t = useTranslations('CareersPage.openPositions')
    const [department, setDepartment] = useState(ALL_DEPARTMENTS)
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

    const departments = useMemo(
        () => [
            ALL_DEPARTMENTS,
            ...Array.from(new Set(jobPositions.map((job) => pickLocale(job.department, locale)))),
        ],
        [locale]
    )

    const filteredJobs = useMemo(
        () =>
            jobPositions.filter(
                (job) => department === ALL_DEPARTMENTS || pickLocale(job.department, locale) === department
            ),
        [department, locale]
    )

    const visibleJobs = filteredJobs.slice(0, visibleCount)
    const hasMore = filteredJobs.length > visibleCount

    function handleDepartmentChange(value: string) {
        setDepartment(value)
        setVisibleCount(PAGE_SIZE)
    }

    return (
        <div id="open-positions" className="bg-white">
            <div className=" mx-auto flex flex-col items-center gap-16 py-16 lg:py-20">
                <div className="flex container flex-col gap-9 w-full">
                    <MotionDiv as="span" delay={0.2} className="text-5 text-text-placeholder">{t('eyebrow')}</MotionDiv>
                    <MotionDiv as="h1" delay={0.4} className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary capitalize">
                        {t('headingPrefix')} <span className="text-main">{t('headingHighlight')}</span>
                    </MotionDiv>
                    <div className="flex gap-4 items-center overflow-x-auto hide-scrollbar -mx-1 px-1">
                        {departments.map((dept, index) => {
                            const isActive = dept === department
                            return (
                                <MotionDiv key={index} delay={0.6 + index * 0.1}>
                                    <button
                                        key={dept}
                                        type="button"
                                        onClick={() => handleDepartmentChange(dept)}
                                        className={`h-9 px-4 rounded-lg text-7 whitespace-nowrap shrink-0 transition-all duration-300 ${isActive ? 'bg-main text-white' : 'bg-secondary-bg text-text-placeholder hover:bg-secondary-bg/70'
                                            }`}
                                    >
                                        {dept === ALL_DEPARTMENTS ? t('allDepartments') : dept}
                                    </button>
                                </MotionDiv>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    {visibleJobs.map((job, index) => (
                        <MotionDiv key={index} delay={0.6 + index * 0.1} axis="x" spring>
                            <JobPositionCard key={job.id} job={job} onApply={openApplyForm} />
                        </MotionDiv>
                    ))}
                </div>

                {hasMore && (
                    <button
                        type="button"
                        onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                        className="bg-[#e8eeed] border border-[#9fb7b4] rounded-lg h-14 px-6 font-bold text-5 text-main capitalize transition-all duration-300 hover:bg-[#dbe6e4] hover:scale-105"
                    >
                        {t('loadMore')}
                    </button>
                )}
            </div>
        </div>
    )
}