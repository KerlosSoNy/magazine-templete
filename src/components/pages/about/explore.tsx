import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Explore() {
    const t = await getTranslations("AboutPage.explore");

    return (
        <div className="flex flex-col gap-7 items-center w-screen px-4 sm:px-8 lg:px-0 py-12.5 text-center">
            <span className="text-3 md:text-2 lg:text-1 leading-3 md:leading-2 lg:leading-1 font-bold text-text-secondary">{t("headingPrefix")} <br /> <span className="text-main">{t("headingHighlight")}</span></span>
            <Image
                src='/images/about/bigMap.png'
                alt={t("mapAlt")}
                width={1264.74}
                height={820}
                className="w-full max-w-[1264.74px] h-auto"
            />
        </div>
    )
}
