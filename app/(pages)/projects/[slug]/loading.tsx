export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#090908] animate-pulse">
      {/* Header Skeleton */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Skeleton */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>

            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>

            {/* Skills Skeleton */}
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              ))}
            </div>

            {/* Action Buttons Skeleton */}
            <div className="pt-4 flex gap-4">
              <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
              <div className="w-32 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}