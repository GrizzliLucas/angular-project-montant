import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent implements OnInit {
  expensesRef: AngularFireList<any>;
  expenses$: Observable<any[]>;

  totalEnAttente = 0;
  totalTermine = 0;

  constructor(private db: AngularFireDatabase) {
    this.expensesRef = this.db.list('expenses');
    this.expenses$ = this.expensesRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit(): void {
    this.expenses$.subscribe((expenses) => {
      this.totalEnAttente = 0;
      this.totalTermine = 0;
      expenses.forEach((expense) => {
        if (expense.status === 'en attente') {
          this.totalEnAttente += expense.amount;
        } else if (expense.status === 'terminé') {
          this.totalTermine += expense.amount;
        }
      });
    });
  }

  getTotal(expenses: Observable<any[]>, status: string): number {
    let total = 0;
    expenses.subscribe((data) => {
      data.forEach((expense) => {
        if (expense.status === status) {
          total += expense.amount;
        }
      });
    });
    return total;
  }
}