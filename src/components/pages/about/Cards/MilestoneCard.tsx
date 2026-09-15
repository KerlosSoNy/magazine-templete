export default function MilestoneCard({ year, title, points }: { year: string, title: string, points: string[] }) {
    return (
        <div className="flex-1 relative bg-white rounded-xl pb-7.5 pt-6 px-5 max-w-[552.99px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="w-2.5 h-2.5 bg-white absolute -rotate-45 -inset-s-1.5 top-2.4" />
            <span dir="ltr" className="text-6 font-inter font-normal text-[#155048] block w-fit">{year}</span>
            <h3 className="text-4 font-bold text-text-secondary mt-1">{title}</h3>
            <ul className="mt-2.5 flex flex-col gap-1 ps-10">
                {points.map((point, index) => (
                    <li key={index} className="text-7 text-[#171918] leading-7">{point}</li>
                ))}
            </ul>
        </div>
    )
}
