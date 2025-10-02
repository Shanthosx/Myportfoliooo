import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

const HackerMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hacker-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${HackerMono.variable}`}>
        {/* Global continuous laser line sweep */}
        <div className="pointer-events-none fixed inset-x-0 top-1/3 z-[1000]" aria-hidden="true">
          <div className="laser-scan-infinite" />
        </div>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
