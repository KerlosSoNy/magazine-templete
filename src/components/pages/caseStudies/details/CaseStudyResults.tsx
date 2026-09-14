const stats = [
    {
        label: 'Enhanced Customer Retention',
        value: '30%',
        percent: 30,
        description: 'Users are more likely to return for repeat purchases, leading to a stable customer base.',
    },
    {
        label: 'Boost in Average Order Value',
        value: '95%',
        percent: 95,
        description: 'Customers are spending more per transaction due to personalized upselling features.',
    },
    {
        label: 'Reduction in Cart Abandonment',
        value: '40%',
        percent: 40,
        description: 'Streamlined checkout processes have decreased the number of abandoned carts.',
    },
    {
        label: 'Improved User Engagement',
        value: '2X',
        description: 'Increased interaction with promotional content and product suggestions has enhanced overall engagement.',
    },
]

const BAR_TICKS = 20

function ResultBar({ percent }: { percent: number }) {
    const filled = Math.round((percent / 100) * BAR_TICKS)

    return (
        <div className="flex gap-1 h-10">
            {Array.from({ length: BAR_TICKS }).map((_, index) => (
                <span
                    key={index}
                    className={`w-2 h-full rounded-sm ${index < filled ? 'bg-[#0E3832]' : 'bg-text-disabled/40'}`}
                />
            ))}
        </div>
    )
}

export default function CaseStudyResults() {
    return (
        <div className="w-full bg-secondary-bg">
            <div className="container mx-auto flex flex-col gap-16 py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-6 lg:max-w-160">
                        <span className="text-5 text-text-placeholder">Results</span>
                        <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary">
                            Measurable <span className="text-main">Success</span>
                        </h2>
                    </div>
                    <p className="text-6 md:text-5 text-text-placeholder max-w-140">
                        The redesign wasn&aps;t just about aesthetics; it was about creating a foundation for future growth. By establishing a robust design system, we enabled the internal product team to launch new features 30% faster than before, ensuring Apex Financial stays competitive in a rapidly evolving fintech landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white rounded-xl p-8 flex flex-col gap-5">
                            <span className="text-5 text-text-secondary line-clamp-1">{stat.label}</span>
                            <div className="flex flex-col gap-5 justify-between h-full">
                                <span className="text-1 font-bold text-text-secondary -mb-5">{stat.value}</span>
                                {stat.percent !== undefined && <ResultBar percent={stat.percent} />}
                                <p className="text-6 text-text-placeholder line-clamp-3">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
