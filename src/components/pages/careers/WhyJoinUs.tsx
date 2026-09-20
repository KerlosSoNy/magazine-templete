'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { whyJoinUsSteps } from './dummy'
import WhyJoinUsStepCard from './WhyJoinUsStepCard'
import MotionDiv from '@/components/shared/motionDiv'

export default function WhyJoinUs() {
    const t = useTranslations('CareersPage.whyJoinUs')
    const sectionRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const stickyRef = useRef<HTMLDivElement>(null)
    const rightColRef = useRef<HTMLDivElement>(null)

    const [travelDistance, setTravelDistance] = useState(0)
    const { scrollYProgress: containerProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    const translateY = useTransform(containerProgress, [0, 1.2], [0, travelDistance])

    useEffect(() => {
        function measure() {
            const stickyHeight = stickyRef.current?.offsetHeight ?? 0
            const rightHeight = rightColRef.current?.offsetHeight ?? 0
            setTravelDistance(Math.max(rightHeight - stickyHeight, 0))
        }

        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    return (
        <div ref={sectionRef} className="relative w-full bg-main">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                    src="/images/careers/why-join-us-pattern.svg"
                    alt=""
                    width={400}
                    height={400}
                    aria-hidden
                    className="hidden lg:block absolute -z-0 bottom-0 inset-s-0 opacity-10 select-none"
                />
            </div>

            <div
                ref={containerRef}
                className="relative container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 py-16 lg:py-20 lg:items-start"
            >
                <div className="lg:w-1/2 flex flex-col gap-8 lg:gap-10">

                    <motion.div
                        ref={stickyRef}
                        style={{ translateY }}
                        className="lg:sticky lg:top-24 flex flex-col gap-8 lg:gap-10"
                    >
                        <MotionDiv as='h2' delay={0.2} className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-white capitalize">
                            {t('heading')}
                        </MotionDiv>
                        <MotionDiv delay={0.4} className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
                            <motion.div className="absolute inset-x-0 -top-20 -bottom-20">
                                <Image
                                    src="/images/careers/why-join-us.png"
                                    alt={t('imageAlt')}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </MotionDiv>
                        <MotionDiv delay={0.6} as='p' className="text-6 md:text-5 text-white">
                            {t('description')}
                        </MotionDiv>
                    </motion.div>
                </div>

                <div ref={rightColRef} className="lg:w-1/2 flex flex-col">
                    {whyJoinUsSteps.map((step, index) => (
                        <MotionDiv key={step.number} delay={1 + index * 0.1} axis="x" spring>
                            <WhyJoinUsStepCard
                                key={step.number}
                                step={step}
                                isLast={index === whyJoinUsSteps.length - 1}
                            />
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </div>
    )
}