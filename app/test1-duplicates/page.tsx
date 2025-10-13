// Test 1: All tags duplicated between layout and page

export default function Page() {
  return (
    <>
      <title>Page Title (Test 1)</title>
      <meta name="description" content="Page description" />
      <meta property="og:title" content="Page OG Title" />
      <meta property="og:description" content="Page OG Description" />
      <meta name="twitter:card" content="Page Twitter Card" />
      
      <div>
        <h1>Test 1: Duplicates</h1>
        <p>All metadata tags are duplicated between layout.tsx and page.tsx</p>
        <h2>Check DevTools:</h2>
        <ul>
          <li>Are ALL tags in &lt;head&gt;?</li>
          <li>Or only some?</li>
          <li>Compare with curl output</li>
        </ul>
      </div>
    </>
  )
}

