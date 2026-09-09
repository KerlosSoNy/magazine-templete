import GenericButton from "@/components/buttons/genericButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SuccessCard from "../cards/success/successCard";

export default function OurSuccess() {
    const logos = [
        "/images/home/logos/almaha.png",
        "/images/home/logos/alarkkannew.png",
        "/images/home/logos/almuhaidib.png",
        "/images/home/logos/alromansiah.png",
        "/images/home/logos/mayar.png",
        "/images/home/logos/ufmc.png",
    ]
    return (
        <div className="w-screen h-screen overflow-hidden pt-10 flex items-center justify-center relative" data-nav-bg="white">
            <Image
                alt="Success Background"
                src="/images/home/successBg.png"
                width={764}
                height={726}
                className="absolute top-0 inset-e-0 w-191"
            />
            <div className="w-full max-w-355.5 flex flex-col items-center">
                <span className="text-center mb-2 text-main font-bold text-1 leading-1 ">
                    <span className="text-black">Our Success is Measured </span> <br /> <span className="text-black">by</span> the Success of Our Clients</span>
                <Marquee>
                    <SuccessCard />
                    <SuccessCard />
                    <SuccessCard />
                    <SuccessCard />
                    <SuccessCard />
                </Marquee>
                <GenericButton mainClasses="my-4" title="Discover our bespoke solutions" />
                <Marquee>
                    {logos?.map((item, index) => {
                        return (
                            <Image
                                key={index}
                                src={item}
                                alt="Success Background"
                                width={226}
                                height={224}
                                className="me-10 object-contain"
                            />
                        )
                    })}
                </Marquee>
            </div>
        </div>
    )
}
