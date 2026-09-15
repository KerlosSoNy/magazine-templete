import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Visions() {
    const t = useTranslations("AboutPage.visions");

    return (
        <div className="min-h-125 md:h-auto xl:h-202.5 w-screen  px-4 sm:px-8 md:px-12 xl:ps-25 3xl:ps-60 xl:pe-30 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 relative py-14 md:py-20 xl:pt-25 xl:pb-35">
            <Image
                fill
                src="/images/about/bgSecondSection.jpg"
                alt={t("backgroundAlt")}
                className=" object-left object-cover rtl:rotate-y-180"
            />
            <div className="flex flex-col self-baseline relative z-2">
                <span className="font-bold text-white text-3 xl:text-1">{t("mission.title")}</span>
                <span className="max-w-full md:max-w-90 xl:max-w-107.25 text-white text-6 xl:text-5 leading-6 lg:leading-5">{t("mission.text")}</span>
            </div>
            <div className="flex flex-col relative z-2 w-fit self-start md:self-end mx-auto lg:mx-20 xl:ms-50">
                <span className="font-bold text-white text-3 xl:text-1">{t("vision.title")}</span>
                <span className="max-w-full md:max-w-110 xl:max-w-107.25 text-white text-6 xl:text-5 leading-6 xl:leading-5">{t("vision.text")}</span>
            </div>
        </div>
    )
}
