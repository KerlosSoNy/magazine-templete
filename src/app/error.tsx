'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import GenericButton from '@/components/buttons/genericButton';

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const t = useTranslations('ErrorPages.error');
  const tCommon = useTranslations('Common.buttons');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-inter text-3 font-bold text-text-secondary">
          {t('title')}
        </h2>
        <p className="font-inter text-6 text-text-placeholder">
          {t('description')}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <GenericButton title={t('tryAgain')} onClick={() => retry()} withoutIcon />
          <GenericButton title={tCommon('backToHome')} href="/" withoutIcon revertColors />
        </div>
      </div>
    </div>
  );
}
