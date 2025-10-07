
export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            slugify: (input: string) =>
                input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 96),
            isUnique: (slug: string, context: any) => context.defaultIsUnique(slug, context),
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'overview',
            title: 'Small Overview',
            type: 'string',
            description: 'Short description for project cards (max 1-2 sentences)'
        },
        {
            name: 'description',
            title: 'Detailed Description',
            type: 'text',
            description: 'Full project details in markdown format for the project detail page'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'skills',
            title: 'Skills Used',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'githubLink',
            title: 'Github Code Link',
            type: 'string',
        },
        {
            name: 'demoLink',
            title: 'Live Demo Link',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Project Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Featured', value: 'featured' },
                    { title: 'Experimental', value: 'experimental' }
                ],
                layout: 'radio'
            },
            initialValue: 'experimental'
        },
        {
            name: 'status',
            title: 'Project Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Live', value: 'live' },
                    { title: 'Under Maintenance', value: 'maintenance' },
                    { title: 'Archived', value: 'archived' }
                ],
                layout: 'radio'
            },
            initialValue: 'live',
            hidden: ({ document }: { document: { category?: string } }) => document?.category !== 'featured' // Only show for featured projects
        }
    ],
}