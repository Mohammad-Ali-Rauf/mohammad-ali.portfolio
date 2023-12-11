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
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
        },
    ],
}