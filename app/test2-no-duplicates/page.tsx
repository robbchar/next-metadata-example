// Test 2: Page has NO metadata (only layout has metadata)

export default function Page() {
  return (
    <div>
      <h1>Test 2: No Page Metadata (No Duplicates)</h1>
      <p>Only layout.tsx has metadata, this page has none.</p>
      <h2>Check DevTools:</h2>
      <ul>
        <li>Are layout meta tags in &lt;head&gt; or &lt;body&gt;?</li>
        <li>No duplicates to trigger deduplication!</li>
        <li>Compare with curl output</li>
      </ul>
    </div>
  )
}

