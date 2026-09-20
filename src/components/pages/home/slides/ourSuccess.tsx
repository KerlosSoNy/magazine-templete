'use client'
import { useLocale, useTranslations } from "next-intl";
import GenericButton from "@/components/buttons/genericButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SuccessCard from "../cards/success/successCard";
import LogosMarquee from "@/components/shared/logosMarquee/LogosMarquee";
import { motion } from "framer-motion"
export default function OurSuccess() {
    const t = useTranslations("HomePage.ourSuccess");
    const locale = useLocale()
    return (
        <div className="w-screen h-fit md:h-screen overflow-hidden pb-10 md:pb-0 pt-10 flex items-center justify-center relative" data-nav-bg="white">
            <Image
                alt={t("backgroundAlt")}
                src="/images/home/successBg.png"
                width={764}
                height={726}
                className="absolute top-0 inset-e-0 w-191 h-auto"
            />
            <div className="w-full container flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mb-4 3xl:mb-2 text-main font-bold text-3 3xl:text-1 leading-3 3xl:leading-1 ">
                    <span className="text-black">{t('titleBlack1')} </span> <br /> <span className="text-black">{t('titleBlack2')}</span> {t('titleHighlight')}</motion.span>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    dir="ltr" className="w-full overflow-hidden">
                    <Marquee direction={locale === "en" ? "right" : "left"} key={"Success-" + locale}>
                        <SuccessCard />
                        <SuccessCard />
                        <SuccessCard />
                        <SuccessCard />
                        <SuccessCard />
                    </Marquee>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 12,
                        duration: 0.5,
                        delay: 0.8,
                        bounce: 0.6,
                    }}
                >
                    <GenericButton mainClasses="my-2 3xl:my-4" title={t('cta')} />
                </motion.div>
                <LogosMarquee />
            </div>
        </div >
    )
}
