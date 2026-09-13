import Image from 'next/image'

export default function BoardMemberCard({ name, title, image }: { name: string, title: string, image: string }) {
    return (
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-secondary-bg">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
            />
            <div className="absolute z-1 h-full w-full bg-linear-to-t from-[#155048]/84 to-[#171918]/0" />
            <div className="absolute bottom-3 w-full text-center z-5 px-2 py-3">
                <h3 className="text-7 lg:text-5 font-bold text-white leading-5">{name}</h3>
                <span className="block text-[10px] h-7.5 mx-auto mt-2 max-w-60 lg:text-7 text-white/80 leading-7">{title}</span>
            </div>
        </div>
    )
}
