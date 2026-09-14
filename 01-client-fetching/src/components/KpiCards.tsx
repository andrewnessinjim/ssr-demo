"use client";

import { useSummary } from "@/hooks/useFinanceQueries";
import { formatCurrency, formatPercent } from "@/lib/format";
import { ErrorNote } from "@/components/ui/ErrorNote";
import { KpiTileSkeleton } from "@/components/ui/Skeleton";
import { Card } from "@/components/ui/Card";

// Revenue and Expenses tiles carry a delta line, Net Profit and Cash Balance
// don't - the skeleton needs to know this per-tile too, since it renders
// before `data` (and thus `tile.delta`) exists.
const KPI_TILES_HAVE_DELTA = [true, true, false, false];

export function KpiCards() {
  const { data, isLoading, isError, error } = useSummary();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KPI_TILES_HAVE_DELTA.map((withDelta, i) => (
          <KpiTileSkeleton key={i} withDelta={withDelta} />
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return <ErrorNote message={(error as Error)?.message ?? "unknown error"} />;
  }

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
