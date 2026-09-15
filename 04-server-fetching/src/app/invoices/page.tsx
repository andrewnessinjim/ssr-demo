import { DetailPageHeader } from "@/components/DetailPageHeader";
import { OutstandingInvoices } from "@/components/OutstandingInvoices";
import { fetchInvoices } from "@/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function InvoicesPage() {
  const invoices = await fetchInvoices();

  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Invoices" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <OutstandingInvoices data={invoices} variant="detail" />
      </main>
    </div>
  );
}
