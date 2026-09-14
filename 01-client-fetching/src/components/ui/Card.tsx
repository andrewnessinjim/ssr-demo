import type { ElementType, ReactNode } from "react";

// Base panel chrome shared by DashboardCard, KPI tiles, and the chart
// detail-page wrapper, so the box styling lives in one place.
export function Card({
  as: Component = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Component
      className={`rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900 ${className}`}
    >
      {children}
    </Component>
  );
}
