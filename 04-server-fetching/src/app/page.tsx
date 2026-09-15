import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiCards } from "@/components/KpiCards";
import { RevenueChart } from "@/components/RevenueChart";
import { ExpenseBreakdown } from "@/components/ExpenseBreakdown";
import { RecentTransactions } from "@/components/RecentTransactions";
import { OutstandingInvoices } from "@/components/OutstandingInvoices";
import { FinancialHealth } from "@/components/FinancialHealth";
import {
  fetchCashFlowRatio,
  fetchCreditScore,
  fetchDebtRatio,
  fetchExpenses,
  fetchInvoices,
  fetchRevenue,
  fetchSummary,
  fetchTransactions,
} from "@/lib/fetchers";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [summary, revenue, expenses, transactions, invoices, creditScore, cashFlow, debtRatio] = await Promise.all([
    fetchSummary(),
    fetchRevenue(),
    fetchExpenses(),
    fetchTransactions(),
    fetchInvoices(),
    fetchCreditScore(),
    fetchCashFlowRatio(),
    fetchDebtRatio(),
  ]);

  return (
    <div className="min-h-screen">
      <DashboardHeader subtitle="Server-rendered example — data fetched on the server before the page loads" />
      <main className="mx-auto max-w-6xl space-y-6 px-6 py-8">
        <KpiCards data={summary} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RevenueChart data={revenue} />
          </div>
          <ExpenseBreakdown data={expenses} />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RecentTransactions data={transactions} />
          <OutstandingInvoices data={invoices} />
        </div>
        <FinancialHealth credit={creditScore} cashFlow={cashFlow} debt={debtRatio} />
      </main>
    </div>
  );
}
