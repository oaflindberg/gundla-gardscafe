export default {
  name: "catering",
  title: "Catering",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Sidtitel",
      type: "string",
    },
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "contact_title",
      title: "Kontaktknapp",
      type: "string",
    },
    {
      name: "menu_title",
      title: "Menyknapp",
      type: "string",
    },
    {
      name: "imageOne",
      title: "Huvudbild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "catering_description",
      title: "Cateringbeskrivning",
      type: "blockContent",
    },
  ],
};
