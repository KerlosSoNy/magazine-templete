import { motion } from "framer-motion";

const topBarVariants = {
    closed: { top: 7, rotate: 0 },
    open: { top: 11, rotate: 45 },
};

const bottomBarVariants = {
    closed: { top: 15, rotate: 0 },
    open: { top: 11, rotate: -45 },
};

export function MenuIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <div className="relative -mt-5.5 w-6 h-fit">
            <motion.span
                className="absolute left-0 w-6 bg-white rounded-full"
                style={{ height: 2 }}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={topBarVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.span
                className="absolute left-0 w-6 bg-white rounded-full"
                style={{ height: 2 }}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={bottomBarVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
        </div>
    );
}