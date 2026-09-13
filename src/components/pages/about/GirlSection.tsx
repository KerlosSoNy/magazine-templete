import Image from "next/image";

export default function GirlSection() {
    return (
        <div id="story" className="w-screen flex flex-row items-center justify-center gap-17.5 py-23.25">
            <Image
                src='/images/about/firstGirl.png'
                alt="Back office girl"
                width={400}
                height={400}
                className="w-138.75 h-[533.47px]"
            />
            <div className="flex flex-col items-start max-w-174">
                <span className="text-5 font-bold font-inter uppercase text-text-secondary">The Minds Story</span>
                <h1 className="mt-4 text-1 font-bold leading-1 text-text-secondary uppercase">
                    A Unified Vision Sparked a <span className="text-main">Value Creation Machine</span>
                </h1>
                <span className="text-5 text-text-placeholder leading-5 mt-4">Minds Advisory was born out of a shared vision among our founders—industry veterans who have navigated the complexities of large-scale transformations throughout their careers. Their extensive experience across the GCC, North Africa, and Europe inspired the creation of Minds Advisory, a firm dedicated to bridging gaps within organizations and driving sustainable, long-term value. We are not just consultants; we are strategic partners committed to unlocking the full potential of every business we engage with</span>
            </div>
        </div>
    )
}
