import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getSummary } from "@/lib/mockData";

export async function GET() {
  await randomDelay(800, 1500);
  return NextResponse.json(getSummary());
}
