import type { Metadata } from 'next'
import { SITE_URL, ORG_NAME, ORG_LOGO_PATH } from '@/lib/constant/site'
import type { Locale } from '@/lib/i18n/locale'

const OG_LOCALE: Record<Locale, string> = { en: 'en_US', ar: 'ar_SA' }

export function pageMetadata({
    locale,
    title,
    description,
    path,
    image = ORG_LOGO_PATH,
    type = 'website',
}: {
    locale: Locale
    title: string
    description: string
    path: string
    image?: string
    type?: 'website' | 'article'
}): Metadata {
    const url = `${SITE_URL}${path}`
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: ORG_NAME,
            locale: OG_LOCALE[locale],
            type,
            images: [{ url: imageUrl }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    }
}
