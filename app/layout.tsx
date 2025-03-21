import type React from "react"
import "./globals.css"
import { PerformanceMonitor } from "./components/performance-monitor"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disequi - Transforming Ideas",
  description:
    "Disequi helps businesses achieve equilibrium between innovation and stability through our proven process of divergence and convergence.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "innovation, business transformation, digital strategy, technology consulting, Split, Croatia",
  authors: [{ name: "Disequi LLC", url: "https://disequi.com" }],
  generator: 'v0.dev',
  metadataBase: new URL("https://disequi.com")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  )
}
