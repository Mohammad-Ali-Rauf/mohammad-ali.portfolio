import { BADGE_CONFIGS } from '@/app/types/project';

interface CategoryBadgeProps {
    category?: keyof typeof BADGE_CONFIGS.category;
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
    if (!category) return null;
    
    const config = BADGE_CONFIGS.category[category];
    if (!config) return null;

    return (
        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${config.className}`}>
            {config.label}
        </span>
    );
};