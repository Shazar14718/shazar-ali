import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shazar Ali - Portfolio",
  description: "Senior SEO Executive & Digital Marketing Specialist",
  verification: {
    google: "Mfg9EO6onHw7NKNzl_a7-zXuwbqpVg7XOCWgNiBcXtU",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Mfg9EO6onHw7NKNzl_a7-zXuwbqpVg7XOCWgNiBcXtU" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
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