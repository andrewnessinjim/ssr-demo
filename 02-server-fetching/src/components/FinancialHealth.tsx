import type { ReactNode } from "react";
import { DashboardCard } from "@/components/DashboardCard";
import type { CashFlowData, CreditScoreData, DebtRatioData } from "@/lib/types";

function MetricTile({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

// In 01-client-fetching, this widget was the prime <Suspense> candidate:
// three independent client-side queries popping in at different times.
// Here there's no such thing - all three values already exist by the time
// this component runs, because app/page.tsx awaited every fetch (including
// fetchDebtRatio's up to 3900ms) before rendering anything at all. The
// Suspense candidate in *this* project isn't a widget, it's the entire
// page: see the comment in app/page.tsx.
export function FinancialHealth({
  credit,
  cashFlow,
  debt,
}: {
  credit: CreditScoreData;
  cashFlow: CashFlowData;
  debt: DebtRatioData;
}) {
  return (
    <DashboardCard title="Financial Health" subtitle="Credit score, cash flow ratio, and debt ratio">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricTile title="Credit Score">
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{credit.score}</p>
          <p className="text-xs text-zinc-400">{credit.rating}</p>
        </MetricTile>
        <MetricTile title="Cash Flow Ratio">
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{cashFlow.ratio.toFixed(2)}x</p>
          <p className="text-xs text-zinc-400 capitalize">{cashFlow.trend}</p>
        </MetricTile>
        <MetricTile title="Debt Ratio">
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{(debt.ratio * 100).toFixed(0)}%</p>
          <p className="text-xs text-zinc-400 capitalize">{debt.status}</p>
        </MetricTile>
      </div>
    </DashboardCard>
  );
}
