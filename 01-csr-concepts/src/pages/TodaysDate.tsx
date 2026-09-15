import { Link } from "react-router-dom";

export function TodaysDatePage() {
  const today = new Date();
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(today);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
      <Link to="/" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
        ← Back
      </Link>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Concept 01 — Client-Side Rendering
      </p>
      <h1 className="mt-2 text-3xl font-semibold">Today is</h1>
      <p className="mt-4 text-5xl font-semibold text-blue-600 dark:text-blue-400">{formatted}</p>
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        Computed by <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">new Date()</code> in the
        browser, in your own time zone - there is no server producing this HTML.
      </p>
    </main>
  );
}
