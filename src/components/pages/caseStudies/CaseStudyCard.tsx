import Image from 'next/image'
import GenericButton from '@/components/buttons/genericButton'
import CaseStudyPills from './CaseStudyPills'
import type { CaseStudyItem } from './types'

export default function CaseStudyCard({ item }: { item: CaseStudyItem }) {
    const [year, company, category] = item.tags

    return (
        <div className="w-full flex flex-col">
            <div className="relative w-full h-70 md:h-82.5 rounded-xl overflow-hidden -mb-10 z-1">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="bg-secondary-bg rounded-xl pt-16 p-6 md:p-10 flex z-2 flex-col items-start gap-6">
                <CaseStudyPills tags={[year, category]} tone="dark" />
                <span className="text-5 text-text-secondary">{company}</span>
                <h3 className="text-3 -mt-2 md:text-2 font-bold leading-3 md:leading-2 text-text-secondary">
                    {item.title}
                </h3>
                <div className="flex flex-col -mt-4 gap-3">
                    <span className="text-5 text-text-secondary">{item.subTitle}</span>
                    <p className="text-6 text-text-disabled line-clamp-3">{item.description}</p>
                </div>
                <GenericButton title="Discover More" href={item.href} />
            </div>
        </div>
    )
}
