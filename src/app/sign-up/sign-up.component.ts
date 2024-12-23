import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUp:FormGroup = new FormGroup({
    userName: new FormControl(null ,[Validators.required , Validators.minLength(4)]),
    email: new FormControl(null ,[Validators.required , Validators.email]),
    password: new FormControl(null ,[Validators.required , Validators.maxLength(8)]),
    mobil: new FormControl(null ,[Validators.required , Validators.minLength(11)]),
  })


  signUpInfor(form:FormGroup){
    console.log(form)
  }
}
