'use client'

import { useState } from 'react'
import Image from 'next/image'
import { serviceCategories } from './dummy'

export default function BespokeSolutions() {
    const [activeIndex, setActiveIndex] = useState(0)
    const category = serviceCategories[activeIndex]

    return (
        <div className="container mx-auto flex flex-col gap-10 py-16 lg:py-20">
            <div className="flex flex-col gap-8 items-center text-center max-w-220 mx-auto">
                <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary">
                    Bespoke Solutions <br /> <span className="text-main">For Your Success</span>
                </h2>
                <p className="text-6 md:text-5 text-text-placeholder max-w-140">
                    Every business is unique. Facing its own set of challenges and opportunities. That&apos;s why we
                    offer a comprehensive range of services designed to address your specific needs
                </p>
            </div>

            <div className="grid grid-cols-2 md:flex max-w-full overflow-x-auto overflow-y-hidden items-center border-b border-text-disabled/40">
                {serviceCategories.map((item, index) => {
                    const isActive = index === activeIndex
                    return (
                        <button
                            key={item.key}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`md:flex-1 flex items-center justify-center gap-2 md:gap-3 px-3 md:px-6 py-4 md:py-5 border-b-2 -mb-px transition-colors ${isActive ? 'border-main filter-teal' : 'border-transparent'
                                }`}
                        >
                            <Image src={item.tabIcon} alt="" width={32} height={32} className="size-6 md:size-8 shrink-0" />
                            <span
                                className={`text-6 md:text-3 font-bold capitalize ${isActive ? 'text-main' : 'text-text-secondary'
                                    }`}
                            >
                                {item.label}
                            </span>
                        </button>
                    )
                })}
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-22.5 items-center">
                <div className="relative w-full lg:flex-1 h-98 rounded-xl overflow-hidden shrink-0 lg:max-w-113.75">
                    <Image src={category.photo} alt={category.label} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-6 w-full lg:flex-1">
                    <div className="flex flex-row lg:flex-col items-center lg:items-start gap-6">
                        <Image src={category.bigIcon} alt="" width={48} height={48} className="size-12 filter-teal" />
                        <h3 className="text-2 md:text-1 font-bold leading-2 md:leading-1 text-main capitalize">
                            {category.label}
                        </h3>
                    </div>
                    <p className="text-5 font-bold text-text-secondary">{category.subtitle}</p>
                    <p className="text-5 text-text-placeholder">{category.description}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {category.items.map((item) => (
                    <div key={item.title} className="flex gap-3 items-start">
                        <Image src={item.icon} alt="" width={64} height={64} className="size-16 shrink-0" />
                        <div className="flex flex-col gap-4">
                            <span className="text-4 font-bold text-text-placeholder">{item.title}</span>
                            <p className="text-6 text-text-disabled">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
