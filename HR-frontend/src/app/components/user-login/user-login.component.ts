import { Component } from '@angular/core';

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

  onLogin(event:any){
    console.log(event);
  }
}
