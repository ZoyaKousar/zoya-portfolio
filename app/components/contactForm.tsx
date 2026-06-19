// ContactSection.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { client } from "../../sanity/lib/client";

// Validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address.")
    .required("Email is required"),
});
interface ContactSection {
  title: string;
  description?: string;
  email?: string;
  formTitle?: string;
  image?: {
    asset: {
      url: string;
    };
    alt: string;
  };
}


const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState<ContactSection | null>(null);

  useEffect(() => {
    async function getData() {
      const query = `*[_type == 'contactSection'][0]`;
      try {
        const fetchData = await client.fetch(query);
        setData(fetchData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);


  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema, // Apply the validation schema
    onSubmit: async (values, { resetForm }) => {
      setUploading(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          }),
        });

        if (response.ok) {
          resetForm(); // Reset form after successful submission
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setUploading(false);
      }
    },
  });

  return (
    <div
      id="contact"
      className="mx-auto flex max-w-[1400px] items-center gap-10 overflow-hidden py-7 lg:px-32 lg:py-40"
    >
      <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-2xl shadow-gray-300/40 md:flex-row">
        {/* Left Column - Image and Info */}
        <div className="flex w-full flex-col items-center justify-center border-b border-gray-100 bg-gradient-to-b from-zinc-50 to-white bg-cover bg-center p-6 md:border-b-0 md:border-r lg:w-1/2 lg:p-12">
          <img
            src="/zoya-contact.png"
            alt="Email"
            className="mb-6 h-[280px] rounded-full object-cover sm:h-[320px] md:h-[350px]"
          />
          <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {data?.title}
          </h2>
          <p className="mb-6 max-w-md text-center text-sm leading-relaxed text-zinc-600 md:px-4 md:text-base">
            {data?.description}
          </p>
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <img src="/zoya-email.png" alt="Email" className="h-7 w-7 object-contain" />
            <span className="text-sm font-semibold text-zinc-900">{data?.email}</span>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex w-full flex-col bg-white p-6 lg:w-1/2 lg:p-12">
          <div className="w-full">
            <h3 className="mt-1 text-2xl font-bold leading-tight tracking-tight text-zinc-900 md:text-3xl">
              {data?.formTitle}
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full flex-col text-sm text-zinc-800"
          >
            <div className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 transition-colors focus-within:border-fuchsia-400/60 focus-within:bg-white focus-within:ring-2 focus-within:ring-fuchsia-500/20">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-transparent p-2 text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>
            {errors.name && touched.name && (
              <div className="mt-1 text-xs font-medium text-red-600">{errors.name}</div>
            )}

            <div className="mt-5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 transition-colors focus-within:border-fuchsia-400/60 focus-within:bg-white focus-within:ring-2 focus-within:ring-fuchsia-500/20">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-transparent p-2 text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>
            {errors.email && touched.email && (
              <div className="mt-1 text-xs font-medium text-red-600">{errors.email}</div>
            )}

            <div className="mt-5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 transition-colors focus-within:border-fuchsia-400/60 focus-within:bg-white focus-within:ring-2 focus-within:ring-fuchsia-500/20">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-transparent p-2 text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </div>

            <div className="mb-2 mt-5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 transition-colors focus-within:border-fuchsia-400/60 focus-within:bg-white focus-within:ring-2 focus-within:ring-fuchsia-500/20">
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full resize-y bg-transparent p-2 text-zinc-900 outline-none placeholder:text-zinc-400"
                rows={5}
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="mt-6 w-full max-w-[220px] rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/25 transition-all hover:bg-fuchsia-700 hover:shadow-fuchsia-600/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-[200px]"
            >
              {uploading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
