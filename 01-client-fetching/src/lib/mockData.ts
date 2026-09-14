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

const EXPENSE_CATEGORIES = [
  "Payroll",
  "Marketing",
  "Software & Tools",
  "Office & Facilities",
  "Travel",
  "Professional Services",
  "Equipment",
];

const VENDORS = [
  "Gusto Payroll",
  "Google Ads",
  "AWS",
  "WeWork",
  "Delta Airlines",
  "Deloitte Consulting",
  "Dell Technologies",
  "Slack",
  "Figma",
  "LinkedIn Ads",
  "Regus",
  "United Airlines",
];

const CLIENTS = [
  "Initech",
  "Globex Corp",
  "Umbrella Corp",
  "Stark Industries",
  "Wayne Enterprises",
  "Hooli",
  "Soylent Corp",
  "Aperture Science",
  "Massive Dynamic",
  "Cyberdyne Systems",
];

const TRANSACTION_DESCRIPTIONS = [
  "Client payment",
  "Software subscription",
  "Payroll run",
  "Office supplies",
  "Consulting fee",
  "Ad spend",
  "Equipment purchase",
  "Travel reimbursement",
  "Bank interest",
  "Insurance premium",
];

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randomInt(min: number, max: number): number {
  return Math.floor(randomBetween(min, max + 1));
}

function pick<T>(items: T[]): T {
  return items[randomInt(0, items.length - 1)];
}

function makeId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function recentIsoDate(withinDays: number): string {
  const date = new Date();
  date.setDate(date.getDate() - randomInt(0, withinDays));
  return date.toISOString();
}

export function getSummary(): Summary {
  const totalRevenue = randomInt(380_000, 460_000);
  const totalExpenses = randomInt(240_000, 320_000);
  return {
    totalRevenue,
    totalExpenses,
    netProfit: totalRevenue - totalExpenses,
    cashBalance: randomInt(900_000, 1_400_000),
    revenueChangePct: randomBetween(-4, 12),
    expensesChangePct: randomBetween(-6, 9),
  };
}

export function getRevenueTrend(): RevenuePoint[] {
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
  let base = randomInt(28_000, 34_000);
  return months.map((month) => {
    base = Math.max(base + randomInt(-2_000, 4_000), 8_000);
    return {
      month,
      revenue: base,
      target: Math.round(base * randomBetween(0.9, 1.05)),
    };
  });
}

export function getExpenses(): ExpensesData {
  const categories = EXPENSE_CATEGORIES.map((category) => ({
    category,
    amount: randomInt(8_000, 60_000),
  }));

  const recentExpenses = Array.from({ length: 12 }, () => ({
    id: makeId("exp"),
    date: recentIsoDate(60),
    vendor: pick(VENDORS),
    category: pick(EXPENSE_CATEGORIES),
    amount: randomInt(200, 15_000),
  })).sort((a, b) => b.date.localeCompare(a.date));

  return { categories, recentExpenses };
}

export function getTransactions(): Transaction[] {
  return Array.from({ length: 40 }, () => {
    const type: Transaction["type"] = Math.random() > 0.55 ? "credit" : "debit";
    return {
      id: makeId("txn"),
      date: recentIsoDate(45),
      description: pick(TRANSACTION_DESCRIPTIONS),
      category: pick(EXPENSE_CATEGORIES),
      account: pick(["Operating", "Payroll", "Reserve"] as const),
      amount: type === "credit" ? randomInt(1_000, 40_000) : -randomInt(100, 15_000),
      type,
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function getInvoices(): Invoice[] {
  return Array.from({ length: 18 }, () => {
    const issued = new Date();
    issued.setDate(issued.getDate() - randomInt(5, 90));
    const due = new Date(issued);
    due.setDate(due.getDate() + 30);
    const isPastDue = due < new Date();
    const status: Invoice["status"] = isPastDue
      ? pick(["paid", "overdue"] as const)
      : pick(["paid", "pending"] as const);

    return {
      id: makeId("inv"),
      client: pick(CLIENTS),
      amount: randomInt(2_000, 55_000),
      issuedDate: issued.toISOString(),
      dueDate: due.toISOString(),
      status,
    };
  }).sort((a, b) => b.dueDate.localeCompare(a.dueDate));
}

export function getCreditScore(): CreditScoreData {
  const score = randomInt(620, 820);
  const rating: CreditScoreData["rating"] = score > 750 ? "Excellent" : score > 680 ? "Good" : "Fair";
  return { score, rating };
}

export function getCashFlowRatio(): CashFlowData {
  const ratio = randomBetween(0.8, 2.4);
  const trend: CashFlowData["trend"] = ratio > 1.5 ? "up" : ratio > 1 ? "flat" : "down";
  return { ratio, trend };
}

export function getDebtRatio(): DebtRatioData {
  const ratio = randomBetween(0.15, 0.65);
  const status: DebtRatioData["status"] = ratio < 0.3 ? "healthy" : ratio < 0.5 ? "watch" : "risk";
  return { ratio, status };
}
