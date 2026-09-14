import { Suspense } from "react";
import { DashboardCard } from "@/components/DashboardCard";
import { ExpenseBreakdownView } from "@/components/ExpenseBreakdownView";
import { ChartSkeleton } from "@/components/ui/Skeleton";
import { fetchExpenses } from "@/lib/fetchers";

async function ExpenseData() {
  const data = await fetchExpenses();
  return <ExpenseBreakdownView data={data} />;
}

export function ExpenseBreakdown() {
  return (
    <DashboardCard title="Expense Breakdown" href="/expenses" subtitle="By category, this quarter">
      <Suspense fallback={<ChartSkeleton height={260} />}>
        <ExpenseData />
      </Suspense>
    </DashboardCard>
  );
}
