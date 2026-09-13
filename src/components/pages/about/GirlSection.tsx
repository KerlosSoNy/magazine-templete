import Image from "next/image";

export default function GirlSection() {
    return (
        <div id="story" className="w-screen flex flex-col xl:flex-row items-center justify-center gap-8 lg:gap-17.5 px-4 sm:px-8 md:px-16 lg:px-0 py-12 lg:py-23.25 text-center lg:text-left">
            <Image
                src='/images/about/firstGirl.png'
                alt="Back office girl"
                width={400}
                height={400}
                className="w-56 xs:w-64 sm:w-80 md:w-96 lg:w-138.75 h-auto lg:h-[533.47px]"
            />
            <div className="flex flex-col items-center lg:items-start max-w-[85%] xl:max-w-174">
                <span className="text-6 md:text-5 font-bold font-inter uppercase text-text-secondary">The Minds Story</span>
                <h1 className="mt-4 text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-text-secondary uppercase">
                    A Unified Vision Sparked a <span className="text-main">Value Creation Machine</span>
                </h1>
                <span className="text-6 md:text-5 text-text-placeholder leading-6 md:leading-5 mt-4">Minds Advisory was born out of a shared vision among our founders—industry veterans who have navigated the complexities of large-scale transformations throughout their careers. Their extensive experience across the GCC, North Africa, and Europe inspired the creation of Minds Advisory, a firm dedicated to bridging gaps within organizations and driving sustainable, long-term value. We are not just consultants; we are strategic partners committed to unlocking the full potential of every business we engage with</span>
            </div>
        </div>
    )
}
