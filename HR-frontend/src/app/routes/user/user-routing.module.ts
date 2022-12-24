import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:UserComponent,
  children:[
    {path:'',redirectTo:'/user/home',pathMatch:'full'},
    {path:'home',component:HomeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
