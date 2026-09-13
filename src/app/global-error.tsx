'use client';

import './globals.css';
import { inter } from '@/lib/fonts/fonts';

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">
        <div className="flex min-h-screen w-full items-center justify-center bg-white px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3 font-bold text-text-secondary">
              Something went wrong
            </h2>
            <p className="text-6 text-text-placeholder">
              A critical error occurred. Please try again.
            </p>
            <button
              onClick={() => retry()}
              className="mt-2 flex h-12 items-center justify-center rounded-lg bg-main px-6 text-6 font-bold text-white 3xl:h-14 3xl:text-5"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
