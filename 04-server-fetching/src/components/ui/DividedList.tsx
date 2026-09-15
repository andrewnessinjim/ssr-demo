import type { ReactNode } from "react";

// Single source of truth for the row-divider styling shared by the widget
// lists, so they can't drift out of sync.
export function DividedList({ children }: { children: ReactNode }) {
  return <ul className="divide-y divide-black/5 dark:divide-white/10">{children}</ul>;
}
