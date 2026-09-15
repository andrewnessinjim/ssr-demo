import { Suspense } from "react";
import { DetailPageHeader } from "@/components/DetailPageHeader";
import { TransactionsView } from "@/components/RecentTransactions";
import { DetailTableSkeleton } from "@/components/ui/Skeleton";
import { fetchTransactions } from "@/lib/fetchers";

export const dynamic = "force-dynamic";

async function TransactionsDetailContent() {
  const data = await fetchTransactions();
  return <TransactionsView data={data} variant="detail" />;
}

export default function TransactionsPage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Transactions" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Suspense
          fallback={
            <DetailTableSkeleton columns={["Date", "Description", "Category", "Account", "Amount"]} />
          }
        >
          <TransactionsDetailContent />
        </Suspense>
      </main>
    </div>
  );
}
