'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useCareerApply } from '@/components/providers/CareerApplyProvider'
import { ArrowRightIcon, UploadIcon } from './icons'
import MotionDiv from '@/components/shared/motionDiv'

export default function CareerHero() {
    const { openUploadCv } = useCareerApply()
    const t = useTranslations('CareersPage.hero')

    return (
        <div className="relative container mx-auto flex flex-col gap-16 py-16 lg:py-20">
            <Image
                src="/images/careers/bg-watermark.png"
                alt=""
                width={689}
                height={618}
                aria-hidden
                className="hidden lg:block absolute -z-10 top-0 inset-e-0 opacity-5 mix-blend-luminosity pointer-events-none select-none"
            />

            <div className="flex flex-col xl:flex-row gap-10 xl:gap-24 xl:items-center">
                <MotionDiv delay={0.2} className="flex-1 text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary capitalize">
                    {t('heading')}
                </MotionDiv>
                <div className="flex-1 flex flex-col gap-9 xl:max-w-172.5">
                    <MotionDiv delay={0.4} axis="y" spring>
                        <p className="text-6 md:text-5 text-text-disabled">
                            {t('description')}
                        </p>
                    </MotionDiv>
                    <MotionDiv delay={0.6} axis="y" spring className="flex flex-wrap gap-6 items-center">
                        <a
                            href="#open-positions"
                            className="bg-main rounded-lg h-14 px-6 md:w-fit w-full flex items-center justify-center gap-2 font-bold text-5 text-white capitalize"
                        >
                            {t('seeOpenRoles')}
                            <ArrowRightIcon />
                        </a>
                        <button
                            type="button"
                            onClick={openUploadCv}
                            className="bg-[#e8eeed] border border-[#9fb7b4] md:w-fit w-full rounded-lg h-14 px-6 flex items-center justify-center gap-2 font-bold text-5 text-main capitalize"
                        >
                            <UploadIcon />
                            {t('uploadYourCv')}
                        </button>
                    </MotionDiv>
                </div>
            </div>

            <div className="flex shrink-0 flex-col sm:flex-row gap-6 lg:gap-10">
                <MotionDiv delay={0.7} axis="y" spring className="relative md:flex-1 h-72 md:h-96 lg:h-112 rounded-xl overflow-hidden">
                    <Image
                        src="/images/careers/hero-1.png"
                        alt={t('image1Alt')}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </MotionDiv>
                <MotionDiv delay={0.8} axis="y" spring className="relative md:flex-1 h-72 md:h-96 lg:h-112 rounded-xl overflow-hidden">
                    <Image
                        src="/images/careers/hero-2.png"
                        alt={t('image2Alt')}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </MotionDiv>
            </div>
        </div>
    )
}
