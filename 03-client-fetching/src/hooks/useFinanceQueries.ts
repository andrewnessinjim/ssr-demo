"use client";

import { useQuery } from "@tanstack/react-query";
import type {
  CashFlowData,
  CreditScoreData,
  DebtRatioData,
  ExpensesData,
  Invoice,
  RevenuePoint,
  Summary,
  Transaction,
} from "@/lib/types";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request to ${url} failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

const defaultOptions = { staleTime: 30_000, refetchOnWindowFocus: false } as const;

export function useSummary() {
  return useQuery({
    queryKey: ["summary"],
    queryFn: () => fetchJson<Summary>("/api/summary"),
    ...defaultOptions,
  });
}

export function useRevenue() {
  return useQuery({
    queryKey: ["revenue"],
    queryFn: () => fetchJson<RevenuePoint[]>("/api/revenue"),
    ...defaultOptions,
  });
}

export function useExpenses() {
  return useQuery({
    queryKey: ["expenses"],
    queryFn: () => fetchJson<ExpensesData>("/api/expenses"),
    ...defaultOptions,
  });
}

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: () => fetchJson<Transaction[]>("/api/transactions"),
    ...defaultOptions,
  });
}

export function useInvoices() {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: () => fetchJson<Invoice[]>("/api/invoices"),
    ...defaultOptions,
  });
}

export function useCreditScore() {
  return useQuery({
    queryKey: ["health", "credit-score"],
    queryFn: () => fetchJson<CreditScoreData>("/api/health/credit-score"),
    ...defaultOptions,
  });
}

export function useCashFlowRatio() {
  return useQuery({
    queryKey: ["health", "cash-flow"],
    queryFn: () => fetchJson<CashFlowData>("/api/health/cash-flow"),
    ...defaultOptions,
  });
}

export function useDebtRatio() {
  return useQuery({
    queryKey: ["health", "debt-ratio"],
    queryFn: () => fetchJson<DebtRatioData>("/api/health/debt-ratio"),
    ...defaultOptions,
  });
}
