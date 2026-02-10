import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zoyakk Shopify Case Studies | Growth & Automation Wins",
  description: "Discover Zoyakk's real Shopify case studies, B2B lead gen, sales boosts, inventory automation, cart recovery, and multi-channel growth. See proven strategies that drive conversions & results.",
}

export default function ShopifyCaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
