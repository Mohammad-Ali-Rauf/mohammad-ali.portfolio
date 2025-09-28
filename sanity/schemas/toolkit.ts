export default {
  name: 'toolkit',
  title: 'Toolkit',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: 'Mastered', value: 'mastered' },
          { title: 'Learning', value: 'learning' },
          { title: 'Planned', value: 'planned' }
        ]
      }
    },
    {
      name: 'tools',
      title: 'Tools & Technologies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Tool Name',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'color',
              title: 'Color Theme',
              type: 'string',
              options: {
                list: [
                  { title: 'Red', value: 'red' },
                  { title: 'Blue', value: 'blue' },
                  { title: 'Green', value: 'green' },
                  { title: 'Yellow', value: 'yellow' },
                  { title: 'Purple', value: 'purple' },
                  { title: 'Cyan', value: 'cyan' },
                  { title: 'Gray', value: 'gray' }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}