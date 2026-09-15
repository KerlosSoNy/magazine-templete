import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useLocale, useTranslations } from "next-intl";

export default function LogosMarquee() {
    const t = useTranslations("Common.logosMarquee");
    const logos = [
        "/images/home/logos/almaha.png",
        "/images/home/logos/alarkkannew.png",
        "/images/home/logos/almuhaidib.png",
        "/images/home/logos/alromansiah.png",
        "/images/home/logos/mayar.png",
        "/images/home/logos/ufmc.png",
    ]
    const locale = useLocale()

    return (
        <div dir="ltr" className="container mx-auto">
            <Marquee direction={locale === "en" ? "right" : "left"} key={"Logos-" + locale}>
                {[...logos, ...logos, ...logos]?.map((item, index) => {
                    return (
                        <Image
                            key={index}
                            src={item}
                            alt={t("logoAlt")}
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
