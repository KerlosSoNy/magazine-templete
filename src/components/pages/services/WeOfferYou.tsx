import Image from 'next/image'
import { legend, offerStages } from './dummy'

export default function WeOfferYou() {
    return (
        <div className="container mx-auto flex flex-col gap-10 py-16 lg:py-20">
            <div className="flex flex-col gap-8 max-w-220">
                <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-main">
                    We Offer You
                </h2>
                <p className="text-6 md:text-5 text-text-placeholder max-w-211">
                    We work alongside our clients from defining the challenge through implementation, scale-up, and
                    performance review, ensuring solutions are practical, adopted, and sustained
                </p>
            </div>

            <div className="flex flex-wrap gap-5">
                {legend.map((stage) => (
                    <div key={stage.label} className="flex items-center gap-3">
                        <span className="size-6 rounded-full shrink-0" style={{ backgroundColor: stage.dot }} />
                        <span className="text-4 text-text-secondary capitalize">{stage.label}</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offerStages.map((stage) => (
                    <div
                        key={stage.title}
                        className="bg-white border border-text-disabled/40 rounded-lg p-8 flex flex-col gap-6"
                    >
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
                ))}
            </div>
        </div>
    )
}
