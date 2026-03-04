import { Component } from '@angular/core';
import { LOAN, LOAN_REPAYMENTS } from './loan-data.model';
import { Loan, LoanRepayment } from './loan.model';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgFor, NgClass, NgIf],
  standalone: true
})
export class AppComponent {
  title = 'loan';

  loan: Loan = LOAN;
  repayments: LoanRepayment[] = LOAN_REPAYMENTS;

  constructor(){
    // Compute running balance for each repayment and totals based on the repayment data
    let runningBalance = this.loan.totalAmountToBePaid;

    for (const r of this.repayments) {
      // subtract the EMI for this installment (0 for skipped)
      runningBalance = Number((runningBalance - r.amount).toFixed(2));
      r.amountLeft = runningBalance;
    }

    // Total paid includes all installments that are not marked pending
    const totalPaid = this.repayments
      .filter(r => !r.isPending)
      .reduce((s, r) => s + r.amount, 0);

    this.loan.totalAmountPaid = totalPaid;
    this.loan.totalAmountLeft = Number((this.loan.totalAmountToBePaid - totalPaid).toFixed(2));
  }

  getMonthYear(month: number, year: number): string {
    const date = new Date(year, month - 1);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }
}
