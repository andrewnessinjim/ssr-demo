import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getRevenueTrend } from "@/lib/mockData";

export async function GET() {
  await randomDelay(900, 2000);
  return NextResponse.json(getRevenueTrend());
}
