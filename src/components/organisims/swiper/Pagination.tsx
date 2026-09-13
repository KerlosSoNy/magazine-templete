import { useNavTheme } from '@/lib/hooks/useNavTheme';
import React from 'react'

export default function CoverFlowPagination({ slides, activeIndex, currentDisplay, totalDisplay }: { slides: React.ReactNode[], activeIndex: number, currentDisplay: string, totalDisplay: string }) {
    const isWhite = useNavTheme();

    return (
        <div className={`${isWhite && "filter-teal"} absolute top-[95%] md:top-1/2 md:-translate-y-1/2 inset-e-3 md:inset-e-3 xl:inset-e-10 3xl:inset-e-40 z-30 flex flex-row md:flex-col items-center gap-4 3xl:gap-8 `}>
            <span className="text-6 text-white">
                {currentDisplay}
            </span>

            <div className="hidden md:flex flex-col items-start gap-2 3xl:gap-6">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={i === activeIndex}
                        className="group flex items-center justify-center p-1.5"
                    >
                        <span
                            className={`block rounded-full transition-all duration-300 ${i === activeIndex
                                ? 'w-9 h-0.5 rounded-full bg-white'
                                : 'w-6 h-px bg-white/80 '
                                }`}
                        />
                    </div>
                ))}
            </div>

            <span className="text-6 text-white md:hidden">
                /
            </span>
            <span className="text-6 text-white">
                {totalDisplay}
            </span>
        </div>
    )
}
