import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zoya Kou | Expert WordPress Development Services",
  description: "Zoya Kou delivers expert web development, WordPress Development, custom WordPress, Shopify e-commerce, headless Sanity, Next.js, CRM integrations & automation, secure sites that grow businesses.",
}

export default function WordPressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
