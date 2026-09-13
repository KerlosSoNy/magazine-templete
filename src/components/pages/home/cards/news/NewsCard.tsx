import Image from "next/image"
import GenericButton from "@/components/buttons/genericButton"

const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33334 1.33334V3.33334M10.6667 1.33334V3.33334M2.33334 6.06667H13.6667M3 2.33334H13C13.5523 2.33334 14 2.78106 14 3.33334V13.3333C14 13.8856 13.5523 14.3333 13 14.3333H3C2.44772 14.3333 2 13.8856 2 13.3333V3.33334C2 2.78106 2.44772 2.33334 3 2.33334Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default function NewsCard({ item, large }: { item: any, large?: boolean }) {
    return (
        <div className="flex flex-col items-start w-[95%] mx-auto md:mx-0 md:w-full">
            <div className={`relative w-full overflow-hidden rounded-xl ${large ? "h-70 3xl:h-82.5 max-h-82.5" : "h-51 3xl:h-61.5 max-h-61.5"} ]`}>
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex items-center gap-2 text-text-disabled mt-2.5 3xl:mt-5">
                <CalendarIcon />
                <span className="text-6 font-inter">{item.date}</span>
            </div>
            <h3 className="text-5 3xl:text-3 font-bold leading-5 3xl:leading-3 h-12 3xl:h-13.75 text-text-secondary mt-2 line-clamp-2">{item.title}</h3>
            <p className={`text-6 leading-6 text-text-placeholder mt-2 ${large ? "line-clamp-3 md:line-clamp-2" : "line-clamp-4"} `}>{item.description}</p>
            <GenericButton
                title="Read More"
                withoutBg
                withoutBorder
                mainClasses="p-0! 3xl:mt-4"
                titleClasses="text-main!"
                svgColor="stroke-main"
            />
        </div>
    )
}
