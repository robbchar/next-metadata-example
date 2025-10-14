import { Suspense } from 'react'

// Test: Promise that resolves INSTANTLY (like Next.js's synchronous metadata)

export default function Page() {
  // Promise that resolves immediately (no setTimeout)
  const metadataPromise = Promise.resolve(
    <>
      <title>Instant Promise Title</title>
      <meta name="description" content="Description from INSTANT Promise" />
      <meta property="og:title" content="OG Title from INSTANT Promise" />
      <meta property="og:description" content="OG Description from INSTANT Promise" />
      <meta name="twitter:card" content="summary from INSTANT Promise" />
    </>
  )
  
  return (
    <>
      <Suspense fallback={<div>Loading metadata...</div>}>
        {/* @ts-expect-error - Promise as child is allowed in Suspense */}
        {metadataPromise}
      </Suspense>
      
      <div>
        <h1>Test: Instant Promise + Suspense</h1>
        <p>Meta tags from Promise.resolve() (instant) in Suspense</p>
        
        <h2>The Question:</h2>
        <p>Even with instant resolution, does Suspense still delay it past server hoisting?</p>
        
        <h2>Compare:</h2>
        <ul>
          <li><strong>test-inline-jsx:</strong> No promise, no Suspense → Tags in head ✅</li>
          <li><strong>test-instant-promise (this):</strong> Instant promise + Suspense → ???</li>
          <li><strong>test-promise-suspense:</strong> Delayed promise (100ms) + Suspense → ???</li>
          <li><strong>test5-metadata-property:</strong> Next.js API → Tags in body ❌</li>
        </ul>
      </div>
    </>
  )
}

