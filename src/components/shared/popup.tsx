"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    showCloseButton?: boolean;
    closeOnBackdropClick?: boolean;
    animationKey?: string;
}

export default function Popup({
    isOpen,
    onClose,
    children,
    // showCloseButton = true,
    closeOnBackdropClick = true,
    animationKey = "popup-content",
}: PopupProps) {
    const wasOpen = useRef(false);

    useEffect(() => {
        if (!isOpen) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    useEffect(() => {
        wasOpen.current = isOpen;
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 w-screen h-screen top-0 left-0 z-200 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4"
            onMouseDown={(e) => {
                if (closeOnBackdropClick && e.target === e.currentTarget) onClose();
            }}
        >
            <AnimatePresence mode="wait">
                <div className="relative">
                    <motion.div
                        key={animationKey}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </AnimatePresence>
        </div>,
        document.body
    );
}