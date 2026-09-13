import Image from 'next/image'

export default function SuccessCard() {
    return (
        <div className="flex flex-row h-70 3xl:h-107 p-4 items-center gap-5 lg:gap-16 me-12.5">
            <Image
                alt="success card"
                src="/images/home/sucessImage.png"
                width={107}
                height={107}
                className="w-120 3xl:w-164.75 h-60 3xl:h-95 rounded-xl object-cover"
            />
            <div className="flex flex-col max-w-75 md:max-w-124 items-start">
                <svg width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.5394 20.88C32.046 20.88 30.7127 20.5867 29.5394 20C28.366 19.4133 27.4594 18.6133 26.8194 17.6C26.1794 16.5333 25.8594 15.3333 25.8594 14C25.8594 12.72 26.0994 11.28 26.5794 9.68C27.1127 8.02667 27.7794 6.37333 28.5794 4.72C29.4327 3.01334 30.286 1.44 31.1394 0L38.7394 3.6C38.206 4.56 37.6994 5.6 37.2194 6.72C36.7394 7.78667 36.3127 8.74667 35.9394 9.6C35.6194 10.4 35.4327 10.96 35.3794 11.28C36.766 11.6533 37.8327 12.24 38.5794 13.04C39.326 13.7867 39.6994 14.7733 39.6994 16C39.6994 17.6 39.1127 18.8267 37.9394 19.68C36.8194 20.48 35.3527 20.88 33.5394 20.88Z" fill="#145048" />
                    <path d="M7.68 20.88C6.18667 20.88 4.85333 20.5867 3.68 20C2.50667 19.4133 1.6 18.6133 0.96 17.6C0.32 16.5333 0 15.3333 0 14C0 12.72 0.24 11.28 0.72 9.68C1.25333 8.02667 1.92 6.37333 2.72 4.72C3.57333 3.01334 4.42667 1.44 5.28 0L12.88 3.6C12.3467 4.56 11.84 5.6 11.36 6.72C10.88 7.78667 10.4533 8.74667 10.08 9.6C9.76 10.4 9.57333 10.96 9.52 11.28C10.9067 11.6533 11.9733 12.24 12.72 13.04C13.4667 13.7867 13.84 14.7733 13.84 16C13.84 17.6 13.2533 18.8267 12.08 19.68C10.96 20.48 9.49333 20.88 7.68 20.88Z" fill="#145048" />
                </svg>
                <span className="text-[10px] md:text-6 3xl:text-5 text-text-placeholder leading-3.5 md:leading-7 3xl:leading-5 mt-3 3xl:mt-5">
                    “The Value additions you have given Al Maha, is unparalleled. Your knowledge, professionalism, and ability to integrate & operate in a very complex & challenging environment are your biggest assets and I value your contributions and outcomes to help make Al Maha be one of the best establishments in Iraq and the region. We are extremely pleased with the results. I am expecting the same level of support for more projects to come.”
                </span>
                <h1 className="font-bold text-4 3xl:text-3 text-text-secondary mt-2 3xl:mt-5">Khaled Sharif</h1>
                <span className="mt-0 text-5 text-text-disabled">CEO, Al Maha Trading Iraq</span>
            </div>
        </div>
    )
}
