'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRef, useState, useCallback, useEffect } from 'react';
import CoverFlowPagination from './Pagination';
import FollowUs from './followUs';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface CoverflowSliderProps {
    slides: React.ReactNode[];
}

// Slide transition speed - tweak to taste
const DURATION = 0.9;
const EASE = 'power2.inOut';
// Extra lock (ms) after a transition finishes, to eat leftover
// trackpad inertia so a single gesture can't sneak in a second step.
const COOLDOWN_MS = 500;
// Minimum swipe distance (px) to count as a slide change on touch
const SWIPE_THRESHOLD = 100;

export default function CoverflowSlider({ slides }: CoverflowSliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
    const indexRef = useRef(0);
    const isAnimating = useRef(false);
    const cooldownRef = useRef(false);
    const stRef = useRef<ScrollTrigger | null>(null);
    const touchStartY = useRef<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slideCount = slides.length;
    const steps = Math.max(slideCount - 1, 1);

    const setPanelIndex = useCallback((i: number) => {
        indexRef.current = i;
        setActiveIndex(i);
    }, []);

    useEffect(() => {
        panelRefs.current.forEach((panel, i) => {
            if (!panel) return;
            if (i === 0) {
                gsap.set(panel, { yPercent: 0, scale: 1, opacity: 1, zIndex: 2 });
            } else {
                gsap.set(panel, { yPercent: 100, scale: 1, opacity: 0, zIndex: 1 });
            }
        });
    }, []);

    // Moves exactly one slide (newIndex is always indexRef.current +/- 1).
    // Also tweens the real window scroll position to match, so the
    // scrollbar tracks whichever slide is currently showing.
    const goTo = useCallback((newIndex: number, direction: 1 | -1) => {
        if (isAnimating.current || cooldownRef.current) return;
        if (newIndex < 0 || newIndex >= slideCount) return;

        const current = panelRefs.current[indexRef.current];
        const next = panelRefs.current[newIndex];
        const st = stRef.current;
        if (!current || !next || !st) return;

        // Lock immediately - this blocks any further scroll input
        // (see the wheel/touch handlers below) until this slide has
        // fully finished animating in.
        isAnimating.current = true;

        gsap.set(next, {
            yPercent: direction === 1 ? 100 : -100,
            scale: 1,
            opacity: 1,
            zIndex: 2,
        });
        gsap.set(current, { zIndex: 1 });

        const targetScroll = st.start + (newIndex / steps) * (st.end - st.start);

        const tl = gsap.timeline({
            defaults: { duration: DURATION, ease: EASE },
            onComplete: () => {
                setPanelIndex(newIndex);
                isAnimating.current = false;

                // Short cooldown to absorb trailing wheel/touch events
                // from the same physical gesture (trackpad inertia,
                // multiple wheel ticks in one swipe, etc).
                cooldownRef.current = true;
                window.setTimeout(() => {
                    cooldownRef.current = false;
                }, COOLDOWN_MS);
            },
        });

        tl.to(next, { yPercent: 0 }, 0);
        tl.to(current, { scale: 0.85, opacity: 0 }, 0);
        // Keep the real scrollbar in sync with the slide as it animates.
        tl.to(window, { scrollTo: targetScroll }, 0);
    }, [slideCount, steps, setPanelIndex]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Pin only - no scrub. We drive everything manually so that
        // one gesture always moves exactly one slide, regardless of
        // how far or fast the user scrolls.
        const st = ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: `+=${steps * 100}%`,
            pin: true,
        });
        stRef.current = st;

        // Fixes the "extra gap below the last slide" issue without
        // touching ScrollTrigger's internal timing: just recalculate
        // pin spacing once layout has fully settled (fonts/images
        // etc. can shift measured heights after first paint).
        const refreshTimeout = window.setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);

        const attemptStep = (direction: 1 | -1) => {
            if (!st.isActive) return false;

            // Currently locked (animating or in cooldown) - swallow
            // the input entirely, don't queue anything up.
            if (isAnimating.current || cooldownRef.current) return true;

            const newIndex = indexRef.current + direction;

            if (newIndex < 0 || newIndex >= slideCount) {
                // At a boundary - release the pin by scrolling the
                // page just past it, so normal scrolling can continue.
                const target = direction === 1 ? st.end + 5 : st.start - 5;
                gsap.to(window, {
                    duration: 0.5,
                    ease: 'power2.inOut',
                    scrollTo: target,
                });
                return true;
            }

            goTo(newIndex, direction);
            return true;
        };

        const onWheel = (e: WheelEvent) => {
            if (!st.isActive) return; // let native scroll happen outside the section
            e.preventDefault();
            attemptStep(e.deltaY > 0 ? 1 : -1);
        };

        const onTouchStart = (e: TouchEvent) => {
            if (!st.isActive) return;
            touchStartY.current = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!st.isActive || touchStartY.current === null) return;
            // Freeze native scroll while inside the pinned section.
            e.preventDefault();
        };

        const onTouchEnd = (e: TouchEvent) => {
            if (!st.isActive || touchStartY.current === null) return;
            const endY = e.changedTouches[0].clientY;
            const delta = touchStartY.current - endY;
            touchStartY.current = null;

            if (Math.abs(delta) < SWIPE_THRESHOLD) return;
            attemptStep(delta > 0 ? 1 : -1);
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd, { passive: true });

        return () => {
            window.clearTimeout(refreshTimeout);
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            st.kill();
            stRef.current = null;
        };
    }, [slideCount, steps, goTo]);

    const currentDisplay = String(activeIndex + 1).padStart(2, '0');
    const totalDisplay = String(slideCount).padStart(2, '0');

    return (
        <section
            ref={containerRef}
            className="relative  w-screen h-screen overflow-hidden bg-gray-100"
        >
            {slides.map((slide, i) => (
                <div
                    key={i}
                    ref={(el) => { panelRefs.current[i] = el; }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <div className="w-full h-full flex items-center justify-center bg-white shadow-lg overflow-hidden">
                        {slide}
                    </div>
                </div>
            ))}

            <FollowUs />
            <CoverFlowPagination
                slides={slides}
                activeIndex={activeIndex}
                currentDisplay={currentDisplay}
                totalDisplay={totalDisplay}
            />
        </section>
    );
}