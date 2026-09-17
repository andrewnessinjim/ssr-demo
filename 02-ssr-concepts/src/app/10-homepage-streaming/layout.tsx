export default function StreamingHomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Concept 10 — Streaming with Nested Routes
      </p>
      <h1 className="mt-2 text-3xl font-semibold">Acme Store</h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Your one-stop shop for gadgets and gear.</p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Featured products</h2>
        {children}
      </section>

      <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-400">
        There&apos;s no <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">{"<Suspense>"}</code>{" "}
        anywhere in this code. The slow{" "}
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">getFeaturedProducts()</code> call lives
        in a nested <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">products/page.tsx</code>{" "}
        route, and that folder has its own{" "}
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">loading.tsx</code>. Next.js treats a
        segment&apos;s <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">loading.tsx</code> as an
        automatic Suspense boundary around its <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">page.tsx</code> -
        this layout renders immediately, while the skeleton below covers the 2 second wait for products.
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Same slow query as concept 09, but because it&apos;s isolated in its own route segment, only that segment
        blocks - not the whole page.
      </p>
    </main>
  );
}
