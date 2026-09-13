import Image from "next/image";

export default function Explore() {
    return (
        <div className="flex flex-col gap-7 items-center w-screen py-12.5 text-center">
            <span className="text-1 leading-1 font-bold text-text-secondary">Our Professional <br /> <span className="text-main">Exposure</span></span>
            <Image
                src='/images/about/bigMap.png'
                alt="Map"
                width={1264.74}
                height={820}
                className="w-[1264.74px] h-205"
            />
        </div>
    )
}
