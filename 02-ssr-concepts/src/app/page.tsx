import Link from "next/link";

const CONCEPTS = [
  {
    href: "/01-todays-date",
    title: "01 — Today's Date",
    description: "The simplest possible Server Component: server-computed content, no client JS required.",
  },
  {
    href: "/02-hit-counter",
    title: "02 — Hit Counter",
    description: "Server-side state that persists across requests, and why it has to opt out of static rendering.",
  },
  {
    href: "/03-hit-counter-interactive",
    title: "03 — Hit Counter (Interactive)",
    description: "Starts as a copy of concept 02 - work in progress.",
  },
  {
    href: "/04-css-in-js",
    title: "04 — CSS-in-JS & Bundle Size",
    description: "A large, mostly-static article rendered as one big Client Component - and why that costs more than it needs to.",
  },
  {
    href: "/05-css-in-js-optimized",
    title: "05 — CSS-in-JS & Bundle Size (Optimized)",
    description: "The same article split so the static wrapper stays on the server while the interactive layer stays client-side.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">SSR Concepts</p>
      <h1 className="mt-2 text-2xl font-semibold">Server-side rendering, built up one idea at a time</h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Each numbered page below is a small, self-contained example - read its source alongside the rendered
        result.
      </p>
      <ul className="mt-8 divide-y divide-black/5 dark:divide-white/10">
        {CONCEPTS.map((concept) => (
          <li key={concept.href} className="py-4">
            <Link
              href={concept.href}
              className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              {concept.title}
            </Link>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{concept.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
