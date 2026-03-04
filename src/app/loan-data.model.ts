import { Loan, LoanRepayment } from "./loan.model";

export const LOAN: Loan = {
    amount: 70000,
    processingFees: 2280,
    interestRate: 19.49,
    totalAmountToBePaid: 79621.97,
};

export const LOAN_REPAYMENTS: LoanRepayment[] = [
    { month: 7, year: 2025, amount: 6678, amountLeft: 72943.97 },
    { month: 8, year: 2025, amount: 0, amountLeft: 72943.97 },
    { month: 9, year: 2025, amount: 0, amountLeft: 72943.97 },
    { month: 10, year: 2025, amount: 5000, amountLeft: 67943.97 },
    { month: 11, year: 2025, amount: 5000, amountLeft: 62943.97 },
    { month: 12, year: 2025, amount: 5000, amountLeft: 57943.97 },
    { month: 1, year: 2026, amount: 5000, amountLeft: 52943.97 },
    { month: 2, year: 2026, amount: 5000, amountLeft: 47943.97 },
    { month: 3, year: 2026, amount: 5000, amountLeft: 42943.97 },
    { month: 4, year: 2026, amount: 5000, isPending: true, amountLeft: 37943.97 },
    { month: 5, year: 2026, amount: 5000, isPending: true, amountLeft: 32943.97 },
    { month: 6, year: 2026, amount: 5000, isPending: true, amountLeft: 27943.97 },
    { month: 7, year: 2026, amount: 5000, isPending: true, amountLeft: 22943.97 },
    { month: 8, year: 2026, amount: 5000, isPending: true, amountLeft: 17943.97 },
    { month: 9, year: 2026, amount: 5000, isPending: true, amountLeft: 12943.97 },
    { month: 10, year: 2026, amount: 5000, isPending: true, amountLeft: 7943.97 },
    { month: 11, year: 2026, amount: 5000, isPending: true, amountLeft: 2943.97 },
    { month: 12, year: 2026, amount: 2943, isPending: true, amountLeft: 0 },
];