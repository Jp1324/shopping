import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from './userModel';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: [
    './loginpage.component.css',
    '../app.component.css']
})

export class LoginpageComponent implements OnInit {
  phoneNumber: any;
  userInfo= {} as User;
  otp: any;
  otpToCompare = "1234" //this is the variable for getting the otp from service.
  correctFormat = true;
  otpValidation = false;
  requiredForm: FormGroup;

  ngOnInit(){   
    this.requiredForm = this.fb.group({
      phoneNumber: ["",
        [Validators.required,
        Validators.pattern('(([(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]
      ],
      otp:["",
        [Validators.required,
          Validators.pattern('([0-9]{3,4})')]
      ]
    });
  }

  getOTP() {
    console.log(this.requiredForm.get("phoneNumber")?.getRawValue());
  }

  checkOTP() {
   const newUser: User = {
    login: this.requiredForm.get("phoneNumber")?.getRawValue(),
    otp: this.requiredForm.get("otp")?.getRawValue()
   } as User;

   this.otp =  this.requiredForm.get("otp")?.getRawValue();

    if(this.otp == this.otpToCompare) {
      // Put navigation code here
      console.log("correct");
    } else if(this.otp == null ) {
      console.log("the otp field is empty");
    } else {
      console.log("");
    }
  }

  constructor(private fb: FormBuilder) {
  }
}