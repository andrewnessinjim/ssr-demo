"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

const FORMAT = "HH:mm:ss.S";

export default function ClockPage() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 100);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Concept 08 — Hydration Mismatches
      </p>
      <h1 className="mt-2 text-3xl font-semibold">Live Clock</h1>
      <time
        // suppressHydrationWarning
        className="mt-4 block text-5xl font-semibold tabular-nums text-blue-600 dark:text-blue-400"
      >
        {format(now, FORMAT)}
      </time>
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        The initial <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">useState(() =&gt; new Date())</code>{" "}
        runs once on the server and again on the client during hydration - the two timestamps are always a few
        tenths of a second apart, right down to the <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">S</code>{" "}
        (tenths-of-a-second) token from{" "}
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">date-fns</code> in the format string above.
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Normally that text mismatch would fail hydration and log a warning.{" "}
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">suppressHydrationWarning</code> on the{" "}
        <code className="rounded bg-zinc-200 px-1 py-0.5 dark:bg-zinc-800">{"<time>"}</code> element tells React
        this particular mismatch is expected and to keep the client-rendered value without complaint - it only
        covers that one render&apos;s text/attributes, not the interval tick that follows.
      </p>
    </main>
  );
}
