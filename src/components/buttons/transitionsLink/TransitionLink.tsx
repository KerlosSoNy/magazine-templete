"use client"
import React, { FC } from 'react';
import Link from "next/link";
import { cn } from '@/lib/functions/utils';
import { usePageTransition } from '@/lib/hooks/UsePageTransition';
import { useNavTheme } from '@/components/providers/NavThemeProvider';

interface Props {
    active?: boolean,
    disableLinks?: boolean,
    link: {
        name: string,
        href: string
    }
    pathname?: string
    image?: boolean
    children?: React.ReactNode
    onclick?: () => void;
}

const TransitionLink: FC<Props> = ({ active, link, children, onclick, pathname }) => {
    const transition = usePageTransition()
    const isWhiteBg = useNavTheme();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        await transition(href)
    };

    return (
        <Link aria-label={link.name} onClick={async (e) => {
            if (onclick) {
                onclick()
            }
            await handleTransition(e, link.href)
        }}
            href={link.href}
            className={cn(
                "text-white! font-inter font-normal relative no-focus-ring uppercase text-7 3xl:text-5",
                {
                    "text-white! ": active,
                    "text-black!": (isWhiteBg && active) || pathname !== "/",
                    "text-text-secondary!": isWhiteBg
                }
            )}
        >
            {children ? (
                <div className={cn("", {
                    "filter-nav": active
                })}>
                    {children}
                    <span className="sr-only">{link.name}</span>
                </div>
            ) : (
                link.name
            )}
            {active &&
                <div className={`xl:opacity-100 opacity-0 absolute w-full h-px bg-white ${isWhiteBg ? "filter-teal" : ""}`} />
            }
        </Link>
    );
};

export default TransitionLink;
