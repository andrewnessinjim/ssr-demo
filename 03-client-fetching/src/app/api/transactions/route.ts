import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getTransactions } from "@/lib/mockData";

export async function GET() {
  await randomDelay(1100, 2400);
  return NextResponse.json(getTransactions());
}
