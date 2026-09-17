export default function BlockingHomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Concept 09 — Blocking on Data
      </p>
      <h1 className="mt-2 text-3xl font-semibold">Acme Store</h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Your one-stop shop for gadgets and gear.</p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Featured products</h2>
        {children}
      </section>

      <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-400">
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">getFeaturedProducts()</code> simulates a
        slow database query - a 2 second delay. This route has no{" "}
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">loading.tsx</code>, so even though the
        header above lives in its own <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">layout.tsx</code>,
        Next.js still has to wait for the slow <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">page.tsx</code>{" "}
        below to finish before it can send any of this to the browser. Reload the page and watch the tab spinner
        for the full 2 seconds before anything appears.
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Compare with concept 10, which adds a <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">loading.tsx</code>{" "}
        to a nested route and streams the same layout in immediately.
      </p>
    </main>
  );
}
