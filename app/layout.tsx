import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gautam v10.5 – Human Patch Notes',
  description: 'Backend engineer, ex-founder, community gremlin & professional chaos organiser.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

