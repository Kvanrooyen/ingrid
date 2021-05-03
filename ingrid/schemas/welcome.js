export default {
  name: "welcome",
  title: "Welcome",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "welcomeMessage",
      title: "Welcome Message",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
