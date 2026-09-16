import { useTranslations } from "next-intl";
import { ourCase } from "../cards/case/dummy";
import CaseCard from "../cards/case/CaseCard";

export default function OurCase() {
    const t = useTranslations("HomePage.ourCase");

    return (
        <div className="w-screen h-fit py-10 md:py-0 md:h-screen overflow-hidden flex items-center justify-center" data-nav-bg="white">
            <div className="flex flex-col items-center text-center">
                <span className="text-7 3xl:text-5 text-text-placeholder">{t("eyebrow")}</span>
                <h2 className="text-2 3xl:text-1 font-bold leading-2 3xl:leading-1 text-black mt-6 max-w-140 lg:max-w-180 3xl:max-w-243.25">
                    <span className="text-main">{t("headingHighlight")}</span> {t("headingRest")}
                </h2>
                <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 container gap-5.25 mt-4 3xl:mt-8">
                    {
                        ourCase.map((item, index) => {
                            return (
                                <CaseCard item={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
