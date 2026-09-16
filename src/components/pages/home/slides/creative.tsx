import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Creative() {
    const t = useTranslations("HomePage.creative");

    return (
        <div className="w-screen h-fit py-10 md:py-0 md:h-screen overflow-hidden md:mt-10 flex items-center justify-center relative" data-nav-bg="white">
            <Image
                alt={t("backgroundAlt")}
                src="/images/home/bigLogo.png"
                width={854}
                height={767}
                className="absolute top-1/2 opacity-[0.05] mix-blend-luminosity md:aspect-108/97 -translate-y-1/2 left-1/2 -translate-x-1/2 w-213.5 md:h-191.75"
            />
            <div className="relative z-2 w-full container grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 px-10">
                <h2 className="font-bold text-4 lg:text-2 3xl:text-1 leading-4 lg:leading-2 3xl:leading-1 text-black self-start">
                    {t("heading1")} <span className="text-main">{t("heading1Highlight")}</span>
                </h2>
                <p className="text-text-placeholder text-[12px] lg:text-7 3xl:text-5 leading-7 3xl:leading-5 self-start">
                    {t("paragraph1")}
                </p>
                <p className="text-text-placeholder text-[12px] lg:text-7 3xl:text-5 leading-7 3xl:leading-5 self-end">
                    {t("paragraph2")}
                </p>
                <h2 className="font-bold text-4 lg:text-2 3xl:text-1 leading-4 lg:leading-2 3xl:leading-1 text-black text-start md:mx-auto self-start md:self-center">
                    {t("heading2")} <br className="md:block hidden" /> <span className="text-main">{t("heading2Highlight")}</span>
                </h2>
            </div>
        </div>
    )
}
