import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(private fb:FormBuilder,private _router:Router,private _adminService:AdminService){}

  empForm:FormGroup=this.fb.group({
    empId: ['', [Validators.required]],
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  submit(){
    console.log(this.empForm.value);
    this._adminService.addEmployee(this.empForm.value)
    .subscribe({
      next:(v)=>{
        console.log(v)
      },
      error:(e)=>{
        console.log(e);
      }
    })
    
  }

}
