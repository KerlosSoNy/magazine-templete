'use client'

import { useRef, useState, useEffect } from 'react'
import ArticleContent from './ArticleContent'
import RelatedArticles from './RelatedArticles'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ArticleDetailsContainer({ item }: any) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useEffect(() => {
        const mql = window.matchMedia('(min-width: 1024px)') // Tailwind `lg`
        const update = () => setIsLargeScreen(mql.matches)

        update()
        mql.addEventListener('change', update)
        return () => mql.removeEventListener('change', update)
    }, [])

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const yRaw = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 700])

    // Freeze at 0 on small screens instead of tracking scroll
    const y = useTransform(() => (isLargeScreen ? yRaw.get() : 0))

    return (
        <div
            ref={sectionRef}
            id="article-content"
            className="container relative mx-auto flex flex-col lg:flex-row gap-16 py-4 md:py-16 lg:py-20"
        >
            <ArticleContent item={item} />

            <aside className="w-full lg:w-104 shrink-0">
                <div className="sticky top-24">
                    <motion.div style={{ y }}>
                        <RelatedArticles current={item} />
                    </motion.div>
                </div>
            </aside>
        </div>
    )
}