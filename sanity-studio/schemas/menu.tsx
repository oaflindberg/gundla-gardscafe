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
