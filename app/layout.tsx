import type { Metadata } from 'next'
import './globals.css'
import {NavBar, Footer} from "@/components"

export const metadata: Metadata = {
  title: 'Park Manager',
  description: 'Discover the best website for managed parking.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
