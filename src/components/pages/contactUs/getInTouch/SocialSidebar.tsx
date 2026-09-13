import { ReactNode } from "react";
import { LinkedInOutlineIcon, XOutlineIcon } from "./icons";

export interface SocialLink {
    icon: ReactNode;
    href: string;
    label: string;
}

export const defaultSocialLinks: SocialLink[] = [
    { icon: <XOutlineIcon />, href: "#", label: "X" },
    { icon: <LinkedInOutlineIcon />, href: "#", label: "LinkedIn" },
];

export default function SocialSidebar({ links = defaultSocialLinks }: { links?: SocialLink[] }) {
    return (
        <div className="fixed top-80 md:top-60 3xl:top-[490.5px] inset-s-2 lg:inset-s-10 3xl:inset-s-30 z-10 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4 text-black">
                {links.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
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
                Follow us
            </span>
        </div>
    );
}
