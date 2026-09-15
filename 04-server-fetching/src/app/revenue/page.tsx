import { DetailPageHeader } from "@/components/DetailPageHeader";
import { RevenueChart } from "@/components/RevenueChart";
import { fetchRevenue } from "@/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function RevenuePage() {
  const revenue = await fetchRevenue();

  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Revenue" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <RevenueChart data={revenue} variant="detail" />
      </main>
    </div>
  );
}
