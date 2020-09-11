export default {
  name: "menu",
  title: "Meny",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    // {
    //   name: "mainImage",
    //   title: "Main image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: "body",
      title: "Beskrivning",
      type: "string",
      options: {
        maxLength: 200,
      },
    },
  ],
};
