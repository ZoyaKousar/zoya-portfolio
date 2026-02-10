const services = {
    name: 'servicesSection',
    title: 'Services Section',
    type: 'document',
    fields: [
        {
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
        },
        {
            name: 'mainDescription',
            title: 'Main Description',
            type: 'text',
        },
        // Header Section
        ////Header Section
        {
            name: "headSectiom",
            title: "Head Section",
            type: "object",
            fields: [

                {
                    name: 'title',
                    title: 'title',
                    type: 'string',
                },
                {
                    name: 'descriptionBeforeHighlight',
                    title: 'Description Before Highlight',
                    type: 'string',
                },
                {
                    name: 'descriptionHighlight',
                    title: 'Description',
                    type: 'string',
                },
                {
                    name: 'descriptionAfterHighlight',
                    title: 'Description After Highlight',
                    type: 'string',
                },
                {
                    name: 'subDesciption',
                    title: 'Sub Description',
                    type: 'string',
                },
                {
                    name: 'services',
                    title: 'Services',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    title: 'Service Title',
                                    type: 'string',
                                },
                                {
                                    name: 'image',
                                    title: 'Service Image',
                                    type: 'image',
                                    options: {
                                        hotspot: true,
                                    },
                                    fields: [
                                        {
                                            name: "alt",
                                            title: "Alt Text",
                                            type: "string",
                                        }
                                    ]
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        // Accordian Section
        {
            name: "accordionSection",
            title: "Accordion Section",
            type: "object",
            description: "Manage accordion items that expand to show detailed content",
            fields: [
                {
                    name: "accordionItems",
                    title: "Accordion Items",
                    type: "array",
                    description: "Add multiple accordion items. Each item will be expandable on the frontend.",
                    of: [
                        {
                            type: "object",
                            preview: {
                                select: {
                                    title: "title",
                                    media: "headerIcon",
                                },
                                prepare({ title, media }: { title?: string; media?: any }) {
                                    return {
                                    title: title || "Untitled Accordion Item",
                                    media: media,
                                    };
                                },
                            },
                            fields: [
                                {
                                    name: "title",
                                    title: "Accordion Title",
                                    type: "string",
                                    description: "The title that appears in the accordion header",
                                    validation: (Rule: any) => Rule.required().max(100).warning("Title should be concise"),
                                },
                                {
                                    name: "headerIcon",
                                    title: "Header Icon",
                                    type: "image",
                                    description: "Icon displayed next to the title in the accordion header",
                                    options: {
                                        hotspot: true,
                                    },
                                    fields: [
                                        {
                                            name: "alt",
                                            title: "Alt Text",
                                            type: "string",
                                            description: "Alternative text for the icon (for accessibility)",
                                        }
                                    ]
                                },
                                {
                                    name: "content",
                                    title: "Accordion Content",
                                    type: "object",
                                    description: "Content that appears when the accordion is expanded",
                                    fields: [
                                        {
                                            name: "image",
                                            title: "Content Image",
                                            type: "image",
                                            description: "Main image displayed in the accordion content",
                                            options: {
                                                hotspot: true,
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
                                            name: "description",
                                            title: "Description",
                                            type: "text",
                                            description: "Main description text for this accordion item",
                                            rows: 4,
                                        },
                                        {
                                            name: "steps",
                                            title: "Steps",
                                            type: "array",
                                            description: "List of steps or process items",
                                            of: [
                                                {
                                                    type: "object",
                                                    preview: {
                                                        select: {
                                                            title: "text",
                                                            media: "icon",
                                                        },
                                                    },
                                                    fields: [
                                                        {
                                                            name: "icon",
                                                            title: "Step Icon",
                                                            type: "image",
                                                            options: {
                                                                hotspot: true,
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
                                                            name: "text",
                                                            title: "Step Text",
                                                            type: "string",
                                                            validation: (Rule: any) => Rule.required(),
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            name: "recentWorkImage",
                                            title: "Recent Work Image",
                                            type: "image",
                                            description: "Image showcasing recent work or portfolio item",
                                            options: {
                                                hotspot: true,
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
                                            name: "tools",
                                            title: "Tools & Technologies",
                                            type: "array",
                                            description: "List of tools or technologies used",
                                            of: [
                                                {
                                                    type: "object",
                                                    preview: {
                                                        select: {
                                                            title: "name",
                                                            media: "image",
                                                        },
                                                    },
                                                    fields: [
                                                        {
                                                            name: "name",
                                                            title: "Tool Name",
                                                            type: "string",
                                                            validation: (Rule: any) => Rule.required(),
                                                        },
                                                        {
                                                            name: "image",
                                                            title: "Tool Image/Logo",
                                                            type: "image",
                                                            options: {
                                                                hotspot: true,
                                                            },
                                                            fields: [
                                                                {
                                                                    name: "alt",
                                                                    title: "Alt Text",
                                                                    type: "string",
                                                                }
                                                            ]
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        //   Bottom Section
        {
            name: "streamlinedApproach",
            title: "Streamlined Approach Section",
            type: "document",
            fields: [

                {
                    name: "titlebfHighlight",
                    title: "title Before Highlight",
                    type: "string",
                },
                {
                    name: "titleHigh",
                    title: "title Highlight",
                    type: "string",
                },
                {
                    name: "titleAfHighlight",
                    title: "title After Highlight",
                    type: "string",
                },
                {
                    name: "descrition",
                    title: "Description",
                    type: "string",
                },
                {
                    name: "steps",
                    title: "Steps",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "stepNumber",
                                    title: "Step Number",
                                    type: "number",
                                },
                                {
                                    name: "stepTitle",
                                    title: "Step Title",
                                    type: "string",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
export default services