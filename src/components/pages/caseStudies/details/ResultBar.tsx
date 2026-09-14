const BAR_TICKS = 20

export default function ResultBar({ percent }: { percent: number }) {
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
