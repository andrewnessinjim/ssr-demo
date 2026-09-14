import type { ReactNode } from "react";

// Wrapper + column headers + row divider shared by every detail-page table,
// so the same three class strings aren't retyped per table.
export function TableCard({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  );
}

export function TableHead({ columns }: { columns: string[] }) {
  return (
    <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
      <tr>
        {columns.map((col) => (
          <th key={col} className="px-4 py-2">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function DividedTableBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-black/5 dark:divide-white/10">{children}</tbody>;
}
