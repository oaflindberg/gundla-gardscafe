export default {
  name: 'catering',
  title: 'Catering',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Herobild',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pageTitle',
      title: 'Sidtitel',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Rubrik_1',
      type: 'string',
    },
    {
      name: 'titleTwo',
      title: 'Rubrik_2',
      type: 'string',
    },
    {
      name: 'contact_title',
      title: 'Kontaktknapp',
      type: 'string',
    },
    {
      name: 'menu_title',
      title: 'Menyknapp',
      type: 'string',
    },
    {
      name: 'imageOne',
      title: 'Huvudbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageOne_description',
      title: 'Bildbeskrivning',
      type: 'string',
    },
    {
      name: 'catering_description',
      title: 'Cateringbeskrivning',
      type: 'blockContent',
    },
    {
      name: 'event_description',
      title: 'Evenemangbeskrivning',
      type: 'blockContent',
    },
  ],
}
