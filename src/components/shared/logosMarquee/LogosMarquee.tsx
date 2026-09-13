import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function LogosMarquee() {
    const logos = [
        "/images/home/logos/almaha.png",
        "/images/home/logos/alarkkannew.png",
        "/images/home/logos/almuhaidib.png",
        "/images/home/logos/alromansiah.png",
        "/images/home/logos/mayar.png",
        "/images/home/logos/ufmc.png",
    ]
    return (
        <div className="container mx-auto">
            <Marquee>
                {[...logos, ...logos, ...logos]?.map((item, index) => {
                    return (
                        <Image
                            key={index}
                            src={item}
                            alt="Success Background"
                            width={226}
                            height={224}
                            className="me-5 3xl:me-10 w-40 3xl:w-56.5 h-40 3xl:h-56.5 object-contain"
                        />
                    )
                })}
            </Marquee>
        </div>
    )
}
