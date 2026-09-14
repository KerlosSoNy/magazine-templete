export default function QuoteCard({ quote, author, role }: { quote: string; author: string; role: string }) {
    return (
        <div className="relative lg:absolute -mt-16 lg:mt-0 mx-4 lg:mx-0 lg:bottom-0 2xl:bottom-8 lg:inset-s-0 bg-[#0E3832] rounded-lg p-6 md:p-8 flex flex-col gap-3 max-w-142.75">
            <p className="text-4 md:text-3 font-bold leading-2 text-white">{`"${quote}"`}</p>
            <div className="flex flex-col">
                <span className="text-5 font-bold uppercase text-white">{author}</span>
                <span className="text-6 text-text-disabled">{role}</span>
            </div>
        </div>
    )
}
