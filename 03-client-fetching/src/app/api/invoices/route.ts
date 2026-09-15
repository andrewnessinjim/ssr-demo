import { NextResponse } from "next/server";
import { randomDelay } from "@/lib/delay";
import { getInvoices } from "@/lib/mockData";

export async function GET() {
  await randomDelay(900, 1900);
  return NextResponse.json(getInvoices());
}
