import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HrComponent } from './hr.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:HrComponent,
  children:[
    {path:'',redirectTo:'/Hr/home',pathMatch:'full'},
    {path:'home',component:DashboardComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
