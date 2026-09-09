"use client";

import TransitionLink from "@/components/buttons/transitionsLink/TransitionLink";
import { Links } from "@/lib/constant/links";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`bg-secondary flex flex-col justify-center gap-16 text-main w-full h-155.25 px-62.5 transition-all duration-700 ease-out ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-100 opacity-0"
                }`}
        >
            <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col gap-4">
                    <Image
                        src="/images/logos/logo-tele.png"
                        alt="Mind Advisor Logo"
                        width={278}
                        height={70}
                        loading="eager"
                    />
                    <span className="text-5 max-w-101 mt-7">
                        At Minds Advisory, our commitment is to create enduring value by fostering partnerships that yield meaningful, long-term success
                    </span>
                </div>
                <div className="flex flex-col ">
                    <span className="text-text-secondary font-bold text-5">Useful Links</span>
                    <div className="w-full grid grid-cols-2 gap-2.5 mt-8 max-w-84.25">
                        <div className="flex flex-col gap-5">
                            {
                                Links?.slice(0, 5).map((link, index) => {
                                    return (
                                        <Link href={link?.href} key={index} className="text-6 w-[163.5px] text-text-placeholder hover:text-main transition-colors">
                                            {link?.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-5">
                            {
                                Links?.slice(5, 8).map((link, index) => {
                                    return (
                                        <Link href={link?.href} key={index} className="text-6 w-[163.5px] text-text-placeholder hover:text-main transition-colors">
                                            {link?.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-text-secondary font-bold text-5">Find us</span>
                    <div className="flex flex-col mt-7">
                        <span className="text-6 text-text-disabled">
                            Sunday-Thursday
                        </span>
                        <Link href="tel:+966138455555" className="text-6 mt-2.5 text-text-secondary hover:text-main transition-colors"   >
                            +966 13 845 5555
                        </Link>
                    </div>
                    <div className="flex flex-col mt-8">
                        <span className="text-6 text-text-disabled">
                            Want to create value?
                        </span>
                        <Link href="mailto:discover@mindsadvisory.com" className="text-6 mt-2.5 text-text-secondary hover:text-main transition-colors"   >
                            discover@mindsadvisory.com
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-px bg-[#D2D2D2]" />
            <span className="text-6 text-text-disabled mx-auto">© 2024 Minds Advisory. All rights reserved.</span>
        </div>
    );
}