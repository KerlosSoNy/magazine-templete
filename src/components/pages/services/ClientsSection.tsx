import Image from 'next/image'
import { clientLogos } from './dummy'

export default function ClientsSection() {
    return (
        <div data-nav-bg="white" className="w-full bg-main">
            <div className="container mx-auto flex flex-col gap-16 items-center py-16 lg:py-37">
                <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-white text-center">
                    Some Of <br /> Minds Advisory&apos;s Clients
                </h2>
                <div className="flex flex-wrap gap-6 max-w-[95%] lg:max-w-280 lg:gap-10 items-center justify-center">
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="relative w-40 h-22 lg:w-55.5 lg:h-29">
                            <Image src={logo} alt="Client logo" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
