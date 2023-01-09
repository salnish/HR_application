import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HrComponent } from './hr.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:HrComponent,
  children:[
    {path:'',redirectTo:'/hr/home',pathMatch:'full'},
    {path:'home',component:DashboardComponent},
    {path:'addEmployee',component:AddEmployeeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
