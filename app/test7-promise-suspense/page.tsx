import { Suspense } from 'react'

// Test: Can React hoist meta tags that come from a Promise in Suspense?
// This bypasses Next.js's metadata API but mimics the Promise+Suspense pattern

export default function Page() {
  // Create a promise that resolves AFTER A DELAY (simulating async generateMetadata)
  const metadataPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <>
          <title>Delayed Promise Title</title>
          <meta name="description" content="Description from DELAYED Promise" />
          <meta property="og:title" content="OG Title from DELAYED Promise" />
          <meta property="og:description" content="OG Description from DELAYED Promise" />
          <meta name="twitter:card" content="summary from DELAYED Promise" />
        </>
      )
    }, 1000) // 1000ms delay to simulate async work
  })
  
  return (
    <>
      <Suspense fallback={<div>Loading metadata...</div>}>
        {/* @ts-expect-error - Promise as child is allowed in Suspense */}
        {metadataPromise}
      </Suspense>
      
      <div>
        <h1>Test: Promise + Suspense</h1>
        <p>Meta tags returned from a Promise wrapped in Suspense</p>
        <p>This mimics Next.js's pattern but with plain JSX elements</p>
        
        <h2>The Question:</h2>
        <p>Can React hoist meta tags that arrive via Promise in Suspense?</p>
        
        <h2>Expected Results:</h2>
        <ul>
          <li><strong>If tags in head:</strong> React CAN hoist from promises, Next.js API is doing something wrong</li>
          <li><strong>If tags in body:</strong> Promises in Suspense inherently break React's hoisting</li>
        </ul>
        
        <h2>Compare:</h2>
        <ul>
          <li>test-inline-jsx: Direct JSX (works, tags in head)</li>
          <li>test5-metadata-property: Next.js API (broken, tags in body)</li>
          <li>This test: Promise + Suspense with plain JSX (???)</li>
        </ul>
      </div>
    </>
  )
}

