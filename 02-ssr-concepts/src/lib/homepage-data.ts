export type Product = {
  id: number;
  name: string;
  price: string;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await delay(2000);
  return [
    { id: 1, name: "Wireless Headphones", price: "$129" },
    { id: 2, name: "Mechanical Keyboard", price: "$89" },
    { id: 3, name: "Standing Desk", price: "$399" },
    { id: 4, name: "4K Monitor", price: "$249" },
  ];
}
