import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class DashboardModule { }