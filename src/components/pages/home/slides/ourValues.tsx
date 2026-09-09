import Image from 'next/image'
import DiscoverCards from '../cards/discover/DiscoverCards'

export default function OurValues() {
    return (
        <div data-nav-bg="main" className="w-screen flex items-center justify-center h-screen bg-main relative max-w-full max-h-full overflow-hidden">
            <Image
                src="/images/logos/simpleLogo.png"
                alt="Simple Logo"
                width={109.5}
                height={107.5}
                className="absolute w-109.5! h-107.5! top-8! left-1/2 -translate-x-1/2"
                loading="eager"
            />
            <div className="flex flex-col items-center text-center z-2">
                <h1 className="max-w-150 text-1 font-bold leading-1 text-white">Our value creation services</h1>
                <p className="max-w-128.75 text-5 text-white mt-5 leading-5">Explore our meticulously-tailored solutions and our four principal areas of focus, designed to meet the unique needs of your business</p>
                <DiscoverCards />
            </div>
        </div>
    )
}
