export default {
  name: "event",
  title: "Evenemang",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
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
