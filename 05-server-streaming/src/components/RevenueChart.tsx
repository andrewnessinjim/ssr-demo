import { Suspense } from "react";
import { DashboardCard } from "@/components/DashboardCard";
import { RevenueChartView } from "@/components/RevenueChartView";
import { ChartSkeleton } from "@/components/ui/Skeleton";
import { fetchRevenue } from "@/lib/fetchers";

async function RevenueData() {
  const data = await fetchRevenue();
  return <RevenueChartView data={data} />;
}

// The card chrome (title, link, subtitle) renders immediately - it needs no
// data. Only the chart itself sits inside <Suspense>, so "Revenue Trend →"
// is clickable right away even while its data is still in flight.
export function RevenueChart() {
  return (
    <DashboardCard title="Revenue Trend" href="/revenue" subtitle="Last 12 months, actual vs. target">
      <Suspense fallback={<ChartSkeleton height={260} />}>
        <RevenueData />
      </Suspense>
    </DashboardCard>
  );
}
