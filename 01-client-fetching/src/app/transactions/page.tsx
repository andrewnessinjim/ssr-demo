import { DetailPageHeader } from "@/components/DetailPageHeader";
import { RecentTransactions } from "@/components/RecentTransactions";

export default function TransactionsPage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Transactions" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <RecentTransactions variant="detail" />
      </main>
    </div>
  );
}
