import { getTranslations } from 'next-intl/server';
import GenericButton from '@/components/buttons/genericButton';

export default async function NotFound() {
  const t = await getTranslations('ErrorPages.notFound');
  const tCommon = await getTranslations('Common.buttons');

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="font-en text-1 font-bold text-main">{t('code')}</span>
        <h2 className="font-inter text-3 font-bold text-text-secondary">
          {t('title')}
        </h2>
        <p className="font-inter text-6 text-text-placeholder">
          {t('description')}
        </p>
        <div className="mt-4">
          <GenericButton title={tCommon('backToHome')} href="/" />
        </div>
      </div>
    </div>
  );
}
