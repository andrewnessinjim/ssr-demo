import { ServerTime } from "@/components/ServerTime";

export default function TodaysDatePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Concept 01 — Server-Side Rendering</p>
      <h1 className="mt-2 text-3xl font-semibold">Today is</h1>
      <ServerTime includeTime className="mt-4 block text-5xl font-semibold text-blue-600 dark:text-blue-400" />
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        Computed by <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">new Date()</code> on the
        server, in the server&apos;s time zone - not the browser&apos;s.
      </p>
    </main>
  );
}
