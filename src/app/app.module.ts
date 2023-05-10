import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardModule } from './dashboard/dashboard.module'; 

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { ExpenseComponent } from './expense/expense.component'; 

import { FormsModule } from '@angular/forms';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ManageExpensesComponent } from './manage-expenses/manage-expenses.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'; 
import { DateFormatPipe } from './pipe/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ExpenseComponent,
    ExpensesListComponent,
    ManageExpensesComponent,
    ExpenseItemComponent,
    LoginComponent,
    DateFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
