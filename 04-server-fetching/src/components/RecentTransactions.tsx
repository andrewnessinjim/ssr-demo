import { DashboardCard } from "@/components/DashboardCard";
import { DividedList } from "@/components/ui/DividedList";
import { TableCard, TableHead, DividedTableBody } from "@/components/ui/Table";
import { formatCurrency, formatDate } from "@/lib/format";
import type { Transaction } from "@/lib/types";

// Plain Server Component - `data` is already resolved by the caller.
export function RecentTransactions({ data, variant = "widget" }: { data: Transaction[]; variant?: "widget" | "detail" }) {
  if (variant === "widget") {
    return (
      <DashboardCard title="Recent Transactions" href="/transactions" subtitle="Latest activity across all accounts">
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
      </DashboardCard>
    );
  }

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
