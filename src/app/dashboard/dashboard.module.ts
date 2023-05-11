import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class DashboardModule { }