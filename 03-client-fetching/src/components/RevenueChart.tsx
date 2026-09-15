"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useRevenue } from "@/hooks/useFinanceQueries";
import { DashboardCard } from "@/components/DashboardCard";
import { ErrorNote } from "@/components/ui/ErrorNote";
import { ChartSkeleton, DetailTableSkeleton } from "@/components/ui/Skeleton";
import { Card } from "@/components/ui/Card";
import { TableCard, TableHead, DividedTableBody } from "@/components/ui/Table";
import { formatCurrency } from "@/lib/format";

export function RevenueChart({ variant = "widget" }: { variant?: "widget" | "detail" }) {
  const { data, isLoading, isError, error } = useRevenue();
  const isDetail = variant === "detail";

  const chart = data && (
    <div style={{ width: "100%", height: isDetail ? 360 : 260 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-zinc-200 dark:stroke-zinc-800" />
          <XAxis dataKey="month" fontSize={12} />
          <YAxis fontSize={12} tickFormatter={(v: number) => `$${Math.round(v / 1000)}k`} />
          <Tooltip formatter={(v) => `$${Number(v).toLocaleString()}`} />
          <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={isDetail} />
          <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  if (!isDetail) {
    return (
      <DashboardCard title="Revenue Trend" href="/revenue" subtitle="Last 12 months, actual vs. target">
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
          <ChartSkeleton height={360} />
        </Card>
        <div className="mt-6">
          <DetailTableSkeleton columns={["Month", "Revenue", "Target"]} />
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
          <TableHead columns={["Month", "Revenue", "Target"]} />
          <DividedTableBody>
            {data.map((point) => (
              <tr key={point.month}>
                <td className="px-4 py-2">{point.month}</td>
                <td className="px-4 py-2">{formatCurrency(point.revenue)}</td>
                <td className="px-4 py-2 text-zinc-400">{formatCurrency(point.target)}</td>
              </tr>
            ))}
          </DividedTableBody>
        </TableCard>
      </div>
    </>
  );
}
