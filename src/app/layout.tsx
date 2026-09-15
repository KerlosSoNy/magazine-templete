import { cookies } from 'next/headers';
import AnimationWrapper from '@/components/providers/AnimationWrapper';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import Footer from '@/components/organisims/footer/footer';
import Navbar from '@/components/organisims/navbar/navbar';
import { inter, namian, notoKufiArabic } from '@/lib/fonts/fonts';
import { resolveLocale } from '@/lib/i18n/locale';
import { Viewport } from 'next';
import { NavThemeProvider } from '@/components/providers/NavThemeProvider';
import JsonLd from '@/components/shared/JsonLd';
import { organizationSchema, localBusinessSchema } from '@/lib/seo/schema';

const metadata = {
  title: 'Minds Advisor',
  description: 'Minds Advisor',
};

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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
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