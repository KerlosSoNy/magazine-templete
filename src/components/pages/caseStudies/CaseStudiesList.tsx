'use client'

import { ChangeEvent, useMemo, useState } from 'react'
import SelectField from '@/components/inputs/Selectfield'
import GenericButton from '@/components/buttons/genericButton'
import { ourCase } from '@/components/pages/home/cards/case/dummy'
import FeaturedCaseCard from './FeaturedCaseCard'
import CaseStudyCard from './CaseStudyCard'

const PAGE_SIZE = 6

export default function CaseStudiesList() {
    const [service, setService] = useState('')
    const [year, setYear] = useState('')
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

    const serviceOptions = useMemo(
        () => Array.from(new Set(ourCase.map((item) => item.tags[2]))).map((value) => ({ value, label: value })),
        []
    )
    const yearOptions = useMemo(
        () => Array.from(new Set(ourCase.map((item) => item.tags[0]))).map((value) => ({ value, label: value })),
        []
    )

    const filtered = useMemo(
        () =>
            ourCase.filter(
                (item) =>
                    (!service || item.tags[2] === service) &&
                    (!year || item.tags[0] === year)
            ),
        [service, year]
    )

    const [featured, ...rest] = filtered
    const gridItems = rest.slice(0, visibleCount)
    const hasMore = rest.length > visibleCount

    function handleFilterChange(setter: (value: string) => void) {
        return (e: ChangeEvent<HTMLSelectElement>) => {
            setter(e.target.value)
            setVisibleCount(PAGE_SIZE)
        }
    }

    return (
        <div id="case-studies" className="container mx-auto flex flex-col gap-16 py-16 lg:py-20">
            <div className="flex flex-col gap-8 md:gap-11">
                <span className="text-5 text-text-placeholder">Our Case studies</span>
                <h1 className="text-2 md:text-1 font-bold leading-2 md:leading-1 text-text-secondary max-w-220">
                    <span className="text-main">Custom Solutions</span> That Accelerate Your Success
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 -mt-6 max-w-140">
                    <SelectField
                        srOnly={false}
                        id="case-studies-service"
                        name="service"
                        label="Filter by Services"
                        value={service}
                        onChange={handleFilterChange(setService)}
                        options={serviceOptions}
                    />
                    <SelectField
                        id="case-studies-year"
                        name="year"
                        srOnly={false}
                        label="Filter by Year"
                        value={year}
                        onChange={handleFilterChange(setYear)}
                        options={yearOptions}
                    />
                </div>
            </div>

            {featured && <FeaturedCaseCard item={featured} />}

            {gridItems.length > 0 && (
                <div className="flex flex-col gap-16 border-t border-text-disabled pt-4 lg:pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-6 lg:gap-y-16">
                        {gridItems.map((item, index) => (
                            <CaseStudyCard item={item} key={item.title + index} />
                        ))}
                    </div>

                    {hasMore && (
                        <GenericButton
                            title="Load More"
                            withoutIcon
                            revertColors
                            mainClasses="self-center px-10!"
                            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                        />
                    )}
                </div>
            )}
        </div>
    )
}
