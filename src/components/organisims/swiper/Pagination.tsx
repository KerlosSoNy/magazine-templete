import React from 'react'

export default function CoverFlowPagination({ slides, activeIndex, currentDisplay, totalDisplay }: { slides: React.ReactNode[], activeIndex: number, currentDisplay: string, totalDisplay: string }) {
    return (
        <div className="absolute top-1/2 -translate-y-1/2 inset-e-40 z-30 flex flex-col items-center gap-8">
            <span className="text-6 text-white">
                {currentDisplay}
            </span>

            <div className="flex flex-col items-start gap-6">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={i === activeIndex}
                        className="group flex items-center justify-center p-1.5"
                    >
                        <span
                            className={`block rounded-full transition-all duration-300 ${i === activeIndex
                                ? 'w-9 h-0.5 rounded-full bg-white'
                                : 'w-6 h-px bg-white/80 group-hover:bg-gray-600'
                                }`}
                        />
                    </button>
                ))}
            </div>

            <span className="text-6 text-white">
                {totalDisplay}
            </span>
        </div>
    )
}
