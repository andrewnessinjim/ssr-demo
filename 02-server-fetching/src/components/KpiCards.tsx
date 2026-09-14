import { formatCurrency, formatPercent } from "@/lib/format";
import { Card } from "@/components/ui/Card";
import type { Summary } from "@/lib/types";

// Plain Server Component - no hooks, no "use client". By the time this
// renders, `data` has already been awaited in app/page.tsx, so there is no
// loading state to manage here at all (contrast with 01-client-fetching's
// KpiCards, which has an isLoading skeleton branch).
export function KpiCards({ data }: { data: Summary }) {
  const tiles = [
    { label: "Total Revenue", value: formatCurrency(data.totalRevenue), delta: data.revenueChangePct },
    { label: "Total Expenses", value: formatCurrency(data.totalExpenses), delta: data.expensesChangePct },
    { label: "Net Profit", value: formatCurrency(data.netProfit) },
    { label: "Cash Balance", value: formatCurrency(data.cashBalance) },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tiles.map((tile) => (
        <Card key={tile.label}>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {tile.label}
          </p>
          <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{tile.value}</p>
          {tile.delta !== undefined && (
            <p
              className={`mt-1 text-xs font-medium ${tile.delta >= 0 ? "text-emerald-600" : "text-red-500"}`}
            >
              {formatPercent(tile.delta)} vs last month
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}
