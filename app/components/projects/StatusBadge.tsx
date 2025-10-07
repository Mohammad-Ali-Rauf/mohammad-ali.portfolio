import { BADGE_CONFIGS } from '@/app/types/project';

interface StatusBadgeProps {
    status?: keyof typeof BADGE_CONFIGS.status;
    category?: string;
}

export const StatusBadge = ({ status, category }: StatusBadgeProps) => {
    if (category !== 'featured' || !status) return null;
    
    const config = BADGE_CONFIGS.status[status];
    if (!config) return null;

    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${config.className}`}>
            {config.label}
        </span>
    );
};