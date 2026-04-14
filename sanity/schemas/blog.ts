
const blog = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Short Description",
      type: "text",
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "content",
      title: "Full Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

export default blog;