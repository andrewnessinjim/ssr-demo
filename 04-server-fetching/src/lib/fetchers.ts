import { randomDelay } from "@/lib/delay";
import {
  getCashFlowRatio,
  getCreditScore,
  getDebtRatio,
  getExpenses,
  getInvoices,
  getRevenueTrend,
  getSummary,
  getTransactions,
} from "@/lib/mockData";

// Same simulated backend latency as the 03-client-fetching project's API
// routes, so the two demos are an apples-to-apples comparison. The only
// thing that changes between the two projects is *when* the browser gets
// to see something - here, nothing renders until every one of these has
// resolved (see the comment in app/page.tsx).

export async function fetchSummary() {
  await randomDelay(800, 1500);
  return getSummary();
}

export async function fetchRevenue() {
  await randomDelay(900, 2000);
  return getRevenueTrend();
}

export async function fetchExpenses() {
  await randomDelay(1000, 2200);
  return getExpenses();
}

export async function fetchTransactions() {
  await randomDelay(1100, 2400);
  return getTransactions();
}

export async function fetchInvoices() {
  await randomDelay(900, 1900);
  return getInvoices();
}

export async function fetchCreditScore() {
  await randomDelay(700, 1600);
  return getCreditScore();
}

export async function fetchCashFlowRatio() {
  await randomDelay(1200, 3000);
  return getCashFlowRatio();
}

export async function fetchDebtRatio() {
  await randomDelay(1900, 3900);
  return getDebtRatio();
}
