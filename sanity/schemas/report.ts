export default {
    name: 'report',
    title: 'Report',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'skills',
            title: 'Skills Used',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
        }
    ],
}