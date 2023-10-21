import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import './globals.css'

const fira = Fira_Sans({ weight: "600", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get the Gist',
  description: 'Save your mornings'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  )
}
