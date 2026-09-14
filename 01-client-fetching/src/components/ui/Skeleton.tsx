import { DividedList } from "@/components/ui/DividedList";
import { Card } from "@/components/ui/Card";
import { TableCard, TableHead, DividedTableBody } from "@/components/ui/Table";

// Skeleton rows are shaped like the real list rows (same <li>/padding/divide
// classes, via the shared DividedList) so the loading state occupies the
// same height as the resolved content and swapping the two in doesn't shift
// layout (CLS).
function Bar({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-zinc-200 dark:bg-zinc-800 ${className}`} />;
}

export function ListRowsSkeleton({ rows = 5, pill = false }: { rows?: number; pill?: boolean }) {
  return (
    <DividedList>
      {Array.from({ length: rows }, (_, i) => (
        <li key={i} className="flex items-center justify-between py-2.5 text-sm">
          <div>
            <Bar className="h-5 w-32" />
            <Bar className="h-4 w-40" />
          </div>
          <div className="flex items-center gap-2">
            <Bar className="h-5 w-16" />
            {pill && <Bar className="h-5 w-14 rounded-full" />}
          </div>
        </li>
      ))}
    </DividedList>
  );
}

// Matches the fixed-height wrapper Recharts' ResponsiveContainer renders
// into (see RevenueChart/ExpenseBreakdown), so the loading state reserves
// the same space as the chart it's standing in for.
export function ChartSkeleton({ height = 260 }: { height?: number }) {
  return <div style={{ height }} className="animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-800/60" />;
}

// KpiCards swaps its whole tree on isLoading (no per-tile Suspense here), so
// this mirrors a real tile's chrome (border/padding) and line heights
// (label: 16px, mt-2 value: 32px, mt-1 delta: 16px) exactly, including which
// tiles have a delta line, so the grid doesn't resize when data arrives.
export function KpiTileSkeleton({ withDelta = false }: { withDelta?: boolean }) {
  return (
    <Card>
      <Bar className="h-4 w-24" />
      <Bar className="mt-2 h-8 w-28" />
      {withDelta && <Bar className="mt-1 h-4 w-28" />}
    </Card>
  );
}

// FinancialHealth's metric value (text-2xl, 32px line-height) and subtext
// (text-xs, 16px line-height) stack with no margin between them, so these
// bars do too - matching the real 48px total exactly instead of the taller
// Spinner it replaces, which was shrinking the tile once data arrived.
export function MetricValueSkeleton() {
  return (
    <>
      <Bar className="h-8 w-14" />
      <Bar className="h-4 w-20" />
    </>
  );
}

// Mirrors a real row's cell padding/line-height (px-4 py-2, 20px line)
// exactly. Every detail table here has a fixed row count (12 months, 12
// recent expenses, 40 transactions, 18 invoices), so passing the real count
// as `rows` makes the loading state match the resolved table's height
// exactly instead of the shorter Spinner it replaces.
export function DetailTableSkeleton({ columns, rows }: { columns: string[]; rows: number }) {
  return (
    <TableCard>
      <TableHead columns={columns} />
      <DividedTableBody>
        {Array.from({ length: rows }, (_, i) => (
          <tr key={i}>
            {columns.map((_, j) => (
              <td key={j} className="px-4 py-2">
                <Bar className="h-5 w-20" />
              </td>
            ))}
          </tr>
        ))}
      </DividedTableBody>
    </TableCard>
  );
}
