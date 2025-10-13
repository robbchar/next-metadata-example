// Home page with links to all tests

export default function Page() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>React Metadata Hoisting Tests</h1>
      <p>Testing React 19's metadata hoisting behavior in Next.js</p>
      
      <h2>Test Pages:</h2>
      <ul>
        <li>
          <a href="/test1-duplicates">Test 1: All Duplicates</a>
          <br />All meta tags exist in both layout.tsx and page.tsx
        </li>
        <li>
          <a href="/test2-no-duplicates">Test 2: No Duplicates</a>
          <br />Only layout.tsx has metadata, page has none
        </li>
        <li>
          <a href="/test3-partial-duplicates">Test 3: Partial Duplicates</a>
          <br />Title duplicated, some tags unique to layout, some unique to page
        </li>
      </ul>
      
      <h2>How to Test:</h2>
      <ol>
        <li><strong>Browser (DevTools):</strong> Open Elements tab, see where tags render after React hydration</li>
        <li><strong>curl:</strong> <code>curl http://localhost:3000/test1-duplicates</code> to see raw HTML</li>
        <li><strong>Compare:</strong> Does React move tags to head? Only duplicates? All tags?</li>
      </ol>
      
      <h2>Current layout.tsx metadata:</h2>
      <pre style={{ background: '#f5f5f5', padding: '1rem', overflow: 'auto' }}>
{`export const metadata = {
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
}`}
      </pre>
    </div>
  )
}
