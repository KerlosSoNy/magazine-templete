'use client'
import { maturityData } from './dummy'

export default function MaturityCards() {
    return (
        <div className="w-full max-w-300 3xl:max-w-355.5 px-4 grid grid-cols-2 lg:flex gap-4 mt-5 3xl:mt-10">
            {maturityData.map((item, index) => (
                <div
                    key={index}
                    className="group flex-1 flex flex-col justify-between rounded-lg p-3 xl:p-4 2xl:p-5 h-50 md:h-40 lg:h-60 2xl:h-63.75 transition-colors duration-300 border bg-transparent border-[#9FB7B4] hover:bg-secondary"
                >
                    <div>
                        <div className="text-secondary transition-colors duration-300 group-hover:text-main">
                            {item.icon}
                        </div>
                        <h3 className="text-6 xl:text-6 2xl:text-4 leading-4 font-bold mt-2 lg:mt-4 text-secondary transition-colors duration-300 group-hover:text-main">
                            {item.title}
                        </h3>

                    </div>
                    <div className="flex flex-col">
                        <p className="text-[12px] xl:text-7 leading-7 line-clamp-2 lg:line-clamp-3 mt-0 2xl:mt-2 text-secondary transition-colors duration-300 group-hover:text-main">
                            {item.description}
                        </p>
                        <div className="mt-2 lg:mt-5">
                            <div className="flex items-center justify-between text-[12px] xl:text-7 2xl:text-6 font-bold text-secondary transition-colors duration-300 group-hover:text-main">
                                <span className="font-normal">Current Maturity</span>
                                <span>{item.percentage}%</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full lg:mt-2 2xl:mt-2 overflow-hidden bg-secondary/15 transition-colors duration-300 group-hover:bg-main/20">
                                <div
                                    className="h-full rounded-full bg-secondary transition-colors duration-300 group-hover:bg-main"
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}