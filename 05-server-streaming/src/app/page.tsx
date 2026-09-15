import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiCards } from "@/components/KpiCards";
import { RevenueChart } from "@/components/RevenueChart";
import { ExpenseBreakdown } from "@/components/ExpenseBreakdown";
import { RecentTransactions } from "@/components/RecentTransactions";
import { OutstandingInvoices } from "@/components/OutstandingInvoices";
import { FinancialHealth } from "@/components/FinancialHealth";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader subtitle="Streaming server-rendered example — each section streams in via Suspense as its data resolves" />
      <main className="mx-auto max-w-6xl space-y-6 px-6 py-8">
        <KpiCards />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <ExpenseBreakdown />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RecentTransactions />
          <OutstandingInvoices />
        </div>
        <FinancialHealth />
      </main>
    </div>
  );
}
