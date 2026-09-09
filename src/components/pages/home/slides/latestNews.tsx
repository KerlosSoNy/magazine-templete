'use client'
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import NewsCard from "../cards/news/NewsCard"
import { latestNews } from "../cards/news/dummy"

const ArrowLeft = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3334 8H2.66675M2.66675 8L7.33341 3.33334M2.66675 8L7.33341 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66675 8H13.3334M13.3334 8L8.66675 3.33334M13.3334 8L8.66675 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const VISIBLE = 3

const cardVariants = {
    initial: (direction: number) => ({ opacity: 0, x: direction >= 0 ? 32 : -32 }),
    animate: { opacity: 1, x: 0 },
    exit: (direction: number) => ({ opacity: 0, x: direction >= 0 ? -32 : 32 }),
}

export default function LatestNews() {
    const total = latestNews.length
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0])

    const step = (dir: 1 | -1) => {
        setIndex(([current]) => [(((current + dir) % total) + total) % total, dir])
    }

    const visibleCount = Math.min(VISIBLE, total)
    const visibleItems = Array.from({ length: visibleCount }, (_, i) => {
        const dataIndex = (index + i) % total
        return { ...latestNews[dataIndex], dataIndex }
    })

    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center" data-nav-bg="white">
            <div className="max-w-355.5 w-355.5 flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <span className="text-5 text-text-placeholder">News & Insight</span>
                        <h2 className="text-1 font-bold leading-1 text-text-secondary mt-4">
                            Latest News & <span className="text-main">Announcement</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous news"
                            onClick={() => step(-1)}
                            className="w-11 h-11 rounded-lg bg-main flex items-center justify-center"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            type="button"
                            aria-label="Next news"
                            onClick={() => step(1)}
                            className="w-11 h-11 rounded-lg bg-main flex items-center justify-center"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5.25 mt-8">
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
                                className={slot === 0 ? "col-span-2" : "col-span-1"}
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
