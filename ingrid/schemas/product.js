export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "string",
      options: {
        list: [
          { value: "tag-one", title: "Tag One" },
          { value: "tag-two", title: "Tag Two" },
        ],
      },
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
