import { DetailPageHeader } from "@/components/DetailPageHeader";
import { RevenueChart } from "@/components/RevenueChart";

export default function RevenuePage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Revenue" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <RevenueChart variant="detail" />
      </main>
    </div>
  );
}
