import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Full Stack Developer | Zoya Kousar",
  description: "Zoya Kousar, Full Stack Developer specializing in React, Next.js, Node.js, NestJS, PostgreSQL, Docker, AWS & modern web & mobile app development.",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
