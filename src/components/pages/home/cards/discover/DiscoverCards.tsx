'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { pickLocale } from '@/lib/i18n/pickLocale'
import { dummyData } from './dummy'
import {
    cardVariants,
    contentVariants,
    descriptionVariants,
} from './variants'
import GenericButton from '@/components/buttons/genericButton'

export default function DiscoverCards() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const locale = useLocale()
    const t = useTranslations('Common.buttons')

    useEffect(() => {
        function handleOutsideClick(e: MouseEvent | TouchEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setActiveIndex(null)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)
        document.addEventListener('touchstart', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
            document.removeEventListener('touchstart', handleOutsideClick)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="container mt-10  h-fit  overflow-hidden lg:mt-14 flex-wrap lg:flex-nowrap grid grid-cols-2 lg:flex lg:h-90 3xl:h-121"
        >
            {dummyData?.map((item, index) => {
                const isActive = activeIndex === index

                return (
                    <motion.div
                        key={item.title.en + ' - ' + index}
                        initial="rest"
                        whileHover="hover"
                        animate={isActive ? 'hover' : 'rest'}
                        variants={cardVariants}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                        onClick={() =>
                            setActiveIndex(index)
                        }
                        className={`
                            relative h-60 cursor-pointer overflow-hidden
                            lg:h-full lg:shrink-0
                        `}
                        style={{
                            flexBasis: 0,
                        }}
                    >
                        <Image
                            fill
                            src={item.image}
                            alt={pickLocale(item.title, locale)}
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            className="object-cover"
                        />

                        <div className="absolute top-0 h-full w-full cursor-pointer bg-text-secondary opacity-60" />

                        <motion.div
                            variants={contentVariants}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                            }}
                            className="absolute inset-0 top-1/2 z-10 flex h-fit w-full -translate-y-1/2 flex-col items-center p-2 text-white 2xl:p-6"
                        >
                            <div className="mb-2">{item.icon}</div>

                            <h3 className="text-2 font-bold text-white">
                                {pickLocale(item.title, locale)}
                            </h3>

                            <motion.p
                                variants={descriptionVariants}
                                transition={{
                                    duration: 1.8,
                                    ease: 'easeInOut',
                                }}
                                className="mt-2 text-center text-7 md:text-5 leading-7 md:leading-5 text-white"
                            >
                                {pickLocale(item.description, locale)}
                            </motion.p>

                            <motion.div
                                variants={descriptionVariants}
                                transition={{
                                    duration: 1.8,
                                    ease: 'easeInOut',
                                }}
                                className="mt-4 text-center text-5 leading-5 text-white"
                            >
                                <GenericButton
                                    svgColor="stroke-white"
                                    titleClasses="text-white!"
                                    withoutBg
                                    title={t('discoverMore')}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )
            })}
        </div>
    )
}