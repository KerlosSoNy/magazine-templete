import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { resolveLocale } from '@/lib/i18n/locale';

const NAMESPACES = [
  ['Common', 'common'],
  ['HomePage', 'home'],
  ['AboutPage', 'about'],
  ['ServicesPage', 'services'],
  ['CareersPage', 'careers'],
  ['ArticlesPage', 'articles'],
  ['CaseStudiesPage', 'caseStudies'],
  ['AnnouncementsPage', 'announcements'],
  ['ContactUsPage', 'contactUs'],
  ['ErrorPages', 'errors'],
] as const;

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = resolveLocale(store.get('locale')?.value);

  const modules = await Promise.all(
    NAMESPACES.map(([, file]) => import(`../../messages/${locale}/${file}.json`))
  );

  const messages = Object.fromEntries(
    NAMESPACES.map(([namespace], index) => [namespace, modules[index].default])
  );

  return { locale, messages };
});
