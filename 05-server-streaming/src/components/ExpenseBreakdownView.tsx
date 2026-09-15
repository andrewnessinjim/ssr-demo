"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/Card";
import { TableCard, TableHead, DividedTableBody } from "@/components/ui/Table";
import { formatCurrency, formatDate } from "@/lib/format";
import type { ExpensesData } from "@/lib/types";

// "use client" only because Recharts needs the browser. `data` is already
// resolved and passed down as a prop.
export function ExpenseBreakdownView({ data, variant = "widget" }: { data: ExpensesData; variant?: "widget" | "detail" }) {
  const isDetail = variant === "detail";

  const chart = (
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
    return chart;
  }

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
