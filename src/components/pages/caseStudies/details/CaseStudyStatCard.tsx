interface CaseStudyStat {
    label: string
    value: string
}

export default function CaseStudyStatCard({ stat }: { stat: CaseStudyStat }) {
    return (
        <div className="bg-secondary-bg rounded-lg p-6 gap-1 flex flex-col">
            <span className="text-6 md:text-5 font-inter text-text-secondary">{stat.label}</span>
            <span className="text-5 md:text-4 font-bold capitalize text-text-secondary">{stat.value}</span>
        </div>
    )
}
