import Image from 'next/image'
import Link from 'next/link'
import { getLocale, getTranslations } from 'next-intl/server'
import { XOutlineIcon, LinkedInOutlineIcon } from '@/components/pages/contactUs/getInTouch/icons'
import type { ArticleItem } from '../types'
import { pickLocale } from '@/lib/i18n/pickLocale'
import MotionDiv from '@/components/shared/motionDiv'

export default async function ArticleHero({ item }: { item: ArticleItem }) {
    const locale = await getLocale()
    const tNav = await getTranslations('Common.nav')
    const tArticles = await getTranslations('ArticlesPage')
    const tDetail = await getTranslations('ArticlesPage.detail')

    const title = pickLocale(item.title, locale)

    return (
        <div className="bg-main flex flex-col mb-20">
            <div className="container mx-auto flex flex-col gap-8 pt-14 pb-16 lg:pb-20">
                <MotionDiv delay={0.2}>
                    <nav className="flex flex-wrap items-center gap-3 text-6 text-white/70">
                        <Link href="/" className="hover:text-white transition-colors">{tNav('home')}</Link>
                        <span>/</span>
                        <Link href="/articles" className="hover:text-white transition-colors">{tArticles('pageTitle')}</Link>
                        <span>/</span>
                        <span className="text-white">{title}</span>
                    </nav>
                </MotionDiv>
                <div className="flex flex-col gap-6">
                    <MotionDiv delay={0.4}>
                        <h1 className="text-2 md:text-1 font-bold leading-2 md:leading-1 text-white">
                            {title}
                        </h1>
                    </MotionDiv>
                    <MotionDiv delay={0.6}>
                        <p className="text-5 text-white/70">{pickLocale(item.detail.summary, locale)}</p>
                    </MotionDiv>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-2 lg:gap-14">
                <MotionDiv delay={0.8} className="relative w-full xl:w-180 2xl:w-215.5 3xl:w-265.5 h-80 md:h-105 lg:-mb-20 xl:h-171.5  overflow-hidden">
                    <Image
                        src={item.detail.heroImage}
                        alt={title}
                        fill
                        sizes="(min-width: 1920px) 1062px, (min-width: 1440px) 862px, (min-width: 1280px) 720px, 100vw"
                        className="object-cover"
                        priority
                    />
                </MotionDiv>
                <div className="flex flex-col w-[84%] md:w-[calc(100%-9rem)] mx-auto xl:mx-0 xl:w-121 shrink-0 pt-16 justify-between gap-10 rounded-xl mb-25">
                    <div className="flex flex-col gap-2">
                        <MotionDiv delay={1}>
                            <span className="text-5 text-white/60">{tDetail('shareThisArticle')}</span>
                        </MotionDiv>
                        <MotionDiv delay={1.2}>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    aria-label={tDetail('shareOnX')}
                                    className="flex items-center justify-center size-10 rounded-lg bg-main text-white hover:opacity-80 transition-opacity"
                                >
                                    <XOutlineIcon />
                                </a>
                                <a
                                    href="#"
                                    aria-label={tDetail('shareOnLinkedIn')}
                                    className="flex items-center justify-center size-10 rounded-lg bg-main text-white hover:opacity-80 transition-opacity"
                                >
                                    <LinkedInOutlineIcon />
                                </a>
                            </div>
                        </MotionDiv>
                    </div>
                    <div className="flex flex-col gap-6">
                        <MotionDiv delay={1.4}>
                            <h2 className="text-3 md:text-2 line-clamp-4 font-bold leading-3 md:leading-2 text-white">
                                {pickLocale(item.detail.subtitle, locale)}
                            </h2>
                        </MotionDiv>
                        <MotionDiv delay={1.6}>
                            <p className="text-5 text-white/70 line-clamp-4">{pickLocale(item.excerpt, locale)}</p>
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </div>
    )
}
