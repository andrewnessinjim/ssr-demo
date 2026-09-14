import Link from "next/link";

export function DetailPageHeader({ title }: { title: string }) {
  return (
    <header className="border-b border-black/5 bg-white px-6 py-4 dark:border-white/10 dark:bg-zinc-900">
      <Link href="/" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
        ← Back to dashboard
      </Link>
      <h1 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">{title}</h1>
    </header>
  );
}
