import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function DownloadFile() {
    const t = useTranslations('HomePage.downloadFile')

    return (
        <div data-nav-bg="black" className="w-screen flex items-center justify-center h-fit py-10 lg:py-0 lg:h-screen bg-main relative max-w-full max-h-full overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-">
                <div className="flex max-w-110 3xl:max-w-145 flex-col text-center lg:text-start">
                    <span className="text-2 3xl:text-1 text-white font-bold leading-2 3xl:leading-1">{t('title')}</span>
                    <span className="text-text-disabled text-5 font-inter mt-4 mb-8">{t('description')}</span>
                    <Link href={'/'} type="submit" className={`mx-auto lg:mx-0 rounded-lg bg-[#E8EEED] h-12 w-fit px-8 flex items-center justify-center gap-1.5`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 15V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V15M12 5V15M14 13L12 15L10 13" stroke="#145048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={`font-bold text-6 text-main ms-2`}>{t('downloadNow')}</span>
                    </Link>
                </div>
                <Image
                    src="/images/home/files.png"
                    alt={t('imageAlt')}
                    width={600}
                    height={539}
                    className="w-100 xl:w-130 2xl:w-150 h-90 xl:h-110 2xl:h-134.75 "
                />
            </div>
        </div>
    )
}
