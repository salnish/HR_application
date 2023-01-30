import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HrRoutingModule } from './hr-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HrComponent } from '../hr/hr.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HrComponent,
    AddEmployeeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class HrModule { }
