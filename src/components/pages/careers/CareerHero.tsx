'use client'

import Image from 'next/image'
import { useCareerApply } from '@/components/providers/CareerApplyProvider'
import { ArrowRightIcon, UploadIcon } from './icons'

export default function CareerHero() {
    const { openUploadCv } = useCareerApply()

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
                <h1 className="flex-1 text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary capitalize">
                    Interested in becoming part of our team?
                </h1>
                <div className="flex-1 flex flex-col gap-9 xl:max-w-172.5">
                    <p className="text-6 md:text-5 text-text-disabled">
                        Join our dynamic team and unlock your potential with competitive benefits, continuous learning
                        opportunities, and a supportive work environment designed to help you thrive and grow. We value
                        innovation and encourage creativity in every project. Our team members enjoy flexible schedules and
                        a culture that promotes work-life balance. Together, we strive to make a meaningful impact in our
                        industry and community.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                        <a
                            href="#open-positions"
                            className="bg-main rounded-lg h-14 px-6 md:w-fit w-full flex items-center justify-center gap-2 font-bold text-5 text-white capitalize"
                        >
                            See open roles
                            <ArrowRightIcon />
                        </a>
                        <button
                            type="button"
                            onClick={openUploadCv}
                            className="bg-[#e8eeed] border border-[#9fb7b4] md:w-fit w-full rounded-lg h-14 px-6 flex items-center justify-center gap-2 font-bold text-5 text-main capitalize"
                        >
                            <UploadIcon />
                            Upload Your CV
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex shrink-0 flex-col sm:flex-row gap-6 lg:gap-10">
                <div className="relative md:flex-1 h-72 md:h-96 lg:h-112 rounded-xl overflow-hidden">
                    <Image
                        src="/images/careers/hero-1.png"
                        alt="Minds Advisory team collaborating in a meeting room"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
                <div className="relative md:flex-1 h-72 md:h-96 lg:h-112 rounded-xl overflow-hidden">
                    <Image
                        src="/images/careers/hero-2.png"
                        alt="Minds Advisory team members in a discussion"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
