export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'birthDate',
      title: 'Birth Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'codingStartAge',
      title: 'Started Coding At Age',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0).max(20)
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        }
      ]
    }
  ]
}