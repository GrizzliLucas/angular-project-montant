import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { Expense } from '../models/expense.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
})
export class ExpenseComponent implements OnInit {
  expensesRef: AngularFireList<any>;

  expense : Expense = {
    name: '',
    amount: 0,
    status: '',
  };

  // le ! signale que la variable est initialisé plus tard
  expenseForm!: FormGroup; 

  constructor(private db: AngularFireDatabase) {
    this.expensesRef = this.db.list('expenses');
  }

   ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.expenseForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      amount: new FormControl(0, [Validators.required, Validators.min(1)]),
      status: new FormControl('', Validators.required),
    });
  }

  addExpense(expenseForm: FormGroup) {
    const { name, amount, status } = expenseForm.value;
    const expense = { name, amount: parseFloat(amount), status };
  
    this.expensesRef.push(expense)
      .then(() => {
        console.log('Expense added successfully');
        expenseForm.reset();
      })
      .catch((error) => {
        console.error('Error adding expense:', error);
      });
  }
}
