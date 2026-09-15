export interface Summary {
  totalRevenue: number;
  totalExpenses: number;
  netProfit: number;
  cashBalance: number;
  revenueChangePct: number;
  expensesChangePct: number;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  target: number;
}

export interface ExpenseCategory {
  category: string;
  amount: number;
}

export interface ExpenseLineItem {
  id: string;
  date: string;
  vendor: string;
  category: string;
  amount: number;
}

export interface ExpensesData {
  categories: ExpenseCategory[];
  recentExpenses: ExpenseLineItem[];
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  account: "Operating" | "Payroll" | "Reserve";
  amount: number;
  type: "credit" | "debit";
}

export interface Invoice {
  id: string;
  client: string;
  amount: number;
  issuedDate: string;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

export interface CreditScoreData {
  score: number;
  rating: "Excellent" | "Good" | "Fair";
}

export interface CashFlowData {
  ratio: number;
  trend: "up" | "flat" | "down";
}

export interface DebtRatioData {
  ratio: number;
  status: "healthy" | "watch" | "risk";
}
