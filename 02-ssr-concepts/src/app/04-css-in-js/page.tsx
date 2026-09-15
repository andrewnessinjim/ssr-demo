"use client";

import styled from "@emotion/styled";

const ArticleWrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
  line-height: 1.75;
  color: #27272a;

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #a1a1aa;
  }

  h1 {
    margin-top: 0.5rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    color: #18181b;
  }

  .subtitle {
    margin-top: 0.75rem;
    font-size: 1.125rem;
    color: #52525b;
  }

  h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 1.375rem;
    font-weight: 700;
    color: #18181b;
    border-top: 1px solid #e4e4e7;
    padding-top: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
  }

  figure {
    margin: 2rem 0;
  }

  .image-placeholder {
    height: 14rem;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, #dbeafe, #ede9fe);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6366f1;
    font-size: 0.875rem;
    font-weight: 600;
  }

  figcaption {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #71717a;
    text-align: center;
  }

  .graph {
    margin-top: 1rem;
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
    height: 12rem;
    padding: 1rem;
    border-radius: 0.75rem;
    background: #fafafa;
    border: 1px solid #e4e4e7;
  }

  .bar-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }

  .bar {
    width: 100%;
    max-width: 3rem;
    border-radius: 0.25rem 0.25rem 0 0;
    background: #3b82f6;
  }

  .bar-value {
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: #3b82f6;
  }

  .bar-label {
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: #71717a;
    text-align: center;
  }

  blockquote {
    margin: 2rem 0;
    padding-left: 1.25rem;
    border-left: 3px solid #3b82f6;
    font-style: italic;
    color: #3f3f46;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    list-style: disc;
  }

  li {
    margin-top: 0.5rem;
  }

  code {
    background: #f4f4f5;
    border-radius: 0.25rem;
    padding: 0.1rem 0.35rem;
    font-size: 0.9em;
  }

  footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e4e4e7;
    font-size: 0.8rem;
    color: #a1a1aa;
  }
