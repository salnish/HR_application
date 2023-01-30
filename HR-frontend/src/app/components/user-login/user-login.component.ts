import { Router } from '@angular/router';
import { AdminService } from './../../routes/hr/services/admin.service';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  title: string = 'Login'
  side:string="login"
  err!: string; 
  bar:boolean=false

  constructor(private _adminService:AdminService,private _router:Router){}

  onLogin(event:any){
    this.bar=!this.bar;
    console.log(event);
    this._adminService.login(event)
    .subscribe({
      next:(v)=>{
        console.log(v)
        if(v.token){
          localStorage.setItem('token',v.token)
          this.bar=!this.bar;
          this._router.navigate(v.isAdmin?['/hr']:['/user'])
        }
      },
      error:(e)=>{
        console.log(e)
        if(e instanceof HttpErrorResponse){
          this.bar=!this.bar;
          this.err=e.error
        }
      }
    })
  }
}
