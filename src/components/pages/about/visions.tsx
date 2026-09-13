import Image from "next/image";

export default function Visions() {
    return (
        <div className="h-202.5 w-screen ps-75 pe-30 grid grid-cols-1 md:grid-cols-2 relative pt-25 pb-35">
            <Image
                fill
                src="/images/about/bgSecondSection.jpg"
                alt="Background of vision"
            />
            <div className="flex flex-col self-baseline relative z-2">
                <span className="font-bold text-white text-1">Mission</span>
                <span className="max-w-107.25 text-white text-5 leading-5">Drive efficiency by organizing strategies, operations, and data of our clients using tailored best practices</span>
            </div>
            <div className="flex flex-col relative z-2 w-fit self-end mx-auto ms-50">
                <span className="font-bold text-white text-1">Vision</span>
                <span className="max-w-107.25 text-white text-5 leading-5">To become a partner of choice; striving to deliver innovative solutions that enables sustainable competitive growth</span>
            </div>
        </div>
    )
}
