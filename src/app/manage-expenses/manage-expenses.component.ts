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

  constructor(private db: AngularFireDatabase) {
    this.expensesRef = this.db.list('expenses');
    this.expenses$ = this.expensesRef.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit(): void {}
}
