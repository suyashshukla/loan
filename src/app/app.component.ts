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

  getMonthYear(month: number, year: number): string {
    const date = new Date(year, month - 1);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }
}
