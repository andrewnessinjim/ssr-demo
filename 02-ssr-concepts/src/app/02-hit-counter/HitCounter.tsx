import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";

const DATA_FILE = path.join(process.cwd(), "data", "hits.json");

async function getAndIncrementCount() {
  let count = 0;
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    count = JSON.parse(raw).count;
  } catch {
    count = 0;
  }
  count += 1;
  await writeFile(DATA_FILE, JSON.stringify({ count }), "utf-8");
  return count;
}

export async function HitCounter() {
  const count = await getAndIncrementCount();
  return <p className="mt-4 text-7xl font-semibold text-blue-600 dark:text-blue-400">{count}</p>;
}
