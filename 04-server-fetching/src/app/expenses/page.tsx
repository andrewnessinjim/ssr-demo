import { DetailPageHeader } from "@/components/DetailPageHeader";
import { ExpenseBreakdown } from "@/components/ExpenseBreakdown";
import { fetchExpenses } from "@/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function ExpensesPage() {
  const expenses = await fetchExpenses();

  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Expenses" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <ExpenseBreakdown data={expenses} variant="detail" />
      </main>
    </div>
  );
}
