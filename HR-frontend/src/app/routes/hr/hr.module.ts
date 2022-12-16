import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from '../hr/hr.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HrComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule { }
