'use client'

import { ChangeEvent, useMemo, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import SelectField from '@/components/inputs/Selectfield'
import GenericButton from '@/components/buttons/genericButton'
import { articles } from './dummy'
import ArticleCard from './ArticleCard'
import { pickLocale } from '@/lib/i18n/pickLocale'

const PAGE_SIZE = 6
const FEATURED_COUNT = 3

export default function ArticlesList() {
    const t = useTranslations('ArticlesPage.list')
    const locale = useLocale()

    const [industry, setIndustry] = useState('')
    const [year, setYear] = useState('')
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

    const industryOptions = useMemo(() => {
        const seen = new Map<string, string>()
        articles.forEach((item) => {
            if (!seen.has(item.industry.en)) {
                seen.set(item.industry.en, pickLocale(item.industry, locale))
            }
        })
        return Array.from(seen.entries()).map(([value, label]) => ({ value, label }))
    }, [locale])

    const yearOptions = useMemo(
        () => Array.from(new Set(articles.map((item) => item.year))).map((value) => ({ value, label: value })),
        []
    )

    const filtered = useMemo(
        () =>
            articles.filter(
                (item) =>
                    (!industry || item.industry.en === industry) &&
                    (!year || item.year === year)
            ),
        [industry, year]
    )

    const gridItems = filtered.slice(0, visibleCount)
    const hasMore = filtered.length > visibleCount

    function handleFilterChange(setter: (value: string) => void) {
        return (e: ChangeEvent<HTMLSelectElement>) => {
            setter(e.target.value)
            setVisibleCount(PAGE_SIZE)
        }
    }

    return (
        <div id="articles" className="container mx-auto flex flex-col gap-16 py-16 lg:py-20">
            <div className="flex flex-col gap-8 md:gap-11">
                <span className="text-5 text-text-placeholder">{t('eyebrow')}</span>
                <h1 className="text-2 md:text-1 font-bold leading-2 md:leading-1 text-text-secondary max-w-220">
                    {t('heading')} <span className="text-main">{t('headingHighlight')}</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {articles.slice(0, FEATURED_COUNT).map((item, index: number) => (
                    <div key={index} className={`${index === 0 && 'md:col-span-2'}`}>
                        <ArticleCard item={item} key={item.slug} />
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-16 border-t border-text-disabled pt-4 lg:pt-16">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <h2 className="text-2 md:text-1 font-bold leading-2 md:leading-1 text-text-secondary">
                        {t('allHeading')} <span className="text-main">{t('allHeadingHighlight')}</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-140">
                        <SelectField
                            srOnly={false}
                            id="articles-industry"
                            name="industry"
                            label={t('filterIndustry')}
                            value={industry}
                            onChange={handleFilterChange(setIndustry)}
                            options={industryOptions}
                        />
                        <SelectField
                            srOnly={false}
                            id="articles-year"
                            name="year"
                            label={t('filterYear')}
                            value={year}
                            onChange={handleFilterChange(setYear)}
                            options={yearOptions}
                        />
                    </div>
                </div>

                {gridItems.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                        {gridItems.map((item) => (
                            <ArticleCard item={item} key={item.slug} />
                        ))}
                    </div>
                )}

                {hasMore && (
                    <GenericButton
                        title={t('loadMore')}
                        withoutIcon
                        revertColors
                        mainClasses="self-center px-10!"
                        onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                    />
                )}
            </div>
        </div>
    )
}
