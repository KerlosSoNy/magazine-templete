'use client'
import BookCall from "@/components/buttons/bookCall/bookCall";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./navbarMenu";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useNavTheme } from "@/components/providers/NavThemeProvider";
import { motion } from "framer-motion";

export default function Navbar() {
    const isWhiteBg = useNavTheme();
    const pathname = usePathname();
    const t = useTranslations("Common");
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full px-4 2xs:px-6 md:px-10 3xl:px-50 justify-between flex flex-row items-center z-100 fixed ${pathname === "/" ? "py-4 3xl:py-14 " : "py-4 xl:py-9 bg-white"}`}>
            <Link
                href="/"
                className={`no-focus-ring ${(isWhiteBg || pathname !== "/") && "filter-teal"}`}
            >
                <Image
                    src="/images/logos/logo.png"
                    alt={t("logoAlt")}
                    width={158}
                    height={40}
                    priority
                    className="w-20 2xs:w-24 h-auto xl:w-35 "
                />
            </Link>
            <div className='flex flex-row items-center'>
                <NavbarMenu />
                <div className="hidden xl:block">
                    <BookCall />
                </div>
            </div>
        </motion.div>
    )
}
