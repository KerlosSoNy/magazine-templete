import Image from 'next/image'
import StandCard from './Cards/StandFor'



export default function StandFor() {
    return (
        <div className="w-screen flex flex-col items-center py-16 lg:py-24 bg-white px-4 sm:px-8 lg:px-0 text-center lg:text-left">
            <span className="text-3 md:text-2 lg:text-1 font-bold text-text-secondary">We <span className="text-main">Stand</span> For</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mt-10">
                <div className="flex flex-col items-center lg:items-start gap-13">
                    <StandCard title={'Innovation'} subTitle={"Innovation as Our Guiding Light"} desc={'We foster a culture of creativity and forward-thinking, encouraging our consultants to challenge the status quo and develop innovative solutions that drive value for our clients. Our commitment to innovation ensures that we remain at the forefront of industry developments, continuously improving and adapting to meet the evolving needs of our clients'} />
                    <StandCard title={'Integrity'} subTitle={"Integrity in Every Interaction"} desc={'Upholding the highest standards of honesty and ethical conduct, we place our clients needs at the forefront, ensuring trust and transparency in all our dealings. Integrity is the foundation of our relationships, guiding our actions and decisions to build lasting partnerships based on mutual respect and trust'} />
                </div>
                <div className="flex flex-col items-center gap-10 md:gap-18.75 md:pt-18.75">
                    <Image
                        src="/images/about/map.png"
                        alt='Map Stands'
                        width={455.5}
                        height={325.51}
                        className="w-full max-w-[455.5px] h-auto"
                    />
                    <div className="flex flex-col items-center lg:items-start">
                        <StandCard title={'Excellence'} subTitle={"Striving for Excellence"} desc={'Committed to best practices, we continuously strive for efficiency and superior client satisfaction, delivering sustainable and outstanding results. Excellence is our standard which is why we are implementers, and we are dedicated to exceeding expectations through meticulous attention to detail and unwavering commitment to quality'} />
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-13">
                    <StandCard title={'Collaboration'} subTitle={"Together, We Achieve More"} desc={'We believe in the power of teamwork and open communication, creating an inclusive environment where knowledge sharing leads to exceptional outcomes. By working collaboratively with our clients and partners, we hamess diverse perspectives and expertise to deliver comprehensive solutions that drive success'} />
                    <StandCard title={'Accountability'} subTitle={"Owning Our Commitments"} desc={'We take responsibility for our actions, deliver on our promises, and hold ourselves and others accountable for achieving the highest standards. Accountability ensures that we maintain the trust of our clients and stakeholders, consistently delivering on our commitments and driving continuous improvement'} />
                </div>
            </div>
        </div>
    )
}
