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

// Same simulated latency as 03-client-fetching's API routes and
// 04-server-fetching's fetchers, so all three projects are an
// apples-to-apples comparison.

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
