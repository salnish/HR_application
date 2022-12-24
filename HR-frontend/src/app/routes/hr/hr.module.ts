import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HrComponent } from '../hr/hr.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HrComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
