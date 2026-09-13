'use client';

import { useEffect } from 'react';
import GenericButton from '@/components/buttons/genericButton';

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-inter text-3 font-bold text-text-secondary">
          Something went wrong
        </h2>
        <p className="font-inter text-6 text-text-placeholder">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <GenericButton title="Try again" onClick={() => retry()} withoutIcon />
          <GenericButton title="Go home" href="/" withoutIcon revertColors />
        </div>
      </div>
    </div>
  );
}
