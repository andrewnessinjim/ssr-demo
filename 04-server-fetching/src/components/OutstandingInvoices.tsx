import { DashboardCard } from "@/components/DashboardCard";
import { DividedList } from "@/components/ui/DividedList";
import { TableCard, TableHead, DividedTableBody } from "@/components/ui/Table";
import { formatCurrency, formatDate } from "@/lib/format";
import type { Invoice } from "@/lib/types";

const STATUS_STYLES: Record<Invoice["status"], string> = {
  paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  overdue: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

// Plain Server Component - `data` is already resolved by the caller.
export function OutstandingInvoices({ data, variant = "widget" }: { data: Invoice[]; variant?: "widget" | "detail" }) {
  if (variant === "widget") {
    const outstanding = data.filter((inv) => inv.status !== "paid").slice(0, 5);
    return (
      <DashboardCard title="Outstanding Invoices" href="/invoices" subtitle="Pending and overdue client invoices">
        <DividedList>
          {outstanding.map((inv) => (
            <li key={inv.id} className="flex items-center justify-between py-2.5 text-sm">
              <div>
                <p className="font-medium text-zinc-800 dark:text-zinc-200">{inv.client}</p>
                <p className="text-xs text-zinc-400">Due {formatDate(inv.dueDate)}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-zinc-700 dark:text-zinc-200">{formatCurrency(inv.amount)}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${STATUS_STYLES[inv.status]}`}>
                  {inv.status}
                </span>
              </div>
            </li>
          ))}
        </DividedList>
      </DashboardCard>
    );
  }

  return (
    <TableCard>
      <TableHead columns={["Client", "Issued", "Due", "Status", "Amount"]} />
      <DividedTableBody>
        {data.map((inv) => (
          <tr key={inv.id}>
            <td className="px-4 py-2">{inv.client}</td>
            <td className="px-4 py-2 text-zinc-400">{formatDate(inv.issuedDate)}</td>
            <td className="px-4 py-2 text-zinc-400">{formatDate(inv.dueDate)}</td>
            <td className="px-4 py-2">
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${STATUS_STYLES[inv.status]}`}>
                {inv.status}
              </span>
            </td>
            <td className="px-4 py-2 font-medium">{formatCurrency(inv.amount)}</td>
          </tr>
        ))}
      </DividedTableBody>
    </TableCard>
  );
}
