import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getCashFlowRatio } from "@/lib/mockData";

// Deliberately medium-slow. Paired with the other endpoints in this folder to
// make the staggered pop-in in FinancialHealth.tsx obvious.
export async function GET() {
  await randomDelay(1200, 3000);
  return NextResponse.json(getCashFlowRatio());
}
