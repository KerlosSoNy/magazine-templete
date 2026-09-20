import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import StandCard from './Cards/StandFor'
import MotionDiv from '@/components/shared/motionDiv'

export default async function StandFor() {
    const t = await getTranslations('AboutPage.standFor')

    return (
        <div className="w-screen flex flex-col items-center py-16 lg:py-24 bg-white px-4 sm:px-8 lg:px-0 text-center lg:text-start">
            <MotionDiv delay={0.2}>
                <span className="text-3 md:text-2 lg:text-1 font-bold text-text-secondary">{t('headingPrefix')} <span className="text-main">{t('headingHighlight')}</span> {t('headingSuffix')}</span>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mt-10">
                <div className="flex flex-col items-center lg:items-start gap-13">
                    <MotionDiv delay={0.4}>
                        <StandCard title={t('items.innovation.title')} subTitle={t('items.innovation.subTitle')} desc={t('items.innovation.desc')} />
                    </MotionDiv>
                    <MotionDiv delay={0.6}>
                        <StandCard title={t('items.integrity.title')} subTitle={t('items.integrity.subTitle')} desc={t('items.integrity.desc')} />
                    </MotionDiv>
                </div>
                <div className="flex flex-col items-center gap-10 md:gap-18.75 md:pt-18.75">
                    <Image
                        src="/images/about/map.png"
                        alt={t('mapAlt')}
                        width={455.5}
                        height={325.51}
                        className="w-full max-w-[455.5px] h-auto"
                    />
                    <div className="flex flex-col items-center lg:items-start">
                        <MotionDiv delay={1.2}>
                            <StandCard title={t('items.excellence.title')} subTitle={t('items.excellence.subTitle')} desc={t('items.excellence.desc')} />
                        </MotionDiv>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-13">
                    <MotionDiv delay={0.8}>
                        <StandCard title={t('items.collaboration.title')} subTitle={t('items.collaboration.subTitle')} desc={t('items.collaboration.desc')} />
                    </MotionDiv>
                    <MotionDiv delay={1}>
                        <StandCard title={t('items.accountability.title')} subTitle={t('items.accountability.subTitle')} desc={t('items.accountability.desc')} />
                    </MotionDiv>
                </div>
            </div>
        </div>
    )
}
