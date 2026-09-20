'use client';
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionTag = keyof typeof motion;
type Axis = "x" | "y";

interface FadeInSlideProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    offset?: number;      // distance to slide from
    axis?: Axis;          // "x" or "y"
    once?: boolean;
    amount?: number;
    className?: string;
    as?: MotionTag;
    spring?: boolean;     // toggle spring physics
    stiffness?: number;
    damping?: number;
    bounce?: number;
}

export default function MotionDiv({
    children,
    delay = 0,
    duration = 0.5,
    offset = -40,
    axis = "x",
    once = true,
    amount = 0.5,
    className = "",
    as = "div",
    spring = false,
    stiffness = 300,
    damping = 12,
    bounce = 0.6,
}: FadeInSlideProps) {
    const MotionTag = motion[as] as unknown as React.ElementType;

    const transition = spring
        ? { type: "spring" as const, stiffness, damping, duration, delay, bounce }
        : { duration, delay };

    return (
        <MotionTag
            initial={{ opacity: 0, [axis]: offset }}
            whileInView={{ opacity: 1, [axis]: 0 }}
            viewport={{ once, amount }}
            transition={transition}
            className={className}
        >
            {children}
        </MotionTag>
    );
}