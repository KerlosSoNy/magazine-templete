import Image from 'next/image'
import Link from 'next/link'

export default function DownloadFile() {
    return (
        <div data-nav-bg="main" className="w-screen flex items-center justify-center h-screen bg-main relative max-w-full max-h-full overflow-hidden">
            <div className="flex flex-row items-center gap-">
                <div className="flex max-w-145 flex-col text-start">
                    <span className="text-1 text-white font-bold leading-1">Downloadable Materials</span>
                    <span className="text-text-disabled text-5 font-inter mt-4 mb-8">Explore our comprehensive business offerings deck, detailing innovative solutions tailored to your needs. Download now to discover how we can drive your success forward.</span>
                    <Link href={'/'} type="submit" className={` rounded-lg bg-[#E8EEED] h-12 w-fit px-8 flex items-center justify-center gap-1.5`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 15V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V15M12 5V15M14 13L12 15L10 13" stroke="#145048" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={`font-bold text-6 text-main ms-2`}>{'Download Now'}</span>
                    </Link>
                </div>
                <Image
                    src="/images/home/files.png"
                    alt="Downloadable Materials"
                    width={600}
                    height={539}
                />
            </div>
        </div>
    )
}
