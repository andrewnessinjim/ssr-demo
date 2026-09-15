import { Link } from "react-router-dom";

const CONCEPTS = [
  {
    href: "/01-todays-date",
    title: "01 — Today's Date",
    description: "The same example as 02-ssr-concepts, rendered purely client-side.",
  },
];

export function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">CSR Concepts</p>
      <h1 className="mt-2 text-2xl font-semibold">The same concepts, rendered client-side</h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        A plain Vite + React SPA - no server rendering at all. Compare each page here against its counterpart in
        02-ssr-concepts.
      </p>
      <ul className="mt-8 divide-y divide-black/5 dark:divide-white/10">
        {CONCEPTS.map((concept) => (
          <li key={concept.href} className="py-4">
            <Link to={concept.href} className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400">
              {concept.title}
            </Link>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{concept.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
