import { defineField, defineType } from "sanity"

/**
 * Rich body: write paragraphs, then add an "Image" block between sections (use the + in the editor).
 * Main/hero image stays separate; this is for images inside the article body.
 */
export default defineType({
  name: "post",
  title: "Blog",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "authorName",
      title: "Author name",
      type: "string",
      initialValue: "Zoya Kauser",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({ name: "mainImage", title: "Cover image (hero)", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Short description", type: "text", rows: 3 }),
    defineField({
      name: "body",
      title: "Body — text and inline images",
      description:
        "Type your content. To add a picture in the middle: place the cursor on a new line, click +, and choose “Image in article” (or insert image block).",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          title: "Image in article",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt text (for accessibility & SEO)" })],
        },
      ],
    }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
  ],

})
