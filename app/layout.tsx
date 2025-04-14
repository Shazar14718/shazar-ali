import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shazar Ali - SEO & Digital Marketing Specialist",
  description: "Senior SEO Executive with expertise in digital marketing, technical SEO, and analytics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px) translateX(0px); }
              50% { transform: translateY(-20px) translateX(10px); }
              100% { transform: translateY(0px) translateX(0px); }
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'