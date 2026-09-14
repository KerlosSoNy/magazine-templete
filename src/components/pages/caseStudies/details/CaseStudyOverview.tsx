import Image from 'next/image'
import type { CaseStudyItem } from '../types'

export default function CaseStudyOverview({ item }: { item: CaseStudyItem }) {
    const { stats, challenge } = item.detail

    const statItems = [
        { label: 'Timeline', value: stats.timeline },
        { label: 'Industry', value: stats.industry },
        { label: 'Service line', value: stats.serviceLine },
        { label: 'Client', value: stats.client },
    ]

    return (
        <div className="container mx-auto flex flex-col gap-16 py-16 lg:py-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statItems.map((stat) => (
                    <div key={stat.label} className="bg-secondary-bg rounded-lg p-6 gap-1 flex flex-col">
                        <span className="text-6 md:text-5 font-inter text-text-secondary">{stat.label}</span>
                        <span className="text-5 md:text-4 font-bold capitalize text-text-secondary">{stat.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-stretch">
                <div className="flex flex-col justify-between max-w-169.75 gap-8 w-full lg:flex-1">
                    <div className="flex flex-col gap-6">
                        <span className="text-5 text-text-secondary">The Challenge</span>
                        <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary">
                            {challenge.title}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6 text-text-disabled">
                        {challenge.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-6 md:text-5">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="relative w-full lg:flex-1 min-h-100">
                    <div className="relative w-full md:w-142 h-100 lg:h-133.75 place-self-end  rounded-xl overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="relative lg:absolute -mt-16 lg:mt-0 mx-4 lg:mx-0 lg:bottom-0 2xl:bottom-8 lg:inset-s-0 bg-[#0E3832] rounded-lg p-6 md:p-8 flex flex-col gap-3 max-w-142.75">
                        <p className="text-4 md:text-3 font-bold leading-2 text-white">{`"${challenge.quote}"`}</p>
                        <div className="flex flex-col">
                            <span className="text-5 font-bold uppercase text-white">{challenge.quoteAuthor}</span>
                            <span className="text-6 text-text-disabled">{challenge.quoteRole}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
