import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ReadMoreLink({ href, label }: { href: string; label?: string }) {
    const t = useTranslations('Common.buttons')

    return (
        <Link href={href} className="group inline-flex items-center gap-2.5 text-6 font-bold text-main">
            {label ?? t('readMore')}
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1"
            >
                <path
                    d="M4.16669 10H15.8334M10.8334 4.16669L15.8334 10L10.8334 15.8334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Link>
    )
}
