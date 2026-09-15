import Link from 'next/link'
import React from 'react'

export default function GenericButton({
    withoutIcon = false,
    title,
    icon,
    onClick,
    href,
    withoutBg,
    withoutBorder,
    titleClasses,
    mainClasses,
    svgColor,
    revertColors = false,
}: {
    withoutIcon?: boolean
    svgColor?: string
    mainClasses?: string
    titleClasses?: string
    withoutBorder?: boolean
    withoutBg?: boolean
    title?: string
    icon?: React.ReactNode
    onClick?: any
    href?: string
    revertColors?: boolean
}) {
    const colorClasses = revertColors
        ? "bg-white text-main border border-main hover:bg-main hover:text-white"
        : "bg-main text-white hover:bg-white hover:text-main hover:border hover:border-main"

    const backgroundClasses = withoutBg
        ? withoutBorder
            ? ""
            : "border border-white"
        : colorClasses

    const containerClasses = `${backgroundClasses} ${mainClasses} rounded-lg h-12 w-fit px-5 2xl:px-10 flex items-center justify-center gap-1.5 transition-all duration-500 group`

    const textClasses = `font-bold text-[12px] lg:text-6 ${revertColors ? "text-main group-hover:text-white" : "text-white group-hover:text-main"} ${titleClasses}`

    const renderIcon = () => {
        if (withoutIcon) return ""
        if (icon) return icon
        return (
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                <path
                    d="M0.750041 5.75L14.0834 5.75M9.08338 0.75L14.0834 5.75L9.08337 10.75"
                    stroke="currentColor"
                    className={`${revertColors ? "text-main group-hover:text-white" : "text-white group-hover:text-main"} ${svgColor || ""}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        )
    }

    if (href) {
        return (
            <Link href={href} type="submit" className={containerClasses}>
                <span className={textClasses}>{title || 'Submit'}</span>
                {renderIcon()}
            </Link>
        )
    }

    return (
        <button onClick={onClick} type="submit" className={containerClasses}>
            <span className={textClasses}>{title || 'Submit'}</span>
            {renderIcon()}
        </button>
    )
}