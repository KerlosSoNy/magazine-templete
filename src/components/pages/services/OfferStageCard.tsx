import Image from 'next/image'
import type { OfferStage } from './types'

export default function OfferStageCard({ stage }: { stage: OfferStage }) {
    return (
        <div className="bg-white border border-text-disabled/40 rounded-lg p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                {stage.iconBg ? (
                    <span
                        className="size-22 rounded-full flex items-center justify-center p-3"
                        style={{ backgroundColor: stage.iconBg }}
                    >
                        <Image src={stage.icon} alt={stage.title} width={50} height={64} className="w-auto h-full" />
                    </span>
                ) : (
                    <Image src={stage.icon} alt={stage.title} width={88} height={88} className="size-22" />
                )}
                <span className="text-3 font-bold text-text-secondary">{stage.title}</span>
            </div>
            <p className="text-5 text-text-disabled">{stage.description}</p>
            <div className="flex flex-col gap-4">
                <p className="text-5">
                    <span className="font-bold uppercase text-[#006c78]">Outcomes: </span>
                    <span className="text-text-disabled">{stage.outcomes}</span>
                </p>
                <p className="text-5">
                    <span className="font-bold uppercase text-[#006c78]">Gains: </span>
                    <span className="text-text-disabled">{stage.gains}</span>
                </p>
            </div>
        </div>
    )
}
