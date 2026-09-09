import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'ar'];

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get('locale')?.value;
  const resolvedLocale = locales.includes(locale ?? '') ? locale! : 'en';

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
});