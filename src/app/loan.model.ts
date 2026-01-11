export interface Loan {
    amount: number;
    interestRate: number;
    totalAmountToBePaid: number;
    totalAmountPaid?: number;
    totalAmountLeft?: number;
    processingFees: number;
}

export interface LoanRepayment{
    month: number;
    year: number;
    amount: number;
    isPending?: boolean;
    amountLeft?: number;
}