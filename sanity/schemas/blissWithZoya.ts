const blissWithZoya = {
  name: "blissWithZoya",
  title: "Bliss with Zoya ",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    // LifeStyle
    {
      name: "lifeStyle",
      title: "My LifeStyle",
      type: "object",
      fields: [
        {
          name: "imagesWithText",
          title: "Images with Hover Text",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true, // For cropping and positioning image
                  },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    }
                  ]
                },
                {
                  name: "hoverText",
                  title: "Hover Text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },

    // Case Studies
    {
      name: "caseStudiesSection",
      title: "Case Studies Section",
      type: "document",
      fields: [
        {
          name: "caseStudies",
          title: "Case Studies",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true
                  },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    }
                  ]
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                }
              ]
            }
          ]
        }
      ]
    },

  ],
};

export default blissWithZoya
