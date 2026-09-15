'use client'
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { LinkedInOutlineIcon, XOutlineIcon } from "./icons";

export interface SocialLink {
    icon: ReactNode;
    href: string;
    labelKey: "x" | "linkedin";
}

export const defaultSocialLinks: SocialLink[] = [
    { icon: <XOutlineIcon />, href: "#", labelKey: "x" },
    { icon: <LinkedInOutlineIcon />, href: "#", labelKey: "linkedin" },
];

export default function SocialSidebar({ links = defaultSocialLinks }: { links?: SocialLink[] }) {
    const t = useTranslations("Common.social");
    return (
        <div className={`fixed top-80 md:top-60 3xl:top-[490.5px] inset-s-2 lg:inset-s-10 3xl:inset-s-30 z-10 flex flex-col items-center gap-4`}>
            <div className="flex flex-col items-center gap-4 text-black">
                {links.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        aria-label={t(social.labelKey)}
                        className="hover:opacity-70 transition-opacity"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <span
                className="text-7  mt-2 text-black uppercase"
                style={{ writingMode: "vertical-rl", transform: "rotate(-360deg)" }}
            >
                {t("followUs")}
            </span>
        </div>
    );
}
