import type { Locale } from '@/lib/i18n/locale'
import { pickLocale } from '@/lib/i18n/pickLocale'
import {
    SITE_URL,
    ORG_NAME,
    ORG_LOGO_PATH,
    ORG_PHONE,
    ORG_EMAIL,
    ORG_ADDRESS,
    ORG_GEO,
    ORG_FOUNDERS,
} from '@/lib/constant/site'
import type { ArticleItem } from '@/components/pages/articles/types'
import type { CaseStudyItem } from '@/components/pages/caseStudies/types'
import type { MediaCoverageItem } from '@/components/pages/announcements/types'
import type { JobPosition, EmploymentType } from '@/components/pages/careers/types'
import type { ServiceCategory } from '@/components/pages/services/types'

const ORG_ID = `${SITE_URL}/#organization`
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`
const WEBSITE_ID = `${SITE_URL}/#website`

const postalAddress = {
    '@type': 'PostalAddress',
    ...ORG_ADDRESS,
}

/** Site-wide entity describing Minds Advisory as a company. Rendered once, in the root layout. */
export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': ORG_ID,
        name: ORG_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${ORG_LOGO_PATH}`,
        image: `${SITE_URL}${ORG_LOGO_PATH}`,
        email: ORG_EMAIL,
        telephone: ORG_PHONE,
        address: postalAddress,
        founder: ORG_FOUNDERS.map((founder) => ({
            '@type': 'Person',
            name: founder.name,
            jobTitle: founder.jobTitle,
        })),
    }
}

/** Site-wide entity describing the Dammam office as a physical, locatable business. Rendered once, in the root layout. */
export function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': LOCAL_BUSINESS_ID,
        name: ORG_NAME,
        url: SITE_URL,
        image: `${SITE_URL}${ORG_LOGO_PATH}`,
        telephone: ORG_PHONE,
        email: ORG_EMAIL,
        address: postalAddress,
        geo: {
            '@type': 'GeoCoordinates',
            latitude: ORG_GEO.latitude,
            longitude: ORG_GEO.longitude,
        },
        parentOrganization: { '@id': ORG_ID },
    }
}

/** The website itself, referenced by isPartOf on every page-level schema below. */
export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: ORG_NAME,
        url: SITE_URL,
        publisher: { '@id': ORG_ID },
    }
}

export function aboutPageSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        url: `${SITE_URL}/about`,
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: { '@id': ORG_ID },
    }
}

export function contactPageSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: `${SITE_URL}/contact-us`,
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: { '@id': LOCAL_BUSINESS_ID },
    }
}

function collectionPageSchema(
    path: string,
    name: string,
    items: { url: string; name: string }[]
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name,
        url: `${SITE_URL}${path}`,
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: item.url,
                name: item.name,
            })),
        },
    }
}

export function articlesCollectionSchema(items: ArticleItem[], locale: Locale, name: string) {
    return collectionPageSchema(
        '/articles',
        name,
        items.map((item) => ({
            url: `${SITE_URL}${item.href}`,
            name: pickLocale(item.title, locale),
        }))
    )
}

export function articleSchema(item: ArticleItem, locale: Locale) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pickLocale(item.title, locale),
        description: pickLocale(item.excerpt, locale),
        image: `${SITE_URL}${item.detail.heroImage}`,
        url: `${SITE_URL}${item.href}`,
        inLanguage: locale,
        datePublished: item.year,
        articleSection: pickLocale(item.industry, locale),
        author: {
            '@type': 'Person',
            name: item.detail.author.name,
            jobTitle: pickLocale(item.detail.author.role, locale),
        },
        publisher: { '@id': ORG_ID },
        isPartOf: { '@id': WEBSITE_ID },
    }
}

export function caseStudiesCollectionSchema(items: CaseStudyItem[], locale: Locale, name: string) {
    return collectionPageSchema(
        '/case-studies',
        name,
        items.map((item) => ({
            url: `${SITE_URL}${item.href}`,
            name: pickLocale(item.title, locale),
        }))
    )
}

export function caseStudySchema(item: CaseStudyItem, locale: Locale) {
    const [year, , category] = item.tags
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pickLocale(item.title, locale),
        description: pickLocale(item.description, locale),
        image: `${SITE_URL}${item.image}`,
        url: `${SITE_URL}${item.href}`,
        inLanguage: locale,
        datePublished: year,
        articleSection: pickLocale(category, locale),
        publisher: { '@id': ORG_ID },
        isPartOf: { '@id': WEBSITE_ID },
    }
}

export function mediaCoverageCollectionSchema(items: MediaCoverageItem[], locale: Locale, name: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name,
        url: `${SITE_URL}/announcements`,
        isPartOf: { '@id': WEBSITE_ID },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'CreativeWork',
                    name: pickLocale(item.title, locale),
                    creator: pickLocale(item.source, locale),
                    ...(item.images[0] ? { image: `${SITE_URL}${item.images[0]}` } : {}),
                },
            })),
        },
    }
}

const EMPLOYMENT_TYPE_MAP: Record<EmploymentType, string> = {
    'Full time': 'FULL_TIME',
    'Part time': 'PART_TIME',
    Contract: 'CONTRACTOR',
}

/**
 * `datePosted`/`validThrough` are intentionally omitted: the job data has no posting
 * date, and fabricating one would misrepresent the listing to search engines.
 */
export function jobPostingsSchema(positions: JobPosition[], locale: Locale) {
    return positions
        .filter((position) => position.isOpen)
        .map((position) => ({
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: pickLocale(position.title, locale),
            description: pickLocale(position.description, locale),
            identifier: {
                '@type': 'PropertyValue',
                name: ORG_NAME,
                value: position.id,
            },
            employmentType: EMPLOYMENT_TYPE_MAP[position.employmentType],
            hiringOrganization: { '@id': ORG_ID },
            ...(position.workMode === 'Remote'
                ? {
                    jobLocationType: 'TELECOMMUTE',
                    applicantLocationRequirements: { '@type': 'Country', name: 'SA' },
                }
                : {
                    jobLocation: {
                        '@type': 'Place',
                        address: postalAddress,
                    },
                }),
        }))
}

export function servicesSchema(categories: ServiceCategory[], locale: Locale) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Business Consulting',
        provider: { '@id': ORG_ID },
        areaServed: 'SA',
        url: `${SITE_URL}/services`,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services',
            itemListElement: categories.map((category) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: pickLocale(category.label, locale),
                    description: pickLocale(category.description, locale),
                },
            })),
        },
    }
}
