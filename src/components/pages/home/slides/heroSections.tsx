import { useTranslations } from "next-intl";
import GenericButton from "@/components/buttons/genericButton";
import Videobanner from "@/components/shared/Videobanner";
import Image from "next/image";

export default function HeroSection() {
    const t = useTranslations("HomePage.hero");

    return (
        <div data-nav-bg="black" className="w-screen h-screen max-w-screen max-h-screen overflow-hidden flex items-center justify-center relative">
            <Videobanner src="/videos/headeer.mp4" />
            <div className="absolute w-full h-full bg-black/20 z-2" />
            <div className="absolute w-full h-full bg-linear-to-b from-[#0E3832] to-main/0 opacity-[0.5] z-3" />
            <div className="flex flex-col items-center relative z-5">
                <div className="flex flex-row items-center gap-3">
                    <span className="text-white text-6 md:text-5">{t("partOf")}</span>
                    <Image
                        src="/images/logos/muhaidib.png"
                        alt={t("partnerLogoAlt")}
                        width={262}
                        height={33.8}
                        className="w-50 md:w-65.5 h-auto"
                    />
                </div>
                <span className="text-5 md:text-3 text-white my-3 xl:my-7">{t("tagline")}</span>
                <h1 className="max-w-175 xl:max-w-[1033.5px] text-3 md:text-2 xl:text-1 mb-7 font-bold text-center leading-2 xl:leading-1 text-white">{t("title")}</h1>
                <GenericButton title={t("cta")} />
            </div>
        </div>
    )
}
