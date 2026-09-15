import Image from "next/image";
import { useTranslations } from "next-intl";

export default function GirlSection() {
    const t = useTranslations("AboutPage.girlSection");

    return (
        <div id="story" className="w-screen flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-17.5 px-4 sm:px-8 md:px-16 lg:px-0 py-12 lg:py-23.25 text-center lg:text-start">
            <Image
                src='/images/about/firstGirl.png'
                alt={t("imageAlt")}
                width={400}
                height={400}
                className="w-56 xs:w-64 sm:w-80 md:w-96 lg:w-138.75 h-auto lg:h-[533.47px]"
            />
            <div className="flex flex-col items-center lg:items-start max-w-[85%] xl:max-w-174">
                <span className="text-6 md:text-5 font-bold font-inter uppercase text-text-secondary">{t("eyebrow")}</span>
                <h1 className="mt-4 text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary uppercase">
                    {t("headingPrefix")} <span className="text-main">{t("headingHighlight")}</span>
                </h1>
                <span className="text-6 md:text-5 text-text-placeholder leading-6 md:leading-5 mt-4">{t("paragraph")}</span>
            </div>
        </div>
    )
}
