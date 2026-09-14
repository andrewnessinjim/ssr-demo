import { Suspense } from "react";
import { DetailPageHeader } from "@/components/DetailPageHeader";
import { ExpenseBreakdownView } from "@/components/ExpenseBreakdownView";
import { ChartSkeleton, DetailTableSkeleton } from "@/components/ui/Skeleton";
import { Card } from "@/components/ui/Card";
import { fetchExpenses } from "@/lib/fetchers";

function ExpensesDetailSkeleton() {
  return (
    <>
      <Card>
        <ChartSkeleton height={320} />
      </Card>
      <div className="mt-6">
        <DetailTableSkeleton columns={["Date", "Vendor", "Category", "Amount"]} rows={12} />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

async function ExpensesDetailContent() {
  const data = await fetchExpenses();
  return <ExpenseBreakdownView data={data} variant="detail" />;
}

export default function ExpensesPage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Expenses" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Suspense fallback={<ExpensesDetailSkeleton />}>
          <ExpensesDetailContent />
        </Suspense>
      </main>
    </div>
  );
}
