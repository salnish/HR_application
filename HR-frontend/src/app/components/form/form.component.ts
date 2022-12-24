import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  hide: boolean = true;
  confirmHide:boolean =true;

  @Input() title:string='' 
  @Input() side!:string
  @Input() errorMsg:string=''

  @Input() bar:boolean= false;
  @Input() link!:string ;
  @Output() form:EventEmitter<any> = new EventEmitter()

  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void { 
  }

  loginForm:FormGroup=this.fb.group({
    phone: ['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  loginSubmit(){
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value)
      return;
    }
    this.form.emit(this.loginForm.value)
    console.log(this.loginForm.value);
  
  }

}
