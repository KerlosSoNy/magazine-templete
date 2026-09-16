import { Metadata } from 'next'
import HomeContainer from '@/components/pages/home/layout/HomeContainer'
import JsonLd from '@/components/shared/JsonLd'
import { websiteSchema } from '@/lib/seo/schema'
import { pageMetadata } from '@/lib/seo/metadata'
import { resolveLocale } from '@/lib/i18n/locale'
import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('HomePage.meta')
    const locale = resolveLocale(await getLocale())
    return pageMetadata({ locale, title: t('title'), description: t('description'), path: '/' })
}

export default function page() {
  return (
    <div >
      <JsonLd data={websiteSchema()} />
      <HomeContainer />
    </div>
  )
}
