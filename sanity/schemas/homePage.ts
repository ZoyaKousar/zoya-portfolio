const homePage = {
    name: "heroSection",
    title: "Hero Section",
    type: "document",
    fields: [

        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
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
            name: "button1",
            title: "Hire Button",
            type: "object",
            fields: [
                {
                    name: "text",
                    title: "Button Text",
                    type: "string",
                },
                {
                    name: "link",
                    title: "Button Link",
                    type: "url",
                }
            ]
        },
        {
            name: "button2",
            title: "CV Button",
            type: "object",
            fields: [
                {
                    name: "text",
                    title: "Button Text",
                    type: "string",
                },
                {
                    name: "pdfFile",
                    title: "PDF File",
                    type: "file",
                }
            ]
        },

        // About Me Section
        {
            name: "aboutMeSection",
            title: "About Me Section",
            type: "document",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "name",
                    title: "Name",
                    type: "string",
                },
                {
                    name: "profession",
                    title: "Profession",
                    type: "string",
                },
                {
                    name: "descriptionDsk",
                    title: "Desktop Description",
                    type: "text",
                },
                {
                    name: "descriptionMob",
                    title: "Mobile Description",
                    type: "text",
                },
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
                }
            ]
        },

        //   Professional Section
        {
            name: "timelineSection",
            title: "Timeline Section",
            type: "document",
            fields: [
                {
                    name: "experience",
                    title: "Experience Year",
                    type: "string",
                },
                {
                    name: "expDescription",
                    title: "Experience Description",
                    type: "string",
                },
                {
                    name: "projectCmp",
                    title: "Project Completed",
                    type: "string",
                },
                {
                    name: "proDescription",
                    title: "Project Description",
                    type: "string",
                },
                {
                    name: "clients",
                    title: "Clients",
                    type: "string",
                },
                {
                    name: "clientsDesc",
                    title: "Clients Description",
                    type: "string",
                }

            ]
        },

        //   Recent Work Section
        {
            name: "recentSection",
            title: "Recent Work Section",
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
            ]
        },

        // Tools Section
        {
            name: "toolsSection",
            title: "Tools Section",
            type: "document",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "description",
                    title: "Description",
                    type: "string",
                },
                {
                    name: "imageDsk",
                    title: "Desktop Image",
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
                    name: "imageMob",
                    title: "Mobile Image",
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
            ]
        },

        // Services Section
        {
            name: "servicesSection",
            title: "Services Section",
            type: "document",
            fields: [
                {
                    name: "titleHighlight",
                    title: "Title Highlight",
                    type: "string",
                },
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                },

                {
                    name: "items",
                    title: "Items",
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
                                        hotspot: true, // Allows the user to crop the image
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
                                    name: "line1",
                                    title: "Line 1",
                                    type: "string",
                                },
                                {
                                    name: "line2",
                                    title: "Line 2",
                                    type: "string",
                                },
                            ],
                        },
                    ],
                },


            ]
        },
        //   Testimonials Section
        {
            name: "testimonialSection",
            title: "Testimonials Section",
            type: "document",
            fields: [
                {
                    name: "title",
                    title: "Title",
                    type: "string",
                },
                {
                    name: "descBfHighlight",
                    title: "Desc Before Highlight",
                    type: "string",
                },
                {
                    name: "descHigh1",
                    title: "Desc Highlight 1",
                    type: "string",
                },
                {
                    name: "descAfHighlight",
                    title: "Desc After Highlight",
                    type: "string",
                },
                {
                    name: "descHigh2",
                    title: "Desc Highlight 2",
                    type: "string",
                },
                {
                    name: "descAfHighlight2",
                    title: "Desc After Highlight 2",
                    type: "string",
                },

                {
                    name: "testimonials",
                    title: "Testimonials",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "profilePhoto",
                                    title: "Profile Photo",
                                    type: "image",
                                    options: {
                                        hotspot: true,
                                    },
                                },
                                {
                                    name: "starPhoto",
                                    title: "Star Photo",
                                    type: "image",
                                    options: {
                                        hotspot: true,
                                    },
                                },
                                {
                                    name: "clientName",
                                    title: "Client Name",
                                    type: "string",
                                },
                                {
                                    name: "date",
                                    title: "Date",
                                    type: "date",
                                },
                                {
                                    name: "description",
                                    title: "Description",
                                    type: "text",
                                },
                            ],
                        },
                    ],
                },
            ]
        },
    ]
};
export default homePage