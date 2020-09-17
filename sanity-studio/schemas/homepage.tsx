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
      title: 'Rubrik_1',
      type: 'string',
    },
    {
      name: 'descriptionOne',
      title: 'Inledning_1',
      type: 'blockContent',
    },
    {
      name: 'menu_button',
      title: 'Menyknapp',
      type: 'string',
    },
    {
      name: 'titleTwo',
      title: 'Rubrik_2',
      type: 'string',
    },
    {
      name: 'descriptionTwo',
      title: 'Inledning_2',
      type: 'blockContent',
    },
    {
      name: 'imageTwo',
      title: 'Bild_2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleThree',
      title: 'Rubrik_3',
      type: 'string',
    },
    {
      name: 'descriptionThree',
      title: 'Inledning_3',
      type: 'blockContent',
    },
    {
      name: 'imageThree',
      title: 'Bild_3',
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