`;

export default function CssInJsArticlePage() {
  return (
    <ArticleWrapper>
      <p className="eyebrow">Concept 04 — CSS-in-JS &amp; Bundle Size</p>
      <h1>The Long, Winding Road Back to the Server</h1>
      <p className="subtitle">
        A field guide to how we render web pages, why the pendulum keeps swinging, and what any of it has to do
        with a single styled &lt;div&gt;.
      </p>

      <h2>In the Beginning, There Was the Server</h2>
      <p>
        For the first couple of decades of the web, rendering a page was not a debate. A browser asked a server
        for a URL, the server ran some code - CGI scripts, PHP, ASP, JSP, take your pick - stitched together a
        string of HTML, and sent it back. The browser painted it. If you clicked a link, the whole dance happened
        again. Nobody called this &quot;server-side rendering&quot; because there was no alternative to contrast
        it with. It was just rendering.
      </p>
      <p>
        This model had a pleasant property that took years to be appreciated again: the page you got was already
        finished. There was no spinner, no flash of missing content, no dependency on JavaScript executing
        correctly in a browser you didn&apos;t control. The server did the work once, and every visitor got the
        result. The tradeoff was equally simple - every interaction, even a small one, meant a full round trip and
        a full repaint.
      </p>

      <figure>
        <div className="image-placeholder">Figure 1 — A full-page reload, circa 2003</div>
        <figcaption>Every click was a new request. Every request was a new document.</figcaption>
      </figure>

      <h2>Then JavaScript Learned to Talk to Servers</h2>
      <p>
        XMLHttpRequest changed the calculus. Suddenly a page could ask for a small piece of data - not a whole new
        document - and update itself in place. Gmail and Google Maps made the case loudly enough that the
        technique got a name, AJAX, and a generation of frameworks grew up around the idea that the browser, not
        the server, should own rendering. Backbone, then Angular, then React and Vue: each one pushed more of the
        application into the client.
      </p>
      <p>
        The single-page application was a genuine leap for interactivity. Navigating between views no longer meant
        waiting on the network for markup; the client already had everything it needed to redraw itself instantly.
        But the bill for that came due at the start of the visit, not the end. The browser now had to download a
        bundle of JavaScript, parse it, execute it, and only then would anything appear on screen - and if that
        bundle was large, or the device slow, or the connection poor, the visitor stared at a blank white page or
        a spinner while all of that happened.
      </p>

      <blockquote>
        &quot;We didn&apos;t remove the cost of rendering - we moved it from the server, which we controlled, to
        every single visitor&apos;s device, which we didn&apos;t.&quot;
      </blockquote>

      <h2>Universal Rendering: Having It Both Ways</h2>
      <p>
        The next correction was universal (or &quot;isomorphic&quot;) rendering: run the same React tree on the
        server for the first request, ship real HTML, and then have the client-side bundle &quot;hydrate&quot;
        that HTML - attach event listeners and reconcile state - rather than throwing it away and rendering from
        scratch. Next.js, and frameworks like it, built entire careers on making this pattern the default rather
        than the exception.
      </p>
      <p>
        This gets you a fast first paint (the server already did the work) and a fast subsequent experience (the
        client takes over for navigation). The catch is that hydration is not free - the client still has to
        download, parse, and execute a bundle large enough to reconstruct the exact same component tree the server
        rendered, before any of it becomes interactive. A server-rendered page that ships a two-megabyte bundle is
        fast to see and slow to actually use.
      </p>

      <div className="graph">
        <div className="bar-group">
          <span className="bar-value">0.4s</span>
          <div className="bar" style={{ height: "20%" }} />
          <span className="bar-label">Static HTML</span>
        </div>
        <div className="bar-group">
          <span className="bar-value">0.6s</span>
          <div className="bar" style={{ height: "30%" }} />
          <span className="bar-label">SSR + hydration</span>
        </div>
        <div className="bar-group">
          <span className="bar-value">2.1s</span>
          <div className="bar" style={{ height: "100%" }} />
          <span className="bar-label">Client-only SPA</span>
        </div>
      </div>
      <figcaption>Figure 2 — Rough time-to-interactive by rendering strategy, on a throttled connection.</figcaption>

      <h2>Islands, Server Components, and Shipping Less</h2>
      <p>
        The most recent turn in the road is a variation on an old idea: not every part of a page needs to be
        interactive, so not every part of a page needs to ship as JavaScript. Islands architectures, and React
        Server Components specifically, let a page be mostly static markup rendered on the server, with small,
        explicitly marked &quot;islands&quot; of interactivity hydrated on the client - a like button here, a
        dropdown there - instead of treating the whole page as one monolithic client application.
      </p>
      <p>
        This is where the file you&apos;re reading right now becomes the example instead of the narrator. This
        entire article - every paragraph above this one, the figures, the bar chart - is marked{" "}
        <code>&quot;use client&quot;</code> at the top of its file, for one reason only: it&apos;s wrapped in a
        single Emotion-styled component. Emotion generates and injects styles at runtime, in the browser, which
        means the component that uses it has to run in the browser. Because that styled wrapper sits around the
        <em> entire</em> article rather than around one small interactive element, the whole article - every word
        you&apos;ve read so far - gets bundled and shipped as client JavaScript along with it. None of this text
        is interactive. All of it is currently paying the cost of being treated as if it were.
      </p>

      <ul>
        <li>The heading, subtitle, and every section above are static text - they never change after render.</li>
        <li>The two figures are hard-coded placeholders - no state, no props, nothing to hydrate.</li>
        <li>The bar chart&apos;s values are fixed numbers baked into this file - not fetched, not computed.</li>
        <li>
          The only reason any of it needs a client boundary at all is that it happens to live inside a component
          that imports <code>@emotion/styled</code>.
        </li>
      </ul>

      <p>
        The fix is not to stop using Emotion - it&apos;s to notice that the styling concern and the content
        concern don&apos;t have to share a client boundary. A tiny wrapper component, marked{" "}
        <code>&quot;use client&quot;</code> on its own, can own the Emotion styling. Everything else - all of this
        prose - can go back to being a plain Server Component, rendered once on the server and sent down as HTML,
        never touching the client bundle at all.
      </p>

      <h2>What to Actually Check</h2>
      <p>
        The interesting part isn&apos;t reading about this - it&apos;s measuring it. Before making any changes,
        build this project and note the client-side JavaScript size reported for this route. Then split the
        Emotion wrapper into its own <code>&quot;use client&quot;</code> file, remove the directive from this
        page, and build again. The number should move - and it should move by roughly the size of everything
        you&apos;ve just read.
      </p>

      <footer>Concept 04 of ssr-concepts. This entire footer is, for now, also shipped to the client.</footer>
    </ArticleWrapper>
  );
}
