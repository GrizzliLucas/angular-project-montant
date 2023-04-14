import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ManageExpensesComponent } from './manage-expenses/manage-expenses.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  { path: 'expenses', component: ExpenseComponent },
  { path: 'expenses-list', component: ExpensesListComponent },
  { path: 'expenses-manage', component: ManageExpensesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}