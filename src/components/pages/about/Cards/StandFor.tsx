export default function StandCard({ title, subTitle, desc }: { title: string, subTitle: string, desc: string }) {
    return (
        <div className="flex flex-col max-w-118.5">
            <span className="text-3 leading-3 text-main font-bold">{title}</span>
            <span className="text-4 leading-4 font-bold text-text-secondary mt-2">{subTitle}</span>
            <span className="text-6 leadinh-6 font-inter text-text-placeholder mt-2">{desc}</span>
        </div>
    )
}