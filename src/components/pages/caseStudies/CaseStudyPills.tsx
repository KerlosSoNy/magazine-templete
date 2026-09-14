export default function CaseStudyPills({ tags, tone = 'light' }: { tags: string[]; tone?: 'light' | 'dark' }) {
    const pillClasses = tone === 'dark'
        ? 'bg-white'
        : 'bg-secondary-bg'

    return (
        <div className="flex flex-wrap gap-4 items-center">
            {tags.map((tag, index) => (
                <span
                    key={tag + index}
                    className={`${pillClasses} rounded-lg px-4 py-2 text-7 md:text-5 text-text-secondary ${index === 0 ? 'font-bold uppercase' : ''}`}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}
