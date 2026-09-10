
export default function SmallBanner({ title }: { title: string }) {
    return (
        <div className="w-screen h-50 md:h-70 flex bg-main items-center justify-center">
            <span className='text-3 md:text-1 text-white font-bold'>{title}</span>
        </div>
    )
}
