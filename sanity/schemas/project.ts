
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
            name: 'overview',
            title: 'Small Overview',
            type: 'string',
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