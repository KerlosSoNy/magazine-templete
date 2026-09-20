'use client'
import { useTranslations } from 'next-intl'
import GenericButton from '@/components/buttons/genericButton'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Welcome() {
    const t = useTranslations('HomePage.welcome')
    const tCommon = useTranslations('Common.buttons')

    return (
        <div data-nav-bg="white" className="w-screen h-fit py-10 md:py-0 md:h-screen  flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-15">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="w-fit h-fit">
                    <Image
                        src="/images/home/welcomeImage.png"
                        alt={t('imageAlt')}
                        width={594}
                        height={715}
                        className="w-80 md:w-80 xl:w-110 3xl:w-148.5 h-80 md:h-100 xl:h-140 3xl:h-178.75"
                    />
                </motion.div>
                <div className="flex flex-col items-start max-w-[80%] lg:max-w-100 xl:max-w-135 2xl:max-w-162.5 3xl:max-w-192.5 ovreflow-y-visible">
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-bold text-4 md:text-3 xl:text-2 3xl:text-1 leading-3 xl:leading-2  3xl:leading-1 text-main">
                        <span className="text-black">{t('titleLead')} </span>
                        <br />
                        {t('titleBrand')}
                    </motion.h2>
                    <motion.span
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-text-placeholder md:mt-2 2xxl:mt-4 text-justify text-[12px] md:text-7 xl:text-6 3xl:text-5">
                        {t('paragraph1')}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-text-placeholder md:mt-2 2xxl:mt-4 text-justify text-[12px] md:text-7 xl:text-6 3xl:text-5">
                        {t('paragraph2')}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-text-placeholder md:mt-2 2xxl:mt-4 text-justify text-[12px] md:text-7 xl:text-6 3xl:text-5">
                        {t('paragraph3')}
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-row items-center mt-2 xl:mt-3 3xl:mt-6 gap-2 lg:gap-4">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM13.5 10.75H8.31L10.03 12.47C10.32 12.76 10.32 13.24 10.03 13.53C9.88 13.68 9.69 13.75 9.5 13.75C9.31 13.75 9.12 13.68 8.97 13.53L5.97 10.53C5.83052 10.3889 5.7523 10.1984 5.7523 10C5.7523 9.80157 5.83052 9.61114 5.97 9.47L8.97 6.47C9.26 6.18 9.74 6.18 10.03 6.47C10.32 6.76 10.32 7.24 10.03 7.53L8.31 9.25H13.5C13.91 9.25 14.25 9.59 14.25 10C14.25 10.41 13.91 10.75 13.5 10.75Z" fill="#145048" />
                        </svg>
                        <span className="text-6 lg:text-5 font-inter text-text-secondary">
                            {t('storyLink')}
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-start xl:items-center mb-4 3xl:mb-8 mt-2 xl:mt-3 3xl:mt-6 gap-3 md:gap-5 lg:gap-2 xl:gap-4 3xl:gap-7">
                        <div className="flex flex-row items-center gap-2 lg:gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#145048" />
                            </svg>
                            <span dir="ltr" className="text-6 lg:text-5 font-inter text-text-secondary">
                                discover@mindsadvisory.com
                            </span>
                        </div>
                        <div className="flex flex-row items-center gap-2 lg:gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.6333 20.9847 19.2767 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.01533 4.36733 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.10067 3.67933 8.122 3.86333 8.142 4.002C8.34072 5.38893 8.74799 6.73784 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36471 13.1863 10.8147 15.6363 13.889 16.956L15.429 14.802C15.4917 14.7137 15.5835 14.6503 15.6883 14.6231C15.7932 14.5958 15.9042 14.6064 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.1407 15.878 20.324 15.8993 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0002 16.2961 21 16.42Z" fill="#145048" />
                            </svg>
                            <span dir="ltr" className="text-6 lg:text-5 font-inter text-text-secondary">
                                +966 13 845 5555
                            </span>
                        </div>
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
                            delay: 1.2,
                            bounce: 0.6,
                        }}
                    >
                        <GenericButton title={tCommon('discoverMore')} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
