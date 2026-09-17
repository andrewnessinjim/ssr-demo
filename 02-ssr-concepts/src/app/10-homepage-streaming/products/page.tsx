import { getFeaturedProducts } from "@/lib/homepage-data";

// Four possible values: auto, force-dynamic, error, force-static
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getFeaturedProducts();

  return (
    <ul className="mt-4 grid grid-cols-2 gap-4">
      {products.map((product) => (
        <li key={product.id} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
          <p className="font-medium">{product.name}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{product.price}</p>
        </li>
      ))}
    </ul>
  );
}
