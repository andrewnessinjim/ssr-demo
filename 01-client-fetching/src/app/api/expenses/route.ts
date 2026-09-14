import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getExpenses } from "@/lib/mockData";

export async function GET() {
  await randomDelay(1000, 2200);
  return NextResponse.json(getExpenses());
}
