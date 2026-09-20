'use client'
import { useState, useRef, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import GenericButton from '@/components/buttons/genericButton'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { pickLocale } from '@/lib/i18n/pickLocale'
import type { CaseStudyItem } from '@/components/pages/caseStudies/types'
import { bottomButton, hiddenDiv } from './variants'

export default function CaseCard({ item, index }: { item: CaseStudyItem, index: number }) {
    const [isActive, setIsActive] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)
    const locale = useLocale()
    const t = useTranslations('Common.buttons')

    useEffect(() => {
        function handleOutsideClick(e: MouseEvent | TouchEvent) {
            if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
                setIsActive(false)
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
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
        >
            <motion.div
                ref={cardRef}
                initial="rest"
                whileHover="hover"
                animate={isActive ? 'hover' : 'rest'}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onClick={() => setIsActive((prev) => !prev)}
                className="relative h-100 3xl:h-130.5 w-full flex flex-col items-start">
                <span className="md:h-11 lg:h-fit text-[12px] lg:text-7 2xl:text-6 text-text-secondary text-start tracking-wide">{[item?.tags?.[0], pickLocale(item?.tags?.[1], locale), pickLocale(item?.tags?.[2], locale)].join("  -  ")}</span>
                <h2 className="text-5 lg:text-3 3xl:text-2 leading-3 3xl:leading-2 text-text-secondary md:mt-2 3xl:mt-3.5 font-bold text-start">{pickLocale(item?.title, locale)}</h2>
                <div className="relative overflow-hidden rounded-xl w-full h-82.5">
                    <Image
                        src={item?.image}
                        alt={pickLocale(item?.title, locale)}
                        width={460}
                        height={329}
                        className="w-full h-82.5 object-cover mt-4 rounded-xl"
                    />
                    <motion.div
                        variants={hiddenDiv}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="absolute bottom-0 bg-[#0E3832] w-full text-start h-fit z-10 rounded-xl p-6 flex flex-col">
                        <span className="font-bold text-white text-7 lg:text-5">{pickLocale(item?.subTitle, locale)}</span>
                        <p className="text-text-disabled leading-[12px] lg:text-6 lg:leading-6 line-clamp-3 mt-2 mb-4">{pickLocale(item?.description, locale)}</p>
                        <GenericButton title={t('discoverMore')} href={item?.href} />
                    </motion.div>
                </div>
                <motion.div
                    variants={bottomButton}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <GenericButton mainClasses="p-0! lg:mt-3" svgColor="stroke-main" titleClasses="text-main!" title={t('discoverMore')} href={item?.href} withoutBg withoutBorder />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}