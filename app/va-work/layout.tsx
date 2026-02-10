import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Virtual Assistant | Zoya Kousar - Efficient & Reliable Support",
  description: "Zoya Kousar, your professional Virtual Assistant, providing efficient, reliable support for admin tasks, scheduling, emails, data management, and more.",
}

export default function VAWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
