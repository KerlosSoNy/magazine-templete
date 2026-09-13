'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DarkCalendarIcon } from '@/components/icons/icons'
import MilestoneCard from './Cards/MilestoneCard'
import { AboutUsIconLegacySection } from '@/components/icons/aboutUs'

const milestones = [
    {
        year: '2021',
        title: 'Ideation',
        points: [
            'First Business Excellence expertise initiated within Al-Muhaidib Group as custodian of best practices',
            'First steps going live with 4 projects within an investment vertical',
            'Value recognized by clients creating pull for more support',
        ],
    },
    {
        year: '2022',
        title: 'Scaling',
        points: [
            'Completed over 10 projects within the Food & Consumer sector',
            'Recognized from Al-Muhaidib group for its impactful efforts',
            'Initiated additional services',
        ],
    },
    {
        year: '2023',
        title: 'Expansion',
        points: [
            'Expanded the team to increase reach of value creation',
            'Completed over 27 projects',
            'Refining the services into specialized pillars to tailor for needs',
        ],
    },
    {
        year: '2024',
        title: 'Carve-out',
        points: [
            'Firm legal establishment & successful initiation of operations',
            'Completed over 17 projects',
            "Set and commenced the firm's long-term strategy",
            "Firm's first Board of Directors assembly for direction and guidance",
        ],
    },
]

export default function Legacy() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })
    const y = useTransform(scrollYProgress, [0, 1], [-80, 80])

    return (
        <div ref={sectionRef} className="w-screen flex flex-col items-center py-16 lg:py-24 bg-white relative px-4 sm:px-8 lg:px-0">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AboutUsIconLegacySection />
            </div>

            <h2 className="text-3 md:text-2 lg:text-1 font-bold text-text-secondary text-center leading-3 md:leading-2 lg:leading-1 z-2">
                A Legacy of Excellence<br />
                and <span className="text-main">Impact</span>
            </h2>
            <span className="text-6 md:text-5 font-bold text-text-secondary text-center mt-4 z-2">Explore the Milestones That Define Our Journey</span>

            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14 items-start z-2">
                <div className="lg:sticky lg:top-24 w-full max-w-114.25 lg:max-w-none lg:w-[457.06px] justify-self-center lg:justify-self-end">
                    <div className="relative h-72 sm:h-90 lg:h-[677.77px] lg:min-h-[677.77px] rounded-xl overflow-hidden">
                        <motion.div style={{ y }} className="absolute inset-x-0 -top-24 -bottom-24">
                            <Image
                                src="/images/about/hand.jpg"
                                alt="Handshake symbolizing partnership"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="relative flex flex-col gap-20">
                    <div className="absolute left-5 top-4 bottom-3.5 w-px bg-[#EAE9E9]" />
                    {milestones.map((milestone) => (
                        <div key={milestone.year} className="relative flex gap-4 items-start">
                            <span className="relative z-10 mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAE9E9]">
                                <DarkCalendarIcon />
                            </span>
                            <MilestoneCard {...milestone} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}