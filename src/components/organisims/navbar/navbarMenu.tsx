"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TransitionLink from "@/components/buttons/transitionsLink/TransitionLink";
import { Links } from "@/lib/constant/links";

const listVariants = {
    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

export default function NavbarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex flex-row items-center">
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={listVariants}
                        className="flex flex-row-reverse items-center gap-6 me-6"
                    >
                        {Links.slice().reverse().map((link, index) => (
                            <motion.li
                                key={link.href ?? index}
                                variants={itemVariants}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="list-none whitespace-nowrap"
                            >
                                <TransitionLink link={link} />
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            <div
                className="flex flex-row items-center gap-3 me-6 cursor-pointer select-none"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className="text-white text-5">Menu</span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                    <g clipPath="url(#clip0_9_2192)">
                        <rect width="24" height="2" transform="translate(24 16.2783) rotate(-180)" fill="white" />
                        <rect width="16" height="2" transform="translate(8.19336 9)" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_9_2192">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
}