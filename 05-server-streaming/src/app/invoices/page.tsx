import { Suspense } from "react";
import { DetailPageHeader } from "@/components/DetailPageHeader";
import { InvoicesView } from "@/components/OutstandingInvoices";
import { DetailTableSkeleton } from "@/components/ui/Skeleton";
import { fetchInvoices } from "@/lib/fetchers";

export const dynamic = "force-dynamic";

async function InvoicesDetailContent() {
  const data = await fetchInvoices();
  return <InvoicesView data={data} variant="detail" />;
}

export default function InvoicesPage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Invoices" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Suspense fallback={<DetailTableSkeleton columns={["Client", "Issued", "Due", "Status", "Amount"]} />}>
          <InvoicesDetailContent />
        </Suspense>
      </main>
    </div>
  );
}
