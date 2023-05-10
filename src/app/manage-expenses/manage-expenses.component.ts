import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-expenses',
  templateUrl: './manage-expenses.component.html',
  styleUrls: ['./manage-expenses.component.css'],
})
export class ManageExpensesComponent implements OnInit {
  expensesRef: AngularFireList<any>;
  expenses$: Observable<any[]>;
  filteredExpenses$: Observable<any[]>;
  filterValue = '';

  constructor(private db: AngularFireDatabase) {
    this.expensesRef = this.db.list('expenses');
    this.expenses$ = this.expensesRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.filteredExpenses$ = this.expenses$;
  }

  ngOnInit(): void {}

  filterExpenses() {
    this.filteredExpenses$ = this.expenses$.pipe(
      map((expenses) =>
        expenses.filter(
          (expense) =>
            expense.name
              .toLowerCase()
              .indexOf(this.filterValue.toLowerCase()) !== -1
        )
      )
    );
  }
  
}
