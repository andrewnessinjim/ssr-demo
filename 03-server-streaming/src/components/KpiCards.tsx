import { Suspense, cache } from "react";
import type { ReactNode } from "react";
import { fetchSummary } from "@/lib/fetchers";
import { formatCurrency, formatPercent } from "@/lib/format";
import { KpiValueSkeleton } from "@/components/ui/Skeleton";
import { Card } from "@/components/ui/Card";

// cache() dedupes this within a single request: all four tiles below call
// getSummary() independently, but only one fetch actually runs (and one
// random delay elapses) - without it, each tile would trigger its own
// fetch and could end up with different, inconsistent random data.
const getSummary = cache(fetchSummary);

function KpiTile({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{label}</p>
      {children}
    </Card>
  );
}

async function TotalRevenueValue() {
  const data = await getSummary();
  return (
    <>
      <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{formatCurrency(data.totalRevenue)}</p>
      <p className={`mt-1 text-xs font-medium ${data.revenueChangePct >= 0 ? "text-emerald-600" : "text-red-500"}`}>
        {formatPercent(data.revenueChangePct)} vs last month
      </p>
    </>
  );
}

async function TotalExpensesValue() {
  const data = await getSummary();
  return (
    <>
      <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{formatCurrency(data.totalExpenses)}</p>
      <p className={`mt-1 text-xs font-medium ${data.expensesChangePct >= 0 ? "text-emerald-600" : "text-red-500"}`}>
        {formatPercent(data.expensesChangePct)} vs last month
      </p>
    </>
  );
}

async function NetProfitValue() {
  const data = await getSummary();
  return <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{formatCurrency(data.netProfit)}</p>;
}

async function CashBalanceValue() {
  const data = await getSummary();
  return <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{formatCurrency(data.cashBalance)}</p>;
}

// Each tile's label is static and renders immediately - only the number
// (and its delta, where there is one) sits behind <Suspense>, since that's
// the only part that actually depends on fetched data.
export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <KpiTile label="Total Revenue">
        <Suspense fallback={<KpiValueSkeleton withDelta />}>
          <TotalRevenueValue />
        </Suspense>
      </KpiTile>
      <KpiTile label="Total Expenses">
        <Suspense fallback={<KpiValueSkeleton withDelta />}>
          <TotalExpensesValue />
        </Suspense>
      </KpiTile>
      <KpiTile label="Net Profit">
        <Suspense fallback={<KpiValueSkeleton />}>
          <NetProfitValue />
        </Suspense>
      </KpiTile>
      <KpiTile label="Cash Balance">
        <Suspense fallback={<KpiValueSkeleton />}>
          <CashBalanceValue />
        </Suspense>
      </KpiTile>
    </div>
  );
}
