export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
            title: 'Comment',
            name: 'comment',
            type: 'document',
            fields: [
                {
                    title: 'Author',
                    name: 'author',
                    type: 'reference',
                    to: [{type: 'user'}]
                },
                {
                    title: 'Comment',
                    name: 'comment',
                    type: 'string'
                }
            ]
        }
      ]
    },
  ],
  preview: {
    select:{
        title: 'comments.0.comment',
        authorName: 'author.name',
        authorUsername: 'author.username',
        media: 'photo'
    },
    prepare(selection) { // selection에는 select에서 지정해준 데이터가 넘어온다
        const {title, authorName, authorUsername, media} = selection
        return {
            title,
            subtitle: `by ${authorName} (${authorUsername})`,
            media,
        }
    }
  }
}
