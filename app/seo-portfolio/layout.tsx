import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zoyakk Mastering SEO And Software | Organic Growth Tips",
  description: "Discover how Zoyakk drives real organic growth with practical SEO, data insights, technical fixes, local visibility, and AI tools. See what actually works for sustainable rankings & traffic",
}

export default function SEOPortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
