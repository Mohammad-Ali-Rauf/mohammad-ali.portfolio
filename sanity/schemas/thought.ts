export default {
    name: 'thought',
    title: 'Thought',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(5).max(100),
        },
        {
            name: 'topics',
            title: 'Topics Covered',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            rows: 12,
            validation: (Rule: any) => Rule.required().min(20)
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'skills.0'
        }
    }
}