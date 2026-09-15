import { HitCounter } from "./HitCounter";
import { ServerTime } from "@/components/ServerTime";

// Four possible values: auto, force-dynamic, error, force-static
export const dynamic = "force-dynamic";

export default function HitCounterPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Concept 02 — Server-Side State</p>
      <h1 className="mt-2 text-3xl font-semibold">Visits</h1>
      <HitCounter />
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        Stored in <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">data/hits.json</code> and
        incremented on every request. Unlike concept 01, this page can&apos;t be statically rendered at build time
        - <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">force-dynamic</code> tells Next.js to
        run it fresh per visit, or the count would freeze at whatever it was when you ran{" "}
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">next build</code>.
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Refresh to watch it climb. Writing to the filesystem like this only works because this is a long-lived
        Node server - most serverless hosts give you a read-only or ephemeral filesystem, which is why real apps
        use a database for this instead.
      </p>
      <footer className="mt-10 border-t border-black/10 pt-4 text-xs text-zinc-400 dark:border-white/10">
        Server time: <ServerTime includeTime />
      </footer>
    </main>
  );
}
