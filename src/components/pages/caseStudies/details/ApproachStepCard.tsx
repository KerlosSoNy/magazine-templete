interface ApproachStep {
    number: string
    title: string
    description: string
}

export default function ApproachStepCard({ step }: { step: ApproachStep }) {
    return (
        <div className="bg-white border border-text-disabled/40 rounded-lg p-6 h-full flex flex-col gap-6">
            <div className="flex gap-4 items-center">
                <span className="bg-[#0E3832] rounded-full size-8 flex items-center justify-center text-6 font-bold text-white">
                    {step.number}
                </span>
                <span className="text-4 font-bold text-text-secondary">{step.title}</span>
            </div>
            <p className="text-6 text-text-disabled">{step.description}</p>
        </div>
    )
}
