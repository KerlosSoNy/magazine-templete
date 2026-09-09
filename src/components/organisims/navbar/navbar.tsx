'use client'
import BookCall from "@/components/buttons/bookCall/bookCall";
import { useNavTheme } from "@/lib/hooks/useNavTheme";
import Image from "next/image";
import Link from "next/link";
import NavbarMenu from "./navbarMenu";

export default function Navbar() {
    const isWhiteBg = useNavTheme();
    return (
        <div className="w-screen px-50 justify-between py-14 flex flex-row items-center z-10 fixed">
            <Link
                href="/"
                className={`no-focus-ring ${isWhiteBg && "filter-teal"}`}
            >
                <Image
                    src="/images/logos/logo.png"
                    alt="Mind Advisor Logo"
                    width={158}
                    height={40}
                    loading="eager"
                    className="w-24 h-auto xl:w-35 "
                />
            </Link>
            <div className='flex flex-row items-center'>
                <NavbarMenu />
                <BookCall />
            </div>
        </div>
    )
}
