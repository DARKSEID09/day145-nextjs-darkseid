"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">
        Something went wrong!
      </h1>

      <p>Please try again.</p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}