import { NotFoundComponent } from './components/not-found/not-found.component';
import { HrLoginComponent } from './components/hr-login/hr-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/userLogin',pathMatch:'full'},
  {path:'userLogin',component:UserLoginComponent},
  {path:'hrLogin',component:HrLoginComponent},
  {
    path:'user',
    loadChildren:()=>
    import ('./routes/hr/hr.module').then((m)=>m.HrModule)
  },
  {
    path:'Hr',
    loadChildren:()=>
    import('./routes/user/user.module').then((m)=>m.UserModule)
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
