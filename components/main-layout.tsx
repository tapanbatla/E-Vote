import type { ReactNode } from "react"
import { Header } from "./header"
import { Navigation } from "./navigation"

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

