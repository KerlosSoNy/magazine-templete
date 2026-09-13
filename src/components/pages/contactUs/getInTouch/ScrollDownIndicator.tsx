'use client';

type ScrollDownIndicatorProps = {
    id: string;
};

export default function ScrollDownIndicator({ id }: ScrollDownIndicatorProps) {
    const handleScroll = () => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <button
            type="button"
            onClick={handleScroll}
            className="fixed top-80 md:top-60 3xl:top-[490.5px]  inset-e-2 lg:inset-e-10 3xl:inset-e-30 z-10 flex cursor-pointer flex-col items-center gap-4 text-black"
            aria-label={`Scroll to ${id}`}
        >
            <span
                className="text-7  uppercase"
                style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                }}
            >
                Scroll Down
            </span>

            <span className="h-2 w-2 rounded-full bg-black" />
            <span className="w-px h-20 bg-black -mt-4" />
        </button>
    );
}