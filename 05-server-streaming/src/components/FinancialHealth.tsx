import { Suspense } from "react";
import type { ReactNode } from "react";
import { DashboardCard } from "@/components/DashboardCard";
import { MetricValueSkeleton } from "@/components/ui/Skeleton";
import { fetchCashFlowRatio, fetchCreditScore, fetchDebtRatio } from "@/lib/fetchers";

function MetricValueDisplay({ value, sub, capitalize = false }: { value: string; sub: string; capitalize?: boolean }) {
  return (
    <>
      <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{value}</p>
      <p className={`text-xs text-zinc-400 ${capitalize ? "capitalize" : ""}`}>{sub}</p>
    </>
  );
}

async function CreditScoreMetric() {
  const data = await fetchCreditScore();
  return <MetricValueDisplay value={String(data.score)} sub={data.rating} />;
}

async function CashFlowMetric() {
  const data = await fetchCashFlowRatio();
  return <MetricValueDisplay value={`${data.ratio.toFixed(2)}x`} sub={data.trend} capitalize />;
}

async function DebtRatioMetric() {
  const data = await fetchDebtRatio();
  return <MetricValueDisplay value={`${(data.ratio * 100).toFixed(0)}%`} sub={data.status} capitalize />;
}

const METRICS = [
  { title: "Credit Score", Metric: CreditScoreMetric },
  { title: "Cash Flow Ratio", Metric: CashFlowMetric },
  { title: "Debt Ratio", Metric: DebtRatioMetric },
];

function MetricTile({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function FinancialHealth() {
  return (
    <DashboardCard title="Financial Health" subtitle="Credit score, cash flow ratio, and debt ratio - each streams in independently">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {METRICS.map(({ title, Metric }) => (
          <MetricTile key={title} title={title}>
            <Suspense fallback={<MetricValueSkeleton />}>
              <Metric />
            </Suspense>
          </MetricTile>
        ))}
      </div>
    </DashboardCard>
  );
}
