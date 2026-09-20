import { useTranslations } from "next-intl";
import { ourCase } from "../cards/case/dummy";
import CaseCard from "../cards/case/CaseCard";
import { motion } from "framer-motion";
export default function OurCase() {
    const t = useTranslations("HomePage.ourCase");

    return (
        <div className="w-screen h-fit py-10 md:py-0 md:h-screen overflow-hidden flex items-center justify-center" data-nav-bg="white">
            <div className="flex flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-7 3xl:text-5 text-text-placeholder">{t("eyebrow")}</motion.span>
                <motion.h2
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-2 3xl:text-1 font-bold leading-2 3xl:leading-1 text-black mt-6 max-w-140 lg:max-w-180 3xl:max-w-243.25">
                    <span className="text-main">{t("headingHighlight")}</span> {t("headingRest")}
                </motion.h2>
                <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 container gap-5.25 mt-4 3xl:mt-8">
                    {
                        ourCase.map((item, index) => {
                            return (
                                <CaseCard item={item} index={index} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
