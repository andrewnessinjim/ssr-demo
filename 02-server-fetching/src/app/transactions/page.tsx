import { DetailPageHeader } from "@/components/DetailPageHeader";
import { RecentTransactions } from "@/components/RecentTransactions";
import { fetchTransactions } from "@/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function TransactionsPage() {
  const transactions = await fetchTransactions();

  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Transactions" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <RecentTransactions data={transactions} variant="detail" />
      </main>
    </div>
  );
}
