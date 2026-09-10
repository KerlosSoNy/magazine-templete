import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';
import {resolveLocale} from '@/lib/i18n/locale';

export default getRequestConfig(async () => {
  const store = await cookies();
  const resolvedLocale = resolveLocale(store.get('locale')?.value);

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
});