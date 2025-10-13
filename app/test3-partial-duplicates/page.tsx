// Test 3: SOME tags duplicated, SOME unique

export default function Page() {
  return (
    <>
      {/* Duplicate the title only */}
      <title>Page Title (Test 3)</title>
      
      {/* Unique to page - no duplicate in layout */}
      <meta property="og:url" content="https://page-unique.com" />
      <meta name="twitter:site" content="@pageunique" />
      
      <div>
        <h1>Test 3: Partial Duplicates</h1>
        <p>Title is duplicated (layout + page), but og:url and twitter:site are unique to page</p>
        <h2>Check DevTools:</h2>
        <ul>
          <li>Is &lt;title&gt; in &lt;head&gt;? (duplicated)</li>
          <li>Are og:title, og:description in &lt;head&gt; or &lt;body&gt;? (from layout, not duplicated)</li>
          <li>Are og:url, twitter:site in &lt;head&gt; or &lt;body&gt;? (from page, not duplicated)</li>
        </ul>
      </div>
    </>
  )
}

