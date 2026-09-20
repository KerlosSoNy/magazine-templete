import MotionDiv from "./motionDiv";

export default function SmallBanner({ title }: { title: string }) {
    return (
        <div className={`w-screen h-50 md:h-70 flex bg-main items-center justify-center px-5 md:px-10 `}>
            <MotionDiv once={true} delay={0.8}>
                <span className='text-3 md:text-1 text-white font-bold text-center'>{title}</span>
            </MotionDiv>
        </div>
    )
}
