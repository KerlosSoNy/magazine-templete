import AnimationWrapper from '@/components/providers/AnimationWrapper';
import { NavThemeProvider } from '@/components/providers/NavThemeProvider';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import Footer from '@/components/organisims/footer/footer';
import Navbar from '@/components/organisims/navbar/navbar';
import { inter, namian, notoKufiArabic } from '@/lib/fonts/fonts';

const metadata = {
  title: 'Minds Advisor',
  description: 'Minds Advisor',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${namian.variable} ${notoKufiArabic.variable}`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body suppressHydrationWarning className={locale === "ar" ? "font-ar" : "font-en"}>
        <NextIntlClientProvider>
          <NavThemeProvider>
            <AnimationWrapper>
              <Navbar />
              {children}
              <Footer />
            </AnimationWrapper>
          </NavThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}