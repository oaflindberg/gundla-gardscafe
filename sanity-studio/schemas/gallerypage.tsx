export default {
  name: 'galleryPage',
  title: 'Gallerisida',
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
  ],
};
