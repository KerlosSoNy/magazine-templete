import Image from "next/image";

export default function Explore() {
    return (
        <div className="flex flex-col gap-7 items-center w-screen px-4 sm:px-8 lg:px-0 py-12.5 text-center">
            <span className="text-3 md:text-2 lg:text-1 leading-3 md:leading-2 lg:leading-1 font-bold text-text-secondary">Our Professional <br /> <span className="text-main">Exposure</span></span>
            <Image
                src='/images/about/bigMap.png'
                alt="Map"
                width={1264.74}
                height={820}
                className="w-full max-w-[1264.74px] h-auto"
            />
        </div>
    )
}
