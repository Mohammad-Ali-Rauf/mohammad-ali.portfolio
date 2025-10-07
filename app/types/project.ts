export interface Project {
    title: string;
    overview: string;
    description?: string;
    githubLink: string;
    demoLink: string;
    skills: string[];
    _id: string;
    image: any;
    category?: 'featured' | 'experimental';
    status?: 'live' | 'maintenance' | 'archived';
    slug: {
        current: string;
    };
}

export const BADGE_CONFIGS = {
    status: {
        live: {
            label: 'Live',
            className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
        },
        maintenance: {
            label: 'Maintenance',
            className: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800'
        },
        archived: {
            label: 'Archived',
            className: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800'
        }
    },
    category: {
        featured: {
            label: 'Featured',
            className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        },
        experimental: {
            label: 'Experimental',
            className: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
        }
    }
} as const;