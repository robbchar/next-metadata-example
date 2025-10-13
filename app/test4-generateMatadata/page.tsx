// Test 4: using generateMetadata to generate metadata

export async function generateMetadata(
): Promise<Metadata> {
  return {
  title: '(Page) Test App',
  description: 'page:Testing metadata bug in Next.js 15.5.4',
  keywords: ['page:test', 'page:nextjs', 'page:bug'],
  openGraph: {
    type: 'website',
    locale: 'page:en_US',
    url: 'https://page:example.com',
    siteName: 'page:Test App',
    title: 'page:Test App',
    description: 'page:Testing metadata bug',
    images: [
      {
        url: '/page:og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'page:Test Image',
      },
    ],
  },
  facebook: {
    appId: 'page:123456789',
  },
  twitter: {
    card: 'page:summary_large_image',
    title: 'page:Test App',
    description: 'page:Testing metadata bug',
    images: ['/twitter-image.jpg'],
  },
}
}

export default function Page() {
  return (
    <>
      <div>
        <h1>Test 4: generateMetadata</h1>
        <p>All tags come from the generateMetadata function</p>
      </div>
    </>
  )
}

