import { DetailPageHeader } from "@/components/DetailPageHeader";
import { OutstandingInvoices } from "@/components/OutstandingInvoices";

export default function InvoicesPage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Invoices" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <OutstandingInvoices variant="detail" />
      </main>
    </div>
  );
}
