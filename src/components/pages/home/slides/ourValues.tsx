import Image from 'next/image'
import { useTranslations } from 'next-intl'
import DiscoverCards from '../cards/discover/DiscoverCards'

export default function OurValues() {
    const t = useTranslations('HomePage.ourValues')

    return (
        <div data-nav-bg="black" className="w-screen flex items-center justify-center py-10 md:py-0 h-fit md:h-screen bg-main relative max-w-full max-h-full overflow-hidden">
            <Image
                src="/images/logos/simpleLogo.png"
                alt={t('logoAlt')}
                width={109.5}
                height={98.33}
                className="absolute w-109.5! h-98.33! top-8! left-1/2 -translate-x-1/2"
                loading="eager"
            />
            <div className="flex flex-col w-full items-center text-center z-2">
                <h2 className="max-w-150 text-3 3xl:text-1 font-bold leading-1 text-white">{t('title')}</h2>
                <p className="max-w-128.75 text-6 3xl:text-5 text-white 3xl:mt-5 leading-6 3xl:leading-5">{t('description')}</p>
                <DiscoverCards />
            </div>
        </div>
    )
}
