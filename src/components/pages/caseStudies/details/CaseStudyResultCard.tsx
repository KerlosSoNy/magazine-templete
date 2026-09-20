import ResultBar from './ResultBar'

interface CaseStudyResultStat {
    label: string
    value: string
    percent?: number
    description: string
}

export default function CaseStudyResultCard({ stat }: { stat: CaseStudyResultStat }) {
    return (
        <div className="bg-white rounded-xl h-full p-8 flex flex-col gap-5">
            <span className="text-5 text-text-secondary line-clamp-1">{stat.label}</span>
            <div className="flex flex-col gap-5 justify-between h-full">
                <span className="text-1 font-bold text-text-secondary -mb-5">{stat.value}</span>
                {stat.percent !== undefined && <ResultBar percent={stat.percent} />}
                <p className="text-6 text-text-placeholder line-clamp-3">{stat.description}</p>
            </div>
        </div>
    )
}
