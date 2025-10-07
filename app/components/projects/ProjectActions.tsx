import { Project } from '@/app/types/project';
import Link from 'next/link';

interface ProjectActionsProps {
    project: Project;
    variant?: 'card' | 'page';
}

export const ProjectActions = ({ project, variant = 'card' }: ProjectActionsProps) => {
    const isCard = variant === 'card';

    // Base button styles
    const baseButtonClass = `
        inline-flex items-center justify-center gap-2
        rounded-xl font-semibold transition-all duration-300
        border-2 hover:scale-105 active:scale-95
        group/btn
    `;

    const primaryButtonClass = `
        ${baseButtonClass}
        bg-gradient-to-br from-red-500 to-red-600 
        hover:from-red-600 hover:to-red-700
        text-white border-red-500
        shadow-lg hover:shadow-xl
    `;

    const secondaryButtonClass = `
        ${baseButtonClass}
        bg-transparent text-gray-700 dark:text-gray-300
        border-gray-300 dark:border-gray-600
        hover:bg-gray-50 dark:hover:bg-gray-800
        hover:border-gray-400 dark:hover:border-gray-500
        shadow-sm hover:shadow-md
    `;

    const disabledButtonClass = `
        ${baseButtonClass}
        bg-gray-100 dark:bg-gray-800 
        text-gray-400 dark:text-gray-500
        border-gray-200 dark:border-gray-700 
        cursor-not-allowed hover:scale-100
    `;

    // Size variants - Better responsive sizing
    const sizeClass = isCard
        ? 'px-4 py-3 text-sm min-w-[120px]'
        : 'px-6 py-4 text-base min-w-[140px] lg:min-w-[160px]';

    return (
        <div className={`flex flex-col lg:flex-row gap-3 ${isCard ? 'w-full' : 'w-full lg:max-w-2xl'}`}>

            {/* Primary Action - View Details */}
            {variant == 'card' && (
                <Link
                    href={`/projects/${project.slug.current}`}
                    className={`
                    ${primaryButtonClass} 
                    ${sizeClass}
                    flex-1 lg:flex-none justify-center
                `}
                >
                    <EyeIcon />
                    <span className="whitespace-nowrap">
                        {isCard ? 'View Details' : 'Project Details'}
                    </span>
                </Link>
            )}

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
                {/* GitHub Button */}
                <a
                    href={project.githubLink}
                    className={`
                        ${secondaryButtonClass} 
                        ${sizeClass}
                        flex-1 justify-center
                    `}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()}
                >
                    <GitHubIcon />
                    <span className="whitespace-nowrap">
                        {isCard ? 'Code' : 'Source Code'}
                    </span>
                </a>

                {/* Demo Button */}
                {project.demoLink ? (
                    <a
                        href={project.demoLink}
                        className={`
                            ${primaryButtonClass} 
                            ${sizeClass}
                            flex-1 justify-center
                        `}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalIcon />
                        <span className="whitespace-nowrap">
                            {isCard ? 'Demo' : 'Live Demo'}
                        </span>
                    </a>
                ) : (
                    <button
                        disabled
                        className={`
                            ${disabledButtonClass} 
                            ${sizeClass}
                            flex-1 justify-center
                        `}
                    >
                        <LockIcon />
                        <span className="whitespace-nowrap">
                            {isCard ? 'Private' : 'Private Demo'}
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
};

// Modern Icon Components
const EyeIcon = () => (
    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const GitHubIcon = () => (
    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const ExternalIcon = () => (
    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const LockIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);