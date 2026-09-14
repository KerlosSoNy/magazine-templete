'use client'

import { useMemo, useState } from 'react'
import { jobPositions } from './dummy'
import { useCareerApply } from '@/components/providers/CareerApplyProvider'
import { ArrowUpRightIcon, SuitcaseIcon } from './icons'

const PAGE_SIZE = 3
const ALL_DEPARTMENTS = 'All Department'

export default function OpenPositions() {
    const { openApplyForm } = useCareerApply()
    const [department, setDepartment] = useState(ALL_DEPARTMENTS)
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

    const departments = useMemo(
        () => [ALL_DEPARTMENTS, ...Array.from(new Set(jobPositions.map((job) => job.department)))],
        []
    )

    const filteredJobs = useMemo(
        () => jobPositions.filter((job) => department === ALL_DEPARTMENTS || job.department === department),
        [department]
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
                    <span className="text-5 text-text-placeholder">We are Hiring</span>
                    <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary capitalize">
                        Be part of <span className="text-main">our mission</span>
                    </h2>
                    <div className="flex gap-4 items-center overflow-x-auto hide-scrollbar -mx-1 px-1">
                        {departments.map((dept) => {
                            const isActive = dept === department
                            return (
                                <button
                                    key={dept}
                                    type="button"
                                    onClick={() => handleDepartmentChange(dept)}
                                    className={`h-9 px-4 rounded-lg text-7 whitespace-nowrap shrink-0 transition-all duration-300 ${isActive ? 'bg-main text-white' : 'bg-secondary-bg text-text-placeholder hover:bg-secondary-bg/70'
                                        }`}
                                >
                                    {dept}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    {visibleJobs.map((job) => (
                        <div
                            key={job.id}
                            className="border-b border-text-placeholder group hover:bg-main hover:shadow-xl hover:-translate-y-1 relative transition-all duration-500 ease-out"
                        >
                            <div className="container flex lg:h-60 2xl:h-55 flex-col lg:flex-row md:items-start justify-between gap-6 py-8 mx-auto">
                                <div className="flex flex-col h-full justify-between items-start gap-4 md:w-55 shrink-0">
                                    <p className={`text-3 font-bold capitalize transition-colors duration-500 ${job.isOpen ? 'text-main group-hover:text-white' : 'text-text-disabled'}`}>
                                        {job.isOpen ? 'Open' : 'Closed'} <br className="lg:block hidden" /> Position
                                    </p>
                                    <div className="flex gap-2 items-center text-text-secondary group-hover:text-white flex-wrap transition-colors duration-500">
                                        <SuitcaseIcon className="size-6 transition-transform duration-500 group-hover:scale-110" />
                                        <span className="text-5">{job.employmentType}</span>
                                        <span className="text-5">/</span>
                                        <span className="text-5">{job.workMode}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 md:gap-9 flex-1">
                                    <h3 className="text-3 font-bold text-text-secondary group-hover:text-white capitalize transition-colors duration-500">{job.title}</h3>
                                    <p title={job.description} className="text-5 text-text-disabled line-clamp-4 2xl:line-clamp-3 transition-colors duration-500">{job.description}</p>
                                </div>

                                <div className="shrink-0 self-start">
                                    {job.isOpen ? (
                                        <button type="button" onClick={() => openApplyForm(job)} className="flex items-center gap-4">
                                            <span className="text-3 font-bold text-black group-hover:text-white capitalize transition-colors duration-500">Apply</span>
                                            <ArrowUpRightIcon className="size-6 text-black group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </button>
                                    ) : (
                                        <span className="text-3 font-bold text-text-disabled capitalize">Closed</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <button
                        type="button"
                        onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                        className="bg-[#e8eeed] border border-[#9fb7b4] rounded-lg h-14 px-6 font-bold text-5 text-main capitalize transition-all duration-300 hover:bg-[#dbe6e4] hover:scale-105"
                    >
                        Load More
                    </button>
                )}
            </div>
        </div>
    )
}