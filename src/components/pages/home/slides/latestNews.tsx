'use client'
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { AnimatePresence, motion } from "framer-motion"
import NewsCard from "../cards/news/NewsCard"
import { latestNews } from "../cards/news/dummy"

const ArrowLeft = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
        <path d="M13.3334 8H2.66675M2.66675 8L7.33341 3.33334M2.66675 8L7.33341 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
        <path d="M2.66675 8H13.3334M13.3334 8L8.66675 3.33334M13.3334 8L8.66675 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const VISIBLE_DESKTOP = 3
const VISIBLE_MOBILE = 2
const VISIBLE_SMALLMOBILE = 1
const MOBILE_BREAKPOINT = 1024
const SMALLMOBILE_BREAKPOINT = 640

const cardVariants = {
    initial: (direction: number) => ({ opacity: 0, x: direction >= 0 ? 32 : -32 }),
    animate: { opacity: 1, x: 0 },
    exit: (direction: number) => ({ opacity: 0, x: direction >= 0 ? -32 : 32 }),
}

function useVisibleCount() {
    const [count, setCount] = useState(VISIBLE_DESKTOP)

    useEffect(() => {
        const mobileMql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
        const smallMobileMql = window.matchMedia(`(max-width: ${SMALLMOBILE_BREAKPOINT - 1}px)`)

        const update = () => {
            if (smallMobileMql.matches) {
                setCount(VISIBLE_SMALLMOBILE)
            } else if (mobileMql.matches) {
                setCount(VISIBLE_MOBILE)
            } else {
                setCount(VISIBLE_DESKTOP)
            }
        }

        update()
        mobileMql.addEventListener("change", update)
        smallMobileMql.addEventListener("change", update)
        return () => {
            mobileMql.removeEventListener("change", update)
            smallMobileMql.removeEventListener("change", update)
        }
    }, [])

    return count
}

export default function LatestNews() {
    const t = useTranslations("HomePage.latestNews")
    const total = latestNews.length
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0])
    const VISIBLE = useVisibleCount()

    const step = (dir: 1 | -1) => {
        setIndex(([current]) => [(((current + dir) % total) + total) % total, dir])
    }

    const visibleCount = Math.min(VISIBLE, total)
    const visibleItems = Array.from({ length: visibleCount }, (_, i) => {
        const dataIndex = (index + i) % total
        return { ...latestNews[dataIndex], dataIndex }
    })

    const gridColsClass =
        visibleCount <= 1 ? "grid-cols-1" : visibleCount === 2 ? "grid-cols-3" : "grid-cols-4"

    return (
        <div className="w-screen h-fit pb-10 lg:pb-0 lg:h-screen overflow-hidden flex items-center justify-center pt-10 3xl:pt-0" data-nav-bg="white">
            <div className="container flex flex-col">
                <div className="flex items-center justify-between px-4 md:px-0">
                    <div className="flex flex-col items-start">
                        <span className="text-7 3xl:text-5 text-text-placeholder">{t("eyebrow")}</span>
                        <h2 className="text-3 3xl:text-1 font-bold leading-3 3xl:leading-1 text-text-secondary mt-2 3xl:mt-4">
                            {t("headingLead")} <span className="text-main">{t("headingHighlight")}</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label={t("prevAria")}
                            onClick={() => step(-1)}
                            className="w-8 md:w-11 h-8 md:h-11 rounded-lg bg-main flex items-center justify-center"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            type="button"
                            aria-label={t("nextAria")}
                            onClick={() => step(1)}
                            className="w-8 md:w-11 h-8 md:h-11 rounded-lg bg-main flex items-center justify-center"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div className={`grid ${gridColsClass} gap-5.25 mt-4 3xl:mt-8`}>
                    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                        {visibleItems.map((item, slot) => (
                            <motion.div
                                key={item.dataIndex}
                                layout
                                custom={direction}
                                variants={cardVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className={slot === 0 && visibleCount > 1 ? "col-span-2" : "col-span-1"}
                            >
                                <NewsCard item={item} large={slot === 0} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}