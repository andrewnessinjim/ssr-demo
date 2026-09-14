"use client";

import type { ReactNode } from "react";
import { useCashFlowRatio, useCreditScore, useDebtRatio } from "@/hooks/useFinanceQueries";
import { DashboardCard } from "@/components/DashboardCard";
import { MetricValueSkeleton } from "@/components/ui/Skeleton";
import { ErrorNote } from "@/components/ui/ErrorNote";

// Prime candidate for <Suspense>, intentionally left without it.
//
// The three metrics below are backed by independent useQuery calls hitting
// independent endpoints with independent randomized delays (300-1200ms,
// 800-2600ms, 1500-3500ms). Each tile manages its own isLoading flag, so
// they pop in one at a time as their own request resolves - a "waterfall of
// spinners" with visible layout shift. A single <Suspense> boundary around a
// Suspense-compatible data source would let all three resolve together
// under one fallback (or, with nested boundaries, stream in without any of
// this manual isLoading plumbing repeated per tile).
export function FinancialHealth() {
  const credit = useCreditScore();
  const cashFlow = useCashFlowRatio();
  const debt = useDebtRatio();

  return (
    <DashboardCard
      title="Financial Health"
      subtitle="Three independently-loaded metrics — a classic Suspense candidate (see code comment)"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricTile title="Credit Score" isLoading={credit.isLoading} isError={credit.isError} error={credit.error}>
          {credit.data && (
            <>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{credit.data.score}</p>
              <p className="text-xs text-zinc-400">{credit.data.rating}</p>
            </>
          )}
        </MetricTile>
        <MetricTile
          title="Cash Flow Ratio"
          isLoading={cashFlow.isLoading}
          isError={cashFlow.isError}
          error={cashFlow.error}
        >
          {cashFlow.data && (
            <>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{cashFlow.data.ratio.toFixed(2)}x</p>
              <p className="text-xs text-zinc-400 capitalize">{cashFlow.data.trend}</p>
            </>
          )}
        </MetricTile>
        <MetricTile title="Debt Ratio" isLoading={debt.isLoading} isError={debt.isError} error={debt.error}>
          {debt.data && (
            <>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{(debt.data.ratio * 100).toFixed(0)}%</p>
              <p className="text-xs text-zinc-400 capitalize">{debt.data.status}</p>
            </>
          )}
        </MetricTile>
      </div>
    </DashboardCard>
  );
}

function MetricTile({
  title,
  isLoading,
  isError,
  error,
  children,
}: {
  title: string;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{title}</p>
      <div className="mt-2">
        {isLoading && <MetricValueSkeleton />}
        {isError && <ErrorNote message={(error as Error)?.message ?? "unknown error"} />}
        {!isLoading && !isError && children}
      </div>
    </div>
  );
}
