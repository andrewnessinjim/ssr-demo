import { DetailPageHeader } from "@/components/DetailPageHeader";
import { ExpenseBreakdown } from "@/components/ExpenseBreakdown";

export default function ExpensesPage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Expenses" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <ExpenseBreakdown variant="detail" />
      </main>
    </div>
  );
}
