import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getDebtRatio } from "@/lib/mockData";

// Deliberately the slowest of the three. Paired with the other endpoints in
// this folder to make the staggered pop-in in FinancialHealth.tsx obvious.
export async function GET() {
  await randomDelay(1900, 3900);
  return NextResponse.json(getDebtRatio());
}
