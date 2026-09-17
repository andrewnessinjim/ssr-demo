export function FeaturedProductsSkeleton() {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="h-16 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
      ))}
    </ul>
  );
}

export default function Loading() {
  return <FeaturedProductsSkeleton />;
}
