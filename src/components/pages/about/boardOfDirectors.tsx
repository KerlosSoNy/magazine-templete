import BoardMemberCard from './Cards/BoardMemberCard'

const boardMembers = [
    { name: 'Isam M. Al Muhaidib', title: 'AMG Senior VP, Industrial Investment Division', image: '/images/about/board/Isam.png' },
    { name: 'Richard Kassaby', title: 'AMG Chief Financial officer', image: '/images/about/board/Richard.png' },
    { name: 'Kamel El-Khatib', title: 'AMG VP, Food & Consumer Investment Division', image: '/images/about/board/Kamel.png' },
    { name: 'Sayer Al-Shammari', title: 'AMG VP, Real Estate Investment Division', image: '/images/about/board/Sayer.png' },
]

const executiveManagement = [
    { name: 'Ahmed Fahmy', title: 'Managing Partner', image: '/images/about/board/Ahmed.png' },
    { name: 'Mourad Ashour', title: 'Managing Partner', image: '/images/about/board/Mourad.png' },
]

export default function BoardOfDirectors() {
    return (
        <div data-nav-bg="black" className="w-screen flex flex-col items-center py-16 xl:py-24 px-4 sm:px-8 lg:px-0 bg-main relative max-w-full overflow-hidden">
            <div className="container flex flex-col items-center z-2">
                <h2 className="text-3 xl:text-1 font-bold text-white text-center">Board Of Directors</h2>
                <p className="max-w-156 text-5 text-white/80 text-center mt-3 leading-5">Our board is comprised of distinguished leaders who bring invaluable insights and governance to Minds Advisory</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
                    {boardMembers.map((member) => (
                        <BoardMemberCard key={member.name} {...member} />
                    ))}
                </div>

                <h2 className="text-3 xl:text-1 font-bold text-white text-center mt-16">Our Executive Management</h2>

                <div className="grid grid-cols-2 gap-6 mt-10 w-full lg:w-[calc(50%-0.75rem)]">
                    {executiveManagement.map((member) => (
                        <BoardMemberCard key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </div>
    )
}
