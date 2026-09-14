"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useExpenses } from "@/hooks/useFinanceQueries";
import { DashboardCard } from "@/components/DashboardCard";
import { ErrorNote } from "@/components/ui/ErrorNote";
import { ChartSkeleton, DetailTableSkeleton } from "@/components/ui/Skeleton";
import { Card } from "@/components/ui/Card";
import { TableCard, TableHead, DividedTableBody } from "@/components/ui/Table";
import { formatCurrency, formatDate } from "@/lib/format";

export function ExpenseBreakdown({ variant = "widget" }: { variant?: "widget" | "detail" }) {
  const { data, isLoading, isError, error } = useExpenses();
  const isDetail = variant === "detail";

  const chart = data && (
    <div style={{ width: "100%", height: isDetail ? 320 : 260 }}>
      <ResponsiveContainer>
        <BarChart data={data.categories} layout="vertical" margin={{ left: 24 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-zinc-200 dark:stroke-zinc-800" />
          <XAxis type="number" fontSize={12} tickFormatter={(v: number) => `$${Math.round(v / 1000)}k`} />
          <YAxis type="category" dataKey="category" fontSize={12} width={isDetail ? 150 : 130} />
          <Tooltip formatter={(v) => `$${Number(v).toLocaleString()}`} />
          <Bar dataKey="amount" fill="#2563eb" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  if (!isDetail) {
    return (
      <DashboardCard title="Expense Breakdown" href="/expenses" subtitle="By category, this quarter">
        {isLoading && <ChartSkeleton height={260} />}
        {isError && <ErrorNote message={(error as Error)?.message ?? "unknown error"} />}
        {chart}
      </DashboardCard>
    );
  }

  if (isLoading) {
    return (
      <>
        <Card>
          <ChartSkeleton height={320} />
        </Card>
        <div className="mt-6">
          <DetailTableSkeleton columns={["Date", "Vendor", "Category", "Amount"]} rows={12} />
        </div>
      </>
    );
  }
  if (isError || !data) return <ErrorNote message={(error as Error)?.message ?? "unknown error"} />;

  return (
    <>
      <Card>{chart}</Card>
      <div className="mt-6">
        <TableCard>
          <TableHead columns={["Date", "Vendor", "Category", "Amount"]} />
          <DividedTableBody>
            {data.recentExpenses.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-zinc-400">{formatDate(item.date)}</td>
                <td className="px-4 py-2">{item.vendor}</td>
                <td className="px-4 py-2 text-zinc-400">{item.category}</td>
                <td className="px-4 py-2">{formatCurrency(item.amount)}</td>
              </tr>
            ))}
          </DividedTableBody>
        </TableCard>
      </div>
    </>
  );
}
