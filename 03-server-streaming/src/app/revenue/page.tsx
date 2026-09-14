import { Suspense } from "react";
import { DetailPageHeader } from "@/components/DetailPageHeader";
import { RevenueChartView } from "@/components/RevenueChartView";
import { ChartSkeleton, DetailTableSkeleton } from "@/components/ui/Skeleton";
import { Card } from "@/components/ui/Card";
import { fetchRevenue } from "@/lib/fetchers";

function RevenueDetailSkeleton() {
  return (
    <>
      <Card>
        <ChartSkeleton height={360} />
      </Card>
      <div className="mt-6">
        <DetailTableSkeleton columns={["Month", "Revenue", "Target"]} rows={12} />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";

async function RevenueDetailContent() {
  const data = await fetchRevenue();
  return <RevenueChartView data={data} variant="detail" />;
}

export default function RevenuePage() {
  return (
    <div className="min-h-screen">
      <DetailPageHeader title="Revenue" />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Suspense fallback={<RevenueDetailSkeleton />}>
          <RevenueDetailContent />
        </Suspense>
      </main>
    </div>
  );
}
