import Image from 'next/image'
import type { ServiceSubItem } from './types'

export default function ServiceSubItemCard({ item }: { item: ServiceSubItem }) {
    return (
        <div className="flex gap-3 items-start">
            <Image src={item.icon} alt="" width={64} height={64} className="size-16 shrink-0" />
            <div className="flex flex-col gap-4">
                <span className="text-4 font-bold text-text-placeholder">{item.title}</span>
                <p className="text-6 text-text-disabled">{item.description}</p>
            </div>
        </div>
    )
}
