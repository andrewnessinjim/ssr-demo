import Link from "next/link";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

export function DashboardCard({
  title,
  href,
  subtitle,
  children,
}: {
  title: string;
  href?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <Card as="section" className="flex flex-col">
      <div className="mb-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {href ? (
            <Link
              href={href}
              className="inline-flex items-center gap-1 hover:text-zinc-900 hover:underline underline-offset-4 dark:hover:text-zinc-50"
            >
              {title}
              <span aria-hidden="true">→</span>
            </Link>
          ) : (
            title
          )}
        </h2>
        {subtitle && <p className="mt-1 text-xs text-zinc-400">{subtitle}</p>}
      </div>
      {children}
    </Card>
  );
}
