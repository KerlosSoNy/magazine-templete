import GenericButton from '@/components/buttons/genericButton';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="font-en text-1 font-bold text-main">404</span>
        <h2 className="font-inter text-3 font-bold text-text-secondary">
          Page not found
        </h2>
        <p className="font-inter text-6 text-text-placeholder">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-4">
          <GenericButton title="Back to home" href="/" />
        </div>
      </div>
    </div>
  );
}
