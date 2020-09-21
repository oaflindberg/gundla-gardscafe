export default {
  name: 'eventPage',
  title: 'Eventsida',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Sidtitel',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Herobild',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'descriptionOne',
      title: 'Inledning',
      type: 'blockContent',
    },
  ],
};
