const review = {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person giving the review',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email address of the reviewer',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      description: 'Company or organization name (optional)',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating out of 5',
      validation: (Rule: any) => 
        Rule.required()
          .min(1)
          .max(5)
          .integer()
          .error('Rating must be between 1 and 5'),
      options: {
        list: [
          { title: '1 Star', value: 1 },
          { title: '2 Stars', value: 2 },
          { title: '3 Stars', value: 3 },
          { title: '4 Stars', value: 4 },
          { title: '5 Stars', value: 5 },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'review',
      title: 'Review Text',
      type: 'text',
      description: 'The review content',
      validation: (Rule: any) => Rule.required().min(10).max(1000),
      rows: 5,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Review status - Pending reviews need approval',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Published', value: 'published' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      description: 'When the review was submitted',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
    {
      name: 'reviewerImage',
      title: 'Reviewer Image',
      type: 'image',
      description: 'Profile picture of the reviewer (optional)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      company: 'company',
      rating: 'rating',
      status: 'status',
      review: 'review',
      image: 'reviewerImage',
    },
    prepare({ name, company, rating, status, review, image }: any) {
      const statusColors: Record<string, string> = {
        pending: '🟡',
        published: '🟢',
        rejected: '🔴',
      };
      
      const statusEmoji = statusColors[status] || '⚪';
      const subtitle = `${statusEmoji} ${status?.toUpperCase() || 'PENDING'} • ${rating || 0}/5 ⭐`;
      
      return {
        title: name || 'Anonymous',
        subtitle: company ? `${subtitle} • ${company}` : subtitle,
        media: image,
      };
    },
  },
  orderings: [
    {
      title: 'Submitted Date, Newest',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [{ field: 'status', direction: 'asc' }],
    },
  ],
};

export default review;
