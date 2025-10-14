import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> { 
  // Actually wait for 1 second (simulating slow API call)
  // await new Promise(resolve => setTimeout(resolve, 1000))
  // console.log('generateMetadata done after 1 second delay');

  return {
    title: '(page-promise) Test App',
    description: 'page-promise:Testing metadata bug in Next.js 15.5.4',
    keywords: ['page-promise:test', 'page-promise:nextjs', 'page-promise:bug'],
    openGraph: {
      type: 'website',
      locale: 'page-promise:en_US',
      url: 'https://page-promise:example.com',
      siteName: 'page-promise:Test App',
      title: 'page-promise:Test App',
      description: 'page-promise:Testing metadata bug',
      images: [
        {
          url: '/page-promise:og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'page-promise:Test Image',
        },
      ],
    },
    facebook: {
      appId: 'page-promise:123456789',
    },
    twitter: {
      card: 'page-promise:summary_large_image',
      title: 'page-promise:Test App',
      description: 'page-promise:Testing metadata bug',
      images: ['/twitter-image.jpg'],
    },
  }
}

export default function Page() {
  
  return ( 
    <div>
      <h1>Test: Delayed generateMetadata</h1>
      <p>Meta tags returned from a delayed generateMetadata function</p>
    </div>
  )
}

