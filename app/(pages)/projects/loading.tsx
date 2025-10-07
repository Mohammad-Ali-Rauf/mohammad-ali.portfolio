const ProjectsLoading = () => {
    return (
        <div className='divide-y divide-gray-200 dark:divide-gray-800'>
            {/* Header Skeleton */}
            <div className='space-y-4 pt-6 pb-8'>
                <div className='h-8 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse max-w-2xl'></div>
                <div className='space-y-2'>
                    <div className='h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse max-w-2xl'></div>
                    <div className='h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse max-w-xl'></div>
                </div>
            </div>

            {/* Project Cards Skeleton */}
            <div className='grid gap-6 pt-8 pb-8 sm:gap-8'>
                {[...Array(3)].map((_, index) => (
                    <ProjectCardSkeleton key={index} index={index} />
                ))}
            </div>
        </div>
    );
};

// Project Card Skeleton Component
const ProjectCardSkeleton = ({ index }: { index: number }) => (
    <article
        className={`group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        } lg:flex lg:items-stretch lg:gap-8`}
    >
        {/* Image Skeleton */}
        <div className='relative h-56 sm:h-64 md:h-72 lg:h-auto lg:w-1/2 overflow-hidden bg-gray-300 dark:bg-gray-800 animate-pulse'>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-400/20 to-transparent' />
        </div>

        {/* Content Skeleton */}
        <div className='lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between'>
            <div>
                {/* Title and Badges Row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex-1">
                        <div className='h-7 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-2 max-w-48'></div>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:ml-4 sm:flex-nowrap">
                        <div className='h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse'></div>
                        <div className='h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse'></div>
                    </div>
                </div>

                {/* Skills Tags Skeleton */}
                <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className='h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse'
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Overview Skeleton */}
                <div className="space-y-2 mb-4 sm:mb-6">
                    <div className='h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse'></div>
                    <div className='h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse'></div>
                    <div className='h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse max-w-3/4'></div>
                </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-wrap gap-3">
                <div className='h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse'></div>
                <div className='h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse'></div>
            </div>
        </div>
    </article>
);

export default ProjectsLoading;