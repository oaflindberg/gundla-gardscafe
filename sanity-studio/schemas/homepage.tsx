export default {
  name: 'homepage',
  title: 'Startsida',
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
      name: 'titleOne',
      title: 'Rubrik',
      type: 'string',
    },
    {
      name: 'descriptionOne',
      title: 'Inledning_ett',
      type: 'blockContent',
    },
    {
      name: 'menu_button',
      title: 'Menyknapp',
      type: 'string',
    },
    {
      name: 'titleTwo',
      title: 'Rubrik',
      type: 'string',
    },
    {
      name: 'descriptionTwo',
      title: 'Inledning_tva',
      type: 'blockContent',
    },
    {
      name: 'imageTwo',
      title: 'Bild_tva',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleThree',
      title: 'Rubrik',
      type: 'string',
    },
    {
      name: 'descriptionThree',
      title: 'Inledning_tre',
      type: 'blockContent',
    },
    {
      name: 'imageThree',
      title: 'Bild_tre',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'calendar_button',
      title: 'Kalenderknapp',
      type: 'string',
    },
    {
      name: 'catering_button',
      title: 'cateringknapp',
      type: 'string',
    },
  ],
};
