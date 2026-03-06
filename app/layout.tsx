import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Maria Clara M. Descendente - Psicóloga Clínica | Especialista em Transtornos Alimentares",
  description:
    "Psicóloga Clínica Licenciada especializada em transtornos alimentares, TCC, ACT e treinamento em mindfulness. MSc Neuropsiquiatria, Professora e Palestrante.",
  generator: "autor",
}

export const viewport = { width: "device-width", initialScale: 1, maximumScale: 5 }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
