"use client";

import { useTransactions } from "@/hooks/useFinanceQueries";
import { DashboardCard } from "@/components/DashboardCard";
import { ErrorNote } from "@/components/ui/ErrorNote";
import { DividedList } from "@/components/ui/DividedList";
import { ListRowsSkeleton, DetailTableSkeleton } from "@/components/ui/Skeleton";
import { TableCard, TableHead, DividedTableBody } from "@/components/ui/Table";
import { formatCurrency, formatDate } from "@/lib/format";

export function RecentTransactions({ variant = "widget" }: { variant?: "widget" | "detail" }) {
  const { data, isLoading, isError, error } = useTransactions();

  if (variant === "widget") {
    return (
      <DashboardCard title="Recent Transactions" href="/transactions" subtitle="Latest activity across all accounts">
        {isLoading && <ListRowsSkeleton rows={5} />}
        {isError && <ErrorNote message={(error as Error)?.message ?? "unknown error"} />}
        {data && (
          <DividedList>
            {data.slice(0, 5).map((txn) => (
              <li key={txn.id} className="flex items-center justify-between py-2.5 text-sm">
                <div>
                  <p className="font-medium text-zinc-800 dark:text-zinc-200">{txn.description}</p>
                  <p className="text-xs text-zinc-400">
                    {formatDate(txn.date)} · {txn.account}
                  </p>
                </div>
                <span
                  className={`font-semibold ${txn.type === "credit" ? "text-emerald-600" : "text-zinc-600 dark:text-zinc-300"}`}
                >
                  {txn.type === "credit" ? "+" : "-"}
                  {formatCurrency(Math.abs(txn.amount))}
                </span>
              </li>
            ))}
          </DividedList>
        )}
      </DashboardCard>
    );
  }

  if (isLoading) {
    return <DetailTableSkeleton columns={["Date", "Description", "Category", "Account", "Amount"]} />;
  }
  if (isError || !data) return <ErrorNote message={(error as Error)?.message ?? "unknown error"} />;

  return (
    <TableCard>
      <TableHead columns={["Date", "Description", "Category", "Account", "Amount"]} />
      <DividedTableBody>
        {data.map((txn) => (
          <tr key={txn.id}>
            <td className="px-4 py-2 text-zinc-400">{formatDate(txn.date)}</td>
            <td className="px-4 py-2">{txn.description}</td>
            <td className="px-4 py-2 text-zinc-400">{txn.category}</td>
            <td className="px-4 py-2 text-zinc-400">{txn.account}</td>
            <td className={`px-4 py-2 font-medium ${txn.type === "credit" ? "text-emerald-600" : "text-zinc-700 dark:text-zinc-300"}`}>
              {txn.type === "credit" ? "+" : "-"}
              {formatCurrency(Math.abs(txn.amount))}
            </td>
          </tr>
        ))}
      </DividedTableBody>
    </TableCard>
  );
}
