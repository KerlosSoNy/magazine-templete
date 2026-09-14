import Image from 'next/image'
import Link from 'next/link'
import { XOutlineIcon, LinkedInOutlineIcon } from '@/components/pages/contactUs/getInTouch/icons'
import type { ArticleItem } from '../types'

export default function ArticleHero({ item }: { item: ArticleItem }) {
    return (
        <div className="bg-main flex flex-col mb-20">
            <div className="container mx-auto flex flex-col gap-8 pt-14 pb-16 lg:pb-20">
                <nav className="flex flex-wrap items-center gap-3 text-6 text-white/70">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/articles" className="hover:text-white transition-colors">Industry Articles</Link>
                    <span>/</span>
                    <span className="text-white">{item.title}</span>
                </nav>
                <div className="flex flex-col gap-6">
                    <h1 className="text-2 md:text-1 font-bold leading-2 md:leading-1 text-white">
                        {item.title}
                    </h1>
                    <p className="text-5 text-white/70">{item.detail.summary}</p>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-2 lg:gap-14">
                <div className="relative w-full xl:w-180 2xl:w-215.5 3xl:w-265.5 h-80 md:h-105 lg:-mb-20 xl:h-171.5  overflow-hidden">
                    <Image src={item.detail.heroImage} alt={item.title} fill className="object-cover" priority />
                </div>
                <div className="flex flex-col w-[84%] md:w-[calc(100%-9rem)] mx-auto xl:mx-0 xl:w-121 shrink-0 pt-16 justify-between gap-10 rounded-xl mb-25">
                    <div className="flex flex-col gap-2">
                        <span className="text-5 text-white/60">Share this article</span>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                aria-label="Share on X"
                                className="flex items-center justify-center size-10 rounded-lg bg-main text-white hover:opacity-80 transition-opacity"
                            >
                                <XOutlineIcon />
                            </a>
                            <a
                                href="#"
                                aria-label="Share on LinkedIn"
                                className="flex items-center justify-center size-10 rounded-lg bg-main text-white hover:opacity-80 transition-opacity"
                            >
                                <LinkedInOutlineIcon />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3 md:text-2 line-clamp-4 font-bold leading-3 md:leading-2 text-white">
                            {item.detail.subtitle}
                        </h2>
                        <p className="text-5 text-white/70 line-clamp-4">{item.excerpt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
