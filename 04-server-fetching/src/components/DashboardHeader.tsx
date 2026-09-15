export function DashboardHeader({ subtitle }: { subtitle: string }) {
  return (
    <header className="border-b border-black/5 bg-white px-6 py-4 dark:border-white/10 dark:bg-zinc-900">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Acme Corp</p>
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Finance Dashboard</h1>
      <p className="mt-1 text-xs text-zinc-400">{subtitle}</p>
    </header>
  );
}
