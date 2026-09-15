export function ServerTime({ includeTime = false, className }: { includeTime?: boolean; className?: string }) {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    ...(includeTime ? { hour: "numeric", minute: "numeric", second: "numeric" } : {}),
  }).format(now);

  return (
    <time dateTime={now.toISOString()} className={className}>
      {formatted}
    </time>
  );
}
