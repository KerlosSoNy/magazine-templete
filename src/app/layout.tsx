import { cookies } from 'next/headers';
import AnimationWrapper from '@/components/providers/AnimationWrapper';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import './globals.css';
import Footer from '@/components/organisims/footer/footer';
import Navbar from '@/components/organisims/navbar/navbar';
import { inter, namian, notoKufiArabic } from '@/lib/fonts/fonts';
import { resolveLocale } from '@/lib/i18n/locale';
import { Metadata, Viewport } from 'next';
import { NavThemeProvider } from '@/components/providers/NavThemeProvider';
import JsonLd from '@/components/shared/JsonLd';
import { organizationSchema, localBusinessSchema } from '@/lib/seo/schema';
import { SITE_URL, ORG_NAME } from '@/lib/constant/site';

const OG_LOCALE = { en: 'en_US', ar: 'ar_SA' } as const;

export async function generateMetadata(): Promise<Metadata> {
  const store = await cookies();
  const locale = resolveLocale(store.get('locale')?.value);
  const t = await getTranslations('Common.meta');

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('defaultTitle'),
      template: `%s | ${ORG_NAME}`,
    },
    description: t('defaultDescription'),
    icons: { icon: '/favicon.ico' },
    openGraph: {
      siteName: ORG_NAME,
      locale: OG_LOCALE[locale],
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await cookies();
  const locale = resolveLocale(store.get('locale')?.value);

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${namian.variable} ${notoKufiArabic.variable}`}
    >
      <body className={locale === "ar" ? "font-ar" : "font-en"}>
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <NextIntlClientProvider>
          <AnimationWrapper>
            <NavThemeProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </NavThemeProvider>
          </AnimationWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}