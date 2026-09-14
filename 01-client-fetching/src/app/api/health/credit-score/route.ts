import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getCreditScore } from "@/lib/mockData";

// Deliberately fast. Paired with the slower endpoints in this folder to make
// the staggered pop-in in FinancialHealth.tsx obvious.
export async function GET() {
  await randomDelay(700, 1600);
  return NextResponse.json(getCreditScore());
}
