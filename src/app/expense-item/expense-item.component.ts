import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css'],
})
export class ExpenseItemComponent implements OnInit {
  @Input() expense: any;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {}

  updateStatus() {
    this.db.object(`expenses/${this.expense.key}`).update({ status: 'terminé' });
  }

  deleteExpense(): void {
    this.db.list('expenses').remove(this.expense.key)
      .then(() => {
        console.log('Expense deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting expense:', error);
      });
  }
}