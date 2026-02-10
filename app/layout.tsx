"use client";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current path to determine the background dynamically
  const pathname = usePathname();

  // Define a map of page paths to background images and metadata
  const backgrounds: Record<string, string> = {
    "/": "/zoyaa-bg.png", // Home
    "/blissWithZoya": "/blissWithZoya.png", // bliss
    "/services": "/services.png", // Services
    "/services/shopify-growth-service": "/services.png", // Services
    "/services/web-development-and-crm-automation": "/services.png", // Services
    "/services/uiux-service": "/services.png", // Services
    "/services/seo-service": "/services.png", // Services
    "/case-studies/shopify-products": "/services.png", // Services
    "/case-studies/web-and-mobile-app-development": "/case-studies.png", // Services
    "/case-studies/seo": "/case-studies.png", // Services
    "/va-work": "/zoyaa-bg.png", // VA Work - same as home
    "/wordpress": "/zoyaa-bg.png", // WordPress Portfolio
    "/web-dev": "/zoyaa-bg.png", // Web Dev Portfolio
    "/portfolio": "/zoyaa-bg.png", // Full Stack
    "/shopify-case-studies": "/zoyaa-bg.png", // Shopify Case Studies
    "/seo-portfolio": "/zoyaa-bg.png", // SEO Portfolio
    "/qa-portfolio": "/zoyaa-bg.png", // QA Portfolio
  };

  // Define metadata for different paths
  const metadata: Record<string, { title: string; description: string }> = {
    "/": { title: "Zoya Kou | Full Stack Digital Manager", description: "Full Stack Digital Manager, QA Automation, Technical Writing, Web Development, Digital Marketing, Project Management, Virtual Assistant, Zoya Kou" },
    "/blissWithZoya": { title: "Zoya Kou | Full Stack Digital Manager", description: "Full Stack Digital Manager, QA Automation, Technical Writing, Web Development, Digital Marketing, Project Management, Virtual Assistant, Zoya Kou" },
    "/service": { title: "Zoya Kou | Full Stack Digital Manager", description: "Full Stack Digital Manager, QA Automation, Technical Writing, Web Development, Digital Marketing, Project Management, Virtual Assistant, Zoya Kou" },
    "/va-work": { title: "Zoya Kou | VA Work Portfolio", description: "Virtual Assistant Work Portfolio - QA Engineering, Shopify Development, Web Development, Technical Writing - Zoya Kou" },
    "/wordpress": { title: "Kou | WordPress Development Portfolio", description: "WordPress Development, WooCommerce, Shopify, BigCommerce, Headless CMS, Website Optimization" },
    "/web-dev": { title: "Kou | Web Development & CRM Expertise", description: "Web Development, CRM, Go High Level, System.io, Sanity.io, HubSpot, WordPress, Shopify, Wix" },
    "/portfolio": { title: "Zoya | Full Stack Portfolio", description: "Full Stack Portfolio - WordPress Projects, Shopify Projects, Core Skills, Tech Stack, Web Development, E-commerce Development" },
    "/shopify-case-studies": { title: "Kou | Shopify Case Studies", description: "Shopify Case Studies - B2B Growth, Lead Generation, Cart Abandonment, Multi-Channel Selling, Automation, Optimization" },
    "/seo-portfolio": { title: "Kou | SEO Portfolio", description: "SEO Portfolio - Mastering SEO & Software, Data-Driven SEO, Google Analytics, Search Console, AI-Powered SEO, Organic Traffic Growth" },
    "/qa-portfolio": { title: "Kulsoom Kousar | Senior QA Engineer Portfolio", description: "Senior Quality Assurance Engineer - Selenium, Appium, Cypress, Test Automation, API Testing, CI/CD, Agile, Manual Testing" },
  };

  // Get the background image for the current route
  const backgroundImage = backgrounds[pathname] || "/zoyaa-bg.png";
  const currentMetadata = metadata[pathname] || { title: "Zoya Kou | Full Stack Digital Manager", description: "Full Stack Digital Manager, QA Automation, Technical Writing, Web Development, Digital Marketing, Project Management, Virtual Assistant, Zoya Kou" };

  // Dynamically update title and meta description
  useEffect(() => {
    document.title = currentMetadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMetadata.description);
    } else {
      const metaTag = document.createElement('meta');
      metaTag.name = 'description';
      metaTag.content = currentMetadata.description;
      document.head.appendChild(metaTag);
    }
  }, [pathname, currentMetadata.title, currentMetadata.description]); // Effect depends on pathname and metadata to update on route change

  return (
    <html lang="en">
      <head>
        {/* Preload Google Fonts and Local Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* Meta tags for SEO */}
        <meta name="description" content={currentMetadata.description} />
        <meta name="google-site-verification" content="ZcVVAHjQ5EdYZg5hvTq32EZmHWS6RsXgvKugSzMH_r0" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3124756027681305');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          fontFamily: "'Nunito', sans-serif", // Applying Nunito font
        }}
      >
        {/* Meta Pixel NoScript */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3124756027681305&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Navigation and Main Content */}
        <div className="">
          <Navigation />
          <main>{children}</main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
