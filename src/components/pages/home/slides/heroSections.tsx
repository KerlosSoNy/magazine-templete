import GenericButton from "@/components/buttons/genericButton";
import Videobanner from "@/components/shared/Videobanner";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div data-nav-bg="main" className="w-screen h-screen max-w-screen max-h-screen overflow-hidden flex items-center justify-center relative">
            <Videobanner src="/videos/headeer.mp4" />
            <div className="absolute w-full h-full bg-black/20 z-2" />
            <div className="absolute w-full h-full bg-linear-to-b from-[#0E3832] to-main/0 opacity-[0.5] z-3" />
            <div className="flex flex-col items-center relative z-5">
                <div className="flex flex-row items-center gap-3">
                    <span className="text-white text-5">Part of:</span>
                    <Image
                        src="/images/logos/muhaidib.png"
                        alt="Muhaidib Logo"
                        width={262}
                        height={33.8}
                    />
                </div>
                <span className="text-[28px] text-white my-7">Your Partner in Value Creation</span>
                <h1 className="max-w-[1033.5px] text-1 mb-7 font-bold text-center leading-1 text-white">Transforming Businesses with Innovative, Sustainable Solutions</h1>
                <GenericButton title="Get In Touch" />
            </div>
        </div>
    )
}
