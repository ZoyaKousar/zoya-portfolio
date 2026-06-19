const ContactForm ={
    name: "contactSection",
    title: "Contact Form",
    type: "document",
    fields: [
        {
            name: "formTitle",
            title: "Send me Message Title",
            type: "string",
        },
     
        {
            name: "image",
            title: "Form Image",
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
        },
        {
            name: "email",
            title: "Email",
            type: "email",
        },
    ]
}

export default ContactForm