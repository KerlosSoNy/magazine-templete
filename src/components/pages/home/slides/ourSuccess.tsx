import GenericButton from "@/components/buttons/genericButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SuccessCard from "../cards/success/successCard";
import LogosMarquee from "@/components/shared/logosMarquee/LogosMarquee";

export default function OurSuccess() {

    return (
        <div className="w-screen h-fit md:h-screen overflow-hidden pb-10 md:pb-0 pt-10 flex items-center justify-center relative" data-nav-bg="white">
            <Image
                alt="Success Background"
                src="/images/home/successBg.png"
                width={764}
                height={726}
                className="absolute top-0 inset-e-0 w-191"
            />
            <div className="w-full container flex flex-col items-center">
                <span className="text-center mb-4 3xl:mb-2 text-main font-bold text-3 3xl:text-1 leading-3 3xl:leading-1 ">
                    <span className="text-black">Our Success is Measured </span> <br /> <span className="text-black">by</span> the Success of Our Clients</span>
                <Marquee>
                    <SuccessCard />
                    <SuccessCard />
                    <SuccessCard />
                    <SuccessCard />
                    <SuccessCard />
                </Marquee>
                <GenericButton mainClasses="my-2 3xl:my-4" title="Discover our bespoke solutions" />
                <LogosMarquee />
            </div>
        </div>
    )
}
