import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test App',
  description: 'Testing metadata bug in Next.js 15.5.4',
  keywords: ['test', 'nextjs', 'bug'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Test App',
    title: 'Test App',
    description: 'Testing metadata bug',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Test Image',
      },
    ],
  },
  facebook: {
    appId: '123456789',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test App',
    description: 'Testing metadata bug',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}