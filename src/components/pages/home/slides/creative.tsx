import Image from "next/image";

export default function Creative() {
    return (
        <div className="w-screen h-fit py-10 md:py-0 md:h-screen overflow-hidden md:mt-10 flex items-center justify-center relative" data-nav-bg="white">
            <Image
                alt="Success Background"
                src="/images/home/bigLogo.png"
                width={854}
                height={767}
                className="absolute top-1/2 opacity-[0.05] mix-blend-luminosity md:aspect-108/97 -translate-y-1/2 left-1/2 -translate-x-1/2 w-213.5 md:h-191.75"
            />
            <div className="relative z-2 w-full container grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 px-10">
                <h1 className="font-bold text-4 lg:text-2 3xl:text-1 leading-4 lg:leading-2 3xl:leading-1 text-black self-start">
                    Creating Value Begins With <span className="text-main">Understanding</span>
                </h1>
                <p className="text-text-placeholder text-[12px] lg:text-7 3xl:text-5 leading-7 3xl:leading-5 self-start">
                    At Minds Advisory, we pride ourselves on offering more than just consulting services. Our approach is deeply rooted not only in understanding your business from the ground up and ensuring that our solutions are innovative, practical and sustainable. But also fostering maximum value acclamation. Our proven track record across diverse industries underscores our capability to deliver tangible results
                </p>
                <p className="text-text-placeholder text-[12px] lg:text-7 3xl:text-5 leading-7 3xl:leading-5 self-end">
                    With a strong presence across the GCC, North Africa, North America and Europe, Minds Advisory combines global best practices with local insights helps us in understanding the nuances of each market, allowing us to alter our services to meet the specific challenges and opportunities within each region
                </p>
                <h1 className="font-bold text-4 lg:text-2 3xl:text-1 leading-4 lg:leading-2 3xl:leading-1 text-black text-start md:mx-auto self-start md:self-center">
                    Global Reach <br className="md:block hidden" /> <span className="text-main">Local Expertise</span>
                </h1>
            </div>
        </div>
    )
}
