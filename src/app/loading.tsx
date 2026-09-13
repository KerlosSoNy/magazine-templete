export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 animate-spin rounded-full border-4 border-secondary border-t-main" />
        <p className="font-inter text-6 text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
