import { HrComponent } from './hr.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path:'',
  component:HrComponent,
  children:[
    {path:'',redirectTo:'/Hr/home',pathMatch:'full'},
    {path:'home',component:HomeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
