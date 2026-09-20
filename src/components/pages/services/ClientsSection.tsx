import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { clientLogos } from './dummy'
import MotionDiv from '@/components/shared/motionDiv'

export default async function ClientsSection() {
    const t = await getTranslations('ServicesPage.clientsSection')
    const tCommon = await getTranslations('Common.logosMarquee')

    return (
        <div data-nav-bg="white" className="w-full bg-main">
            <div className="container mx-auto flex flex-col gap-16 items-center py-16 lg:py-37">
                <MotionDiv delay={0.2}>
                    <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-white text-center">
                        {t('headingLine1')} <br /> {t('headingLine2')}
                    </h2>
                </MotionDiv>
                <div className="flex flex-wrap gap-6 max-w-[95%] lg:max-w-280 lg:gap-10 items-center justify-center">
                    {clientLogos.map((logo, index) => (
                        <MotionDiv key={index} axis="y" delay={0.6 + index * 0.1}>
                            <div key={index} className="relative w-40 h-22 lg:w-55.5 lg:h-29">
                                <Image src={logo} alt={tCommon('logoAlt')} fill className="object-cover" />
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </div>
    )
}
